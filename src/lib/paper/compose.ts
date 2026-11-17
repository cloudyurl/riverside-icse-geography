import { EXTRA_MAP, EXTRA_MCQS, EXTRA_STRUCTURED, EXTRA_TOPO } from "./bank-extra";
import { MCQS, MAP_ITEMS, OPTION_LETTERS, TOPO } from "./bank-short";
import { STRUCTURED } from "./bank-long";
import { hashCode, mulberry32, shuffle } from "./rng";
import type { MapItem, Mcq, Paper, Structured } from "./types";
import { CHAPTERS } from "./types";

const ALL_TOPO = [...TOPO, ...EXTRA_TOPO];
const ALL_MAP = [...MAP_ITEMS, ...EXTRA_MAP];
const ALL_MCQ = [...MCQS, ...EXTRA_MCQS];
const ALL_STRUCTURED = [...STRUCTURED, ...EXTRA_STRUCTURED];

export const bankTotals = {
  topoPairs: ALL_TOPO.length,
  topoQuestions: ALL_TOPO.length * 2,
  mapItems: ALL_MAP.length,
  mcqs: ALL_MCQ.length,
  longQuestions: ALL_STRUCTURED.length,
  longParts: ALL_STRUCTURED.length * 4,
};

export function questionsInChapter(chapter: string) {
  return {
    long: ALL_STRUCTURED.filter((item) => item.chapter === chapter).length,
    mcq: ALL_MCQ.filter((item) => item.chapter === chapter).length,
  };
}

const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"];

function groupBy<T>(items: readonly T[], key: (item: T) => string) {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const k = key(item);
    const list = map.get(k);
    if (list) list.push(item);
    else map.set(k, [item]);
  }
  return map;
}

function pickSpread(items: readonly MapItem[], n: number, rng: () => number) {
  const by = groupBy(items, (item) => item.category);
  const cats = shuffle(rng, [...by.keys()]);
  const picked: MapItem[] = [];
  const used = new Set<string>();
  let guard = 0;
  while (picked.length < n && guard < 80) {
    const cat = cats[guard % cats.length]!;
    const pool = (by.get(cat) ?? []).filter((item) => !used.has(item.id));
    if (pool.length) {
      const choice = pool[Math.floor(rng() * pool.length)]!;
      picked.push(choice);
      used.add(choice.id);
    }
    guard += 1;
  }
  return shuffle(rng, picked);
}

function pickMcqs(rng: () => number) {
  const by = groupBy(ALL_MCQ, (item) => item.chapter);
  const picked: Mcq[] = [];
  for (const chapter of CHAPTERS) {
    const pool = shuffle(rng, by.get(chapter) ?? []);
    if (pool[0]) picked.push(pool[0]);
  }
  const extras = CHAPTERS.filter((chapter) => (by.get(chapter)?.length ?? 0) > 1);
  const extraChapter = shuffle(rng, [...extras])[0];
  if (extraChapter) {
    const already = picked.find((item) => item.chapter === extraChapter);
    const rest = (by.get(extraChapter) ?? []).filter((item) => item.id !== already?.id);
    const next = shuffle(rng, rest)[0];
    if (next) picked.push(next);
  }
  return shuffle(rng, picked).slice(0, 10);
}

function pickStructured(rng: () => number) {
  const by = groupBy(ALL_STRUCTURED, (item) => item.chapter);
  const picked: Structured[] = [];
  for (const chapter of CHAPTERS) {
    const pool = by.get(chapter) ?? [];
    const choice = pool[Math.floor(rng() * pool.length)];
    if (choice) picked.push(choice);
  }
  return picked;
}

export function compose(code: string): Paper {
  const clean = code.trim().toUpperCase() || "RIVER1";
  const rng = mulberry32(hashCode(clean));
  const topo = shuffle(rng, ALL_TOPO).slice(0, 5);
  const map = pickSpread(ALL_MAP, 10, rng);
  const mcqs = pickMcqs(rng);
  const structured = pickStructured(rng);

  const ids = [
    ...topo.map((item) => item.id),
    ...map.map((item) => item.id),
    ...mcqs.map((item) => item.id),
    ...structured.map((item) => item.id),
  ];

  return {
    code: clean,
    ids,
    topo: topo.map((item, index) => ({
      label: ROMAN[index] ?? String(index + 1),
      a: { label: "(a)", text: item.a, marks: 1, answer: item.aAnswer },
      b: { label: "(b)", text: item.b, marks: 1, answer: item.bAnswer },
    })),
    map: map.map((item, index) => ({
      label: `(${ROMAN[index]})`,
      text: item.text,
      marks: 1,
      answer: item.answer,
    })),
    mcqs: mcqs.map((item, index) => ({
      label: `(${ROMAN[index]})`,
      stem: item.stem,
      options: item.options,
      answerLetter: OPTION_LETTERS[item.answer] ?? "a",
      answer: `(${OPTION_LETTERS[item.answer]}) ${item.options[item.answer]}`,
    })),
    structured: structured.map((item, index) => ({
      number: index + 4,
      chapter: item.chapter,
      parts: item.parts.map((part, partIndex) => ({
        label: `(${ROMAN[partIndex]})`,
        text: part.text,
        marks: part.marks,
        answer: part.answer,
      })),
    })),
  };
}

export function overlapCount(a: Paper, b: Paper) {
  const used = new Set(b.ids);
  return a.ids.filter((id) => used.has(id)).length;
}

export function freshCode(recentCodes: string[], makeCode: () => string) {
  const used = new Set<string>();
  for (const code of recentCodes.slice(0, 8)) {
    if (!code) continue;
    for (const id of compose(code).ids) used.add(id);
  }
  let best = makeCode();
  let bestOverlap = Number.POSITIVE_INFINITY;
  for (let attempt = 0; attempt < 24; attempt++) {
    const code = attempt === 0 ? best : makeCode();
    const overlap = compose(code).ids.filter((id) => used.has(id)).length;
    if (overlap < bestOverlap) {
      best = code;
      bestOverlap = overlap;
    }
    if (overlap <= 3) break;
  }
  return best;
}
