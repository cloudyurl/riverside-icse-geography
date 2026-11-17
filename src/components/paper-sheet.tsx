import type { Paper, PaperSettings } from "@/lib/paper/types";
import { examHeading, instructionLines } from "@/lib/paper/text";

const LETTERS = ["(a)", "(b)", "(c)", "(d)"];

function Marked({ text, marks }: { text: string; marks: number }) {
  return (
    <p className="text-pretty">
      {text} <span className="whitespace-nowrap">[{marks}]</span>
    </p>
  );
}

function Answer({ text }: { text: string }) {
  return <p className="mt-1 border-l-2 border-rule pl-3 text-sm italic text-rule">{text}</p>;
}

export function PaperSheet({
  paper,
  settings,
  showKey,
}: {
  paper: Paper;
  settings: PaperSettings;
  showKey: boolean;
}) {
  const lines = instructionLines(settings);
  return (
    <article className="sheet mx-auto w-full max-w-3xl bg-sheet px-5 py-8 text-ink shadow-lg sm:px-10 sm:py-12 font-serif">
      <header className="text-center">
        <img src="/riverside-logo.png" alt="Riverside Public School crest" className="mx-auto mb-3 h-20 w-20 object-contain" />
        <h1 className="text-xl font-bold tracking-wide sm:text-2xl">{settings.schoolName}</h1>
        <p className="mt-1 text-xs text-muted sm:text-sm">{settings.address}</p>
        <div className="mt-4 border-y border-ink py-2">
          <p className="text-base font-bold sm:text-lg">{examHeading(settings)}</p>
          {showKey ? <p className="mt-1 text-sm font-bold tracking-widest text-rule">ANSWER KEY</p> : null}
        </div>
      </header>
      <div className="mt-4 grid grid-cols-2 gap-y-1 text-sm sm:text-base">
        <p>Grade : {settings.grade}</p>
        <p className="text-right">Marks: {settings.marks}</p>
        <p>Subject : {settings.subject}</p>
        <p className="text-right">Duration: {settings.duration}</p>
        <p>{settings.date.trim() ? `Date : ${settings.date.trim()}` : ""}</p>
        <p className="text-right">Set: {settings.setLabel.trim() || "A"}</p>
      </div>
      <h2 className="mt-5 text-center text-base font-bold">General Instructions</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ol>
      <p className="mt-10 text-right text-xs italic text-muted">Paper code {paper.code}</p>
    </article>
  );
}
