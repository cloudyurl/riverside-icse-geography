import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { FileText, KeyRound, RefreshCw } from "lucide-react";
import { PaperSheet } from "@/components/paper-sheet";
import { bankTotals, compose, freshCode, questionsInChapter } from "@/lib/paper/compose";
import { paperToDocx } from "@/lib/paper/export-docx";
import { paperToPdf } from "@/lib/paper/export-pdf";
import { normaliseCode, randomCode } from "@/lib/paper/rng";
import { fileStub } from "@/lib/paper/text";
import { CHAPTERS, DEFAULT_SETTINGS, type PaperSettings } from "@/lib/paper/types";

export const Route = createFileRoute("/")({ component: Home });

const SETTINGS_KEY = "riverside-papers-settings";
const HISTORY_KEY = "riverside-papers-history";
const CODE_KEY = "riverside-papers-code";

type HistoryItem = {
  code: string;
  examTitle: string;
  session: string;
  setLabel: string;
  at: number;
};

function loadSettings(): PaperSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...(JSON.parse(raw) as Partial<PaperSettings>) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

function loadHistory(): HistoryItem[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? (JSON.parse(raw) as HistoryItem[]) : [];
  } catch {
    return [];
  }
}

function saveBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function loadLogo() {
  const response = await fetch("/riverside-logo.png");
  if (!response.ok) return { bytes: null, dataUrl: null };
  const bytes = new Uint8Array(await response.arrayBuffer());
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Could not read the school crest."));
    reader.readAsDataURL(new Blob([bytes], { type: "image/png" }));
  });
  return { bytes, dataUrl };
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold tracking-wide text-foam-dim">{label}</span>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-md border border-pine-soft bg-sheet px-3 text-sm text-ink"
      />
    </label>
  );
}

function Home() {
  const [settings, setSettings] = useState<PaperSettings>(DEFAULT_SETTINGS);
  const [code, setCode] = useState("RIVER1");
  const [draftCode, setDraftCode] = useState("RIVER1");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showKey, setShowKey] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = loadSettings();
    const storedCode = normaliseCode(localStorage.getItem(CODE_KEY) || "") || "RIVER1";
    setSettings(stored);
    setCode(storedCode);
    setDraftCode(storedCode);
    setHistory(loadHistory());
  }, []);

  useEffect(() => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem(CODE_KEY, code);
  }, [code]);

  const paper = useMemo(() => compose(code), [code]);

  const patch = (partial: Partial<PaperSettings>) => {
    setSettings((current) => ({ ...current, ...partial }));
  };

  const remember = (next: string) => {
    const item: HistoryItem = {
      code: next,
      examTitle: settings.examTitle,
      session: settings.session,
      setLabel: settings.setLabel,
      at: Date.now(),
    };
    const nextHistory = [item, ...history.filter((entry) => entry.code !== next)].slice(0, 12);
    setHistory(nextHistory);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(nextHistory));
  };

  const openCode = (value: string) => {
    const next = normaliseCode(value);
    if (!next) return;
    setCode(next);
    setDraftCode(next);
    remember(next);
    setError("");
  };

  const makeNew = () => {
    const next = freshCode(
      history.map((item) => item.code),
      randomCode,
    );
    setCode(next);
    setDraftCode(next);
    remember(next);
    setShowKey(false);
    setError("");
  };

  const download = async (kind: "docx" | "pdf", key: boolean) => {
    const token = `${kind}-${key ? "key" : "paper"}`;
    setBusy(token);
    setError("");
    try {
      const logo = await loadLogo();
      const name = `${fileStub(settings, paper.code, key)}.${kind === "docx" ? "docx" : "pdf"}`;
      if (kind === "docx") {
        const blob = await paperToDocx(paper, settings, key, logo.bytes);
        saveBlob(blob, name);
      } else {
        const pdf = paperToPdf(paper, settings, key, logo.dataUrl);
        saveBlob(pdf.output("blob"), name);
      }
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "The file could not be prepared.");
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[22rem_1fr]">
      <aside className="bg-pine text-foam lg:min-h-screen">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 py-5 lg:max-w-none lg:px-5">
          <div className="flex items-center gap-3">
            <img
              src="/riverside-logo.png"
              alt=""
              className="h-12 w-12 rounded-md bg-foam object-contain p-1"
            />
            <div>
              <p className="text-lg font-semibold leading-tight">Riverside Papers</p>
              <p className="text-sm text-foam-dim">ICSE Class 10 Geography</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={makeNew}
              className="col-span-2 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-brass font-semibold text-ink"
            >
              <RefreshCw className="h-4 w-4" aria-hidden />
              New paper
            </button>
            <button
              type="button"
              disabled={busy !== null}
              onClick={() => download("docx", false)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-foam font-semibold text-pine disabled:opacity-60"
            >
              <FileText className="h-4 w-4" aria-hidden />
              {busy === "docx-paper" ? "Preparing…" : "Word"}
            </button>
            <button
              type="button"
              disabled={busy !== null}
              onClick={() => download("pdf", false)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-foam font-semibold text-pine disabled:opacity-60"
            >
              <FileText className="h-4 w-4" aria-hidden />
              {busy === "pdf-paper" ? "Preparing…" : "PDF"}
            </button>
            <button
              type="button"
              disabled={busy !== null}
              onClick={() => download("docx", true)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-foam-dim text-sm font-semibold text-foam disabled:opacity-60"
            >
              <KeyRound className="h-4 w-4" aria-hidden />
              {busy === "docx-key" ? "…" : "Key · Word"}
            </button>
            <button
              type="button"
              disabled={busy !== null}
              onClick={() => download("pdf", true)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-foam-dim text-sm font-semibold text-foam disabled:opacity-60"
            >
              <KeyRound className="h-4 w-4" aria-hidden />
              {busy === "pdf-key" ? "…" : "Key · PDF"}
            </button>
          </div>

          {error ? <p className="text-sm text-brass">{error}</p> : null}

          <p className="text-sm leading-relaxed text-foam-dim">
            Each new paper keeps the ICSE pattern. The bank, drawn from the Class 10 papers, holds{" "}
            {bankTotals.longQuestions} long questions ({questionsInChapter(CHAPTERS[0]).long} in every
            chapter), {bankTotals.mcqs} multiple-choice questions, {bankTotals.mapItems} map items and{" "}
            {bankTotals.topoQuestions} topographical questions.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Exam" value={settings.examTitle} onChange={(examTitle) => patch({ examTitle })} />
            <Field label="Session" value={settings.session} onChange={(session) => patch({ session })} />
            <Field label="Date" value={settings.date} onChange={(date) => patch({ date })} placeholder="12 March 2027" />
            <Field label="Set" value={settings.setLabel} onChange={(setLabel) => patch({ setLabel })} />
            <Field label="Grade" value={settings.grade} onChange={(grade) => patch({ grade })} />
            <Field label="Subject" value={settings.subject} onChange={(subject) => patch({ subject })} />
            <Field label="Marks" value={settings.marks} onChange={(marks) => patch({ marks })} />
            <Field label="Duration" value={settings.duration} onChange={(duration) => patch({ duration })} />
          </div>

          <label className="block">
            <span className="mb-1 block text-xs font-semibold tracking-wide text-foam-dim">
              Instructions, one on each line
            </span>
            <textarea
              value={settings.instructions}
              onChange={(event) => patch({ instructions: event.target.value })}
              rows={5}
              className="w-full rounded-md border border-pine-soft bg-sheet px-3 py-2 text-sm text-ink"
            />
          </label>

          <details className="rounded-md border border-pine-soft">
            <summary className="cursor-pointer px-3 py-3 text-sm font-semibold">Letterhead</summary>
            <div className="grid gap-3 px-3 pb-3">
              <Field
                label="School name"
                value={settings.schoolName}
                onChange={(schoolName) => patch({ schoolName })}
              />
              <label className="block">
                <span className="mb-1 block text-xs font-semibold tracking-wide text-foam-dim">Address</span>
                <textarea
                  value={settings.address}
                  onChange={(event) => patch({ address: event.target.value })}
                  rows={2}
                  className="w-full rounded-md border border-pine-soft bg-sheet px-3 py-2 text-sm text-ink"
                />
              </label>
            </div>
          </details>

          <form
            className="flex gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              openCode(draftCode);
            }}
          >
            <label className="block flex-1">
              <span className="mb-1 block text-xs font-semibold tracking-wide text-foam-dim">Paper code</span>
              <input
                value={draftCode}
                onChange={(event) => setDraftCode(event.target.value.toUpperCase())}
                className="h-11 w-full rounded-md border border-pine-soft bg-sheet px-3 font-mono text-sm tracking-widest text-ink"
              />
            </label>
            <button
              type="submit"
              className="mt-5 h-11 rounded-md border border-foam-dim px-4 text-sm font-semibold"
            >
              Open
            </button>
          </form>

          <label className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={showKey}
              onChange={(event) => setShowKey(event.target.checked)}
              className="h-4 w-4 accent-brass"
            />
            Show the answer key on the preview
          </label>

          {history.length > 0 ? (
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-foam-dim">Recent papers</p>
              <ul className="space-y-1">
                {history.map((item) => (
                  <li key={item.code}>
                    <button
                      type="button"
                      onClick={() => openCode(item.code)}
                      className="flex w-full items-baseline justify-between gap-3 rounded-md px-2 py-2 text-left hover:bg-pine-soft"
                    >
                      <span className="font-mono text-sm tracking-wider">{item.code}</span>
                      <span className="truncate text-xs text-foam-dim">
                        {item.examTitle} · Set {item.setLabel}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </aside>

      <main className="px-3 py-6 sm:px-6 sm:py-8">
        <PaperSheet paper={paper} settings={settings} showKey={showKey} />
      </main>
    </div>
  );
}
