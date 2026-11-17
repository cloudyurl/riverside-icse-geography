import { jsPDF } from "jspdf";
import type { Paper, PaperSettings } from "./types";
import { examHeading, instructionLines, pdfSafe } from "./text";

const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN = 16;

type Style = "normal" | "bold" | "italic" | "bolditalic";

export function paperToPdf(
  paper: Paper,
  settings: PaperSettings,
  key: boolean,
  logo: string | null,
) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  let y = 16;

  const width = () => PAGE_W - MARGIN * 2;

  const stampPages = () => {
    const total = doc.getNumberOfPages();
    for (let i = 1; i <= total; i++) {
      doc.setPage(i);
      doc.setFont("times", "normal");
      doc.setFontSize(9);
      doc.setTextColor(40);
      doc.text(String(i), PAGE_W / 2, PAGE_H - 8, { align: "center" });
    }
  };

  const newPage = () => {
    doc.addPage();
    y = 18;
    doc.setFont("times", "italic");
    doc.setFontSize(9);
    doc.setTextColor(50);
    doc.text(
      pdfSafe(
        `${settings.schoolName}   ·   ${settings.subject}   ·   Set ${settings.setLabel || "A"}${key ? "   ·   Answer key" : ""}`,
      ),
      MARGIN,
      11,
    );
    doc.setDrawColor(28);
    doc.setLineWidth(0.2);
    doc.line(MARGIN, 13, PAGE_W - MARGIN, 13);
    doc.setTextColor(22);
    y = 18;
  };

  const ensure = (height: number) => {
    if (y + height > PAGE_H - 14) newPage();
  };

  const write = (
    text: string,
    opts: {
      size?: number;
      style?: Style;
      align?: "left" | "center" | "right";
      indent?: number;
      after?: number;
      before?: number;
    } = {},
  ) => {
    const size = opts.size ?? 12;
    const indent = opts.indent ?? 0;
    const lineH = size * 0.42;
    doc.setFont("times", opts.style ?? "normal");
    doc.setFontSize(size);
    doc.setTextColor(22);
    const lines = doc.splitTextToSize(pdfSafe(text), width() - indent) as string[];
    if (opts.before) y += opts.before;
    ensure(lines.length * lineH + 1);
    for (const line of lines) {
      const x =
        opts.align === "center"
          ? PAGE_W / 2
          : opts.align === "right"
            ? PAGE_W - MARGIN
            : MARGIN + indent;
      doc.text(line, x, y, { align: opts.align ?? "left" });
      y += lineH;
    }
    y += opts.after ?? 1.3;
  };

  const rule = () => {
    ensure(4);
    doc.setDrawColor(28);
    doc.setLineWidth(0.3);
    doc.line(MARGIN, y, PAGE_W - MARGIN, y);
    y += 4;
  };

  const pair = (left: string, right: string) => {
    ensure(6);
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.setTextColor(22);
    doc.text(pdfSafe(left), MARGIN, y);
    doc.text(pdfSafe(right), PAGE_W - MARGIN, y, { align: "right" });
    y += 6.2;
  };

  if (logo) {
    const size = 24;
    doc.addImage(logo, "PNG", (PAGE_W - size) / 2, y, size, size);
    y += size + 3;
  }

  write(settings.schoolName, { size: 16, style: "bold", align: "center", after: 1 });
  write(settings.address, { size: 9, align: "center", after: 2 });
  write(examHeading(settings), { size: 13, style: "bold", align: "center", after: key ? 1 : 2 });
  if (key) write("ANSWER KEY", { size: 12, style: "bold", align: "center", after: 2 });
  rule();
  pair(`Grade    : ${settings.grade}`, `Marks: ${settings.marks}`);
  pair(`Subject : ${settings.subject}`, `Duration: ${settings.duration}`);
  pair(settings.date.trim() ? `Date     : ${settings.date.trim()}` : "", `Set: ${settings.setLabel.trim() || "A"}`);
  write("General Instructions", { size: 12, style: "bold", align: "center", before: 2, after: 1.5 });
  instructionLines(settings).forEach((line, index) => {
    write(`${index + 1}.  ${line}`, { size: 11, after: 1 });
  });
  rule();

  const answer = (text: string) => {
    if (!key) return;
    write(`Ans. ${text}`, { size: 11, style: "italic", indent: 8, after: 1.6 });
  };

  write("PART I", { size: 13, style: "bold", align: "center", before: 1, after: 0.4 });
  write("(30 Marks)", { style: "bold", align: "center", after: 0.4 });
  write("(Attempt all questions from this Part.)", { style: "italic", align: "center", after: 3 });

  write("Question 1", { style: "bold", before: 1, after: 1 });
  write("Topographical map skills.", { style: "italic", after: 1.6 });
  for (const item of paper.topo) {
    write(`(${item.label})   (a)  ${item.a.text}   [${item.a.marks}]`, { after: 0.8 });
    answer(item.a.answer);
    write(`(b)  ${item.b.text}   [${item.b.marks}]`, { indent: 10, after: 0.8 });
    answer(item.b.answer);
  }

  write("Question 2", { style: "bold", before: 3, after: 1 });
  write("On the outline map of India provided:", { style: "italic", after: 1.6 });
  for (const item of paper.map) {
    write(`${item.label}   ${item.text}   [${item.marks}]`, { after: 0.7 });
    answer(item.answer);
  }

  write("Question 3", { style: "bold", before: 3, after: 1 });
  write(
    "Choose the correct answers to the questions from the given options. (Do not copy the questions. Write the correct answers only.)",
    { style: "italic", after: 1.8 },
  );
  const letters = ["(a)", "(b)", "(c)", "(d)"];
  for (const item of paper.mcqs) {
    write(`${item.label}   ${item.stem}`, { after: 0.6 });
    item.options.forEach((option, index) => {
      write(`${letters[index]}  ${option}`, { indent: 8, after: 0.4 });
    });
    answer(item.answer);
    if (!key) y += 1.2;
  }

  write("PART II", { size: 13, style: "bold", align: "center", before: 4, after: 0.4 });
  write("(50 Marks)", { style: "bold", align: "center", after: 0.4 });
  write("(Attempt any five questions from this Part.)", {
    style: "italic",
    align: "center",
    after: 3,
  });

  for (const question of paper.structured) {
    write(`Question ${question.number}`, { style: "bold", before: 2.5, after: 1 });
    if (key) write(question.chapter, { style: "italic", after: 1.2 });
    for (const part of question.parts) {
      write(`${part.label}   ${part.text}   [${part.marks}]`, { after: 0.7 });
      answer(part.answer);
    }
  }

  write(`Paper code ${paper.code}`, { size: 9, style: "italic", align: "right", before: 4 });
  stampPages();
  return doc;
}
