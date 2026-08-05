export function getFirstSentence(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return trimmed;

  const match = trimmed.match(/^[\s\S]*?[.!?](?=\s|$)/);
  return match ? match[0].trim() : trimmed;
}
