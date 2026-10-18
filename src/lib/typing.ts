                                                                                                                                        export type CharacterState = "correct" | "incorrect" | "pending";

export function normalizeUrdu(value: string): string {
  return value.normalize("NFC").replace(/[\u200c\u200d]/g, "");
}

export function compareTyping(expected: string, actual: string): CharacterState[] {
  const target = Array.from(normalizeUrdu(expected));
  const typed = Array.from(normalizeUrdu(actual));
  return target.map((character, index) => {
    if (index >= typed.length) return "pending";
    return typed[index] === character ? "correct" : "incorrect";
  });
}

export function accuracy(expected: string, actual: string): number {
  const states = compareTyping(expected, actual);
  const attempted = Math.min(Array.from(normalizeUrdu(actual)).length, states.length);
  if (!attempted) return 0;
  return Math.round((states.slice(0, attempted).filter((state) => state === "correct").length / attempted) * 100);
}
