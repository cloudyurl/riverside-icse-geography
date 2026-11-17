import {
  AlignmentType,
  Document,
  Footer,
  HighlightColor,
  HorizontalPositionRelativeFrom,
  ImageRun,
  Packer,
  PageNumber,
  Paragraph,
  TabStopType,
  TextRun,
  TextWrappingSide,
  TextWrappingType,
  UnderlineType,
  VerticalPositionRelativeFrom,
} from "docx";
import type { Paper, PaperSettings } from "./types";
import { examHeading, instructionLines } from "./text";

const TNR = "Times New Roman";
const GOTHIC = "Century Gothic";
const BODY = "Calibri";
const RIGHT = 9923;

function tnr(text: string, size: number) {
  return new TextRun({ text, font: TNR, size });
}

function gothic(
  text: string,
  opts: { bold?: boolean; underline?: boolean; highlight?: boolean; size?: number } = {},
) {
  return new TextRun({
    text,
    font: GOTHIC,
    size: opts.size ?? 22,
    bold: opts.bold,
    underline: opts.underline ? { type: UnderlineType.SINGLE } : undefined,
    highlight: opts.highlight ? HighlightColor.LIGHT_GRAY : undefined,
  });
}

function body(
  text: string,
  opts: { bold?: boolean; italics?: boolean; size?: number } = {},
) {
  return new TextRun({
    text,
    font: BODY,
    size: opts.size ?? 22,
    bold: opts.bold,
    italics: opts.italics,
  });
}

function rule() {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 80, after: 80 },
    children: [gothic("-".repeat(108), { size: 20 })],
  });
}

function metaLine(left: string, right: string) {
  return new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: RIGHT }],
    spacing: { before: 0, after: 0, line: 276, lineRule: "auto" },
    children: [gothic(left, { bold: true }), gothic(`\t${right}`, { bold: true })],
  });
}

function marked(text: string, marks: number | null, indent = 0) {
  return new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: RIGHT }],
    indent: indent ? { left: indent } : undefined,
    spacing: { before: 40, after: 40, line: 276, lineRule: "auto" },
    children: marks == null ? [body(text)] : [body(text), body(`\t(${marks})`)],
  });
}

function questionTitle(text: string) {
  return new Paragraph({
    spacing: { before: 200, after: 60, line: 276, lineRule: "auto" },
    children: [body(text, { bold: true, italics: true })],
  });
}

export async function paperToDocx(
  paper: Paper,
  settings: PaperSettings,
  key: boolean,
  logo: Uint8Array | null,
) {
  const children: Paragraph[] = [];
  const schoolRuns = [];
  if (logo) {
    schoolRuns.push(
      new ImageRun({
        type: "png",
        data: logo,
        transformation: { width: 58, height: 58 },
        altText: { title: "School crest", description: settings.schoolName },
        floating: {
          horizontalPosition: {
            relative: HorizontalPositionRelativeFrom.COLUMN,
            offset: 0,
          },
          verticalPosition: {
            relative: VerticalPositionRelativeFrom.PARAGRAPH,
            offset: 0,
          },
          wrap: { type: TextWrappingType.SQUARE, side: TextWrappingSide.BOTH_SIDES },
          margins: { top: 0, bottom: 0, left: 114300, right: 114300 },
          allowOverlap: false,
        },
      }),
    );
  }
  schoolRuns.push(tnr(settings.schoolName, 36));
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 0 },
      children: schoolRuns,
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 40, after: 80 },
      children: [tnr(settings.address, 20)],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 120, after: 40 },
      children: [gothic(examHeading(settings), { bold: true, underline: true })],
    }),
  );
  if (key) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 40, after: 40 },
        children: [gothic("ANSWER KEY", { bold: true, underline: true })],
      }),
    );
  }
  children.push(rule());
  children.push(metaLine(`Grade   : ${settings.grade}`, `Marks: ${settings.marks}`));
  children.push(
    metaLine(`Subject : ${settings.subject}`, `Duration: ${settings.duration}`),
  );
  const date = settings.date.trim();
  children.push(metaLine(date ? `Date    : ${date}` : "", `Set: ${settings.setLabel.trim() || "A"}`));
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 160, after: 60, line: 276, lineRule: "auto" },
      children: [gothic("General Instructions", { bold: true, underline: true, highlight: true })],
    }),
  );
  instructionLines(settings).forEach((line, index) => {
    children.push(
      new Paragraph({
        spacing: { before: 20, after: 20, line: 276, lineRule: "auto" },
        children: [gothic(`${index + 1}.  ${line}`)],
      }),
    );
  });
  children.push(rule());

  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 160, after: 40 },
      children: [body("PART - I", { bold: true })],
    }),
    new Paragraph({
      spacing: { before: 0, after: 80 },
      children: [body("Answer all questions from this part.", { bold: true, italics: true })],
    }),
  );

  children.push(questionTitle("Question 1"));
  children.push(marked("Topographical map skills.", null));
  for (const item of paper.topo) {
    children.push(marked(`(${item.label})  (a)  ${item.a.text}`, item.a.marks));
    if (key) children.push(marked(`Ans. ${item.a.answer}`, null, 420));
    children.push(marked(`(b)  ${item.b.text}`, item.b.marks, 420));
    if (key) children.push(marked(`Ans. ${item.b.answer}`, null, 420));
  }

  children.push(questionTitle("Question 2"));
  children.push(marked("On the outline map of India provided:", null));
  for (const item of paper.map) {
    children.push(marked(`${item.label}  ${item.text}`, item.marks));
    if (key) children.push(marked(`Ans. ${item.answer}`, null, 420));
  }

  children.push(questionTitle("Question 3"));
  children.push(
    marked(
      "Choose the correct answers to the questions from the given options. (Do not copy the questions. Write the correct answers only.)",
      10,
    ),
  );
  for (const item of paper.mcqs) {
    children.push(marked(`${item.label}  ${item.stem}`, null));
    item.options.forEach((option, index) => {
      const letter = ["(a)", "(b)", "(c)", "(d)"][index];
      children.push(marked(`${letter}  ${option}`, null, 420));
    });
    if (key) children.push(marked(`Ans. ${item.answer}`, null, 420));
  }

  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 280, after: 40 },
      children: [body("PART II", { bold: true })],
    }),
    new Paragraph({
      spacing: { before: 0, after: 80 },
      children: [
        body("Answer any five questions from this part.", { bold: true, italics: true }),
      ],
    }),
  );

  for (const question of paper.structured) {
    children.push(questionTitle(`Question ${question.number}`));
    if (key) children.push(marked(question.chapter, null));
    for (const part of question.parts) {
      children.push(marked(`${part.label}  ${part.text}`, part.marks));
      if (key) children.push(marked(`Ans. ${part.answer}`, null, 420));
    }
  }

  const doc = new Document({
    styles: {
      default: {
        document: { run: { font: BODY, size: 22 } },
      },
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: 11900, height: 16840 },
            margin: { top: 907, right: 907, bottom: 907, left: 907, header: 0, footer: 280 },
          },
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                tabStops: [{ type: TabStopType.RIGHT, position: RIGHT }],
                children: [
                  body(`Paper code ${paper.code}`, { italics: true, size: 18 }),
                  new TextRun({ children: ["\t", PageNumber.CURRENT], font: BODY, size: 18 }),
                ],
              }),
            ],
          }),
        },
        children,
      },
    ],
  });

  return Packer.toBlob(doc);
}
