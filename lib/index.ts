export function run(str: string): string[] {
  // add runtime check for use in JavaScript
  if (typeof str !== "string") {
    return [];
  }

  return ["array", "of", "strings"];
}
