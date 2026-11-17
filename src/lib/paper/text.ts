import type { PaperSettings } from "./types";

export function instructionLines(settings: PaperSettings) {
  return settings.instructions
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

export function examHeading(settings: PaperSettings) {
  const session = settings.session.trim();
  return session ? `${settings.examTitle.trim()} (${session})` : settings.examTitle.trim();
}

export function fileStub(settings: PaperSettings, code: string, key: boolean) {
  const set = settings.setLabel.trim() || "A";
  const safe = (value: string) => value.replace(/[^\w]+/g, "_").replace(/^_|_$/g, "");
  return `${safe(settings.schoolName) || "School"}_${safe(settings.subject) || "Geography"}_Set${safe(set)}_${code}${key ? "_Answers" : ""}`;
}

export function pdfSafe(value: string) {
  return value
    .replace(/–|—/g, "-")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/°/g, " deg")
    .replace(/×/g, "x");
}
