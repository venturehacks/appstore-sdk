export function run(str: string): string[] {
  if (typeof str !== "string") {
    return [];
  }

  return ["array", "of", "strings"];
}
