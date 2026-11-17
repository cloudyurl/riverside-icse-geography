import type { Paper, PaperSettings } from "@/lib/paper/types";
import { examHeading, instructionLines } from "@/lib/paper/text";

const LETTERS = ["(a)", "(b)", "(c)", "(d)"];

function Marked({
  text,
  marks,
}: {
  text: string;
  marks: number;
}) {
  return (
    <p className="text-pretty">
      {text} <span className="whitespace-nowrap">[{marks}]</span>
    </p>
  );
}

function Answer({ text }: { text: string }) {
  return (
    <p className="mt-1 border-l-2 border-rule pl-3 text-sm italic text-rule">{text}</p>
  );
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
        <img
          src="/riverside-logo.png"
          alt="Riverside Public School crest"
          className="mx-auto mb-3 h-20 w-20 object-contain"
        />
        <h1 className="text-xl font-bold tracking-wide sm:text-2xl">{settings.schoolName}</h1>
        <p className="mt-1 text-xs text-muted sm:text-sm">{settings.address}</p>
        <div className="mt-4 border-y border-ink py-2">
          <p className="text-base font-bold sm:text-lg">{examHeading(settings)}</p>
          {showKey ? <p className="mt-1 text-sm font-bold tracking-widest text-rule">ANSWER KEY</p> : null}
        </div>
      </header>

      <div className="mt-4 grid grid-cols-2 gap-y-1 text-sm sm:text-base">
        <p>Grade&nbsp;&nbsp;&nbsp;: {settings.grade}</p>
        <p className="text-right">Marks: {settings.marks}</p>
        <p>Subject : {settings.subject}</p>
        <p className="text-right">Duration: {settings.duration}</p>
        <p>{settings.date.trim() ? `Date     : ${settings.date.trim()}` : ""}</p>
        <p className="text-right">Set: {settings.setLabel.trim() || "A"}</p>
      </div>

      <h2 className="mt-5 text-center text-base font-bold">General Instructions</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ol>

      <div className="my-5 border-t border-ink" />

      <section>
        <h2 className="text-center text-lg font-bold">PART I</h2>
        <p className="text-center font-bold">(30 Marks)</p>
        <p className="text-center text-sm italic">Attempt all questions from this Part.</p>

        <h3 className="mt-5 font-bold">Question 1</h3>
        <p className="mt-1 text-sm italic">Topographical map skills.</p>
        <div className="mt-3 space-y-3 text-sm sm:text-base">
          {paper.topo.map((item) => (
            <div key={item.label}>
              <Marked text={`(${item.label})   (a)  ${item.a.text}`} marks={item.a.marks} />
              {showKey ? <Answer text={item.a.answer} /> : null}
              <div className="mt-1 pl-6">
                <Marked text={`(b)  ${item.b.text}`} marks={item.b.marks} />
                {showKey ? <Answer text={item.b.answer} /> : null}
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-6 font-bold">Question 2</h3>
        <p className="mt-1 text-sm italic">On the outline map of India provided:</p>
        <ol className="mt-3 space-y-2 text-sm sm:text-base">
          {paper.map.map((item) => (
            <li key={item.label}>
              <Marked text={`${item.label}   ${item.text}`} marks={item.marks} />
              {showKey ? <Answer text={item.answer} /> : null}
            </li>
          ))}
        </ol>

        <h3 className="mt-6 font-bold">Question 3</h3>
        <p className="mt-1 text-sm italic">
          Choose the correct answers to the questions from the given options. (Do not copy the
          questions. Write the correct answers only.)
        </p>
        <div className="mt-3 space-y-3 text-sm sm:text-base">
          {paper.mcqs.map((item) => (
            <div key={item.label}>
              <p>
                {item.label} {item.stem}
              </p>
              <ul className="mt-1 space-y-0.5 pl-6">
                {item.options.map((option, index) => (
                  <li key={LETTERS[index]}>
                    {LETTERS[index]} {option}
                  </li>
                ))}
              </ul>
              {showKey ? <Answer text={item.answer} /> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-center text-lg font-bold">PART II</h2>
        <p className="text-center font-bold">(50 Marks)</p>
        <p className="text-center text-sm italic">Attempt any five questions from this Part.</p>
        {paper.structured.map((question) => (
          <div key={question.number} className="mt-6">
            <h3 className="font-bold">Question {question.number}</h3>
            {showKey ? <p className="text-sm italic text-muted">{question.chapter}</p> : null}
            <div className="mt-2 space-y-3 text-sm sm:text-base">
              {question.parts.map((part) => (
                <div key={part.label}>
                  <Marked text={`${part.label}   ${part.text}`} marks={part.marks} />
                  {showKey ? <Answer text={part.answer} /> : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <p className="mt-10 text-right text-xs italic text-muted">Paper code {paper.code}</p>
    </article>
  );
}
