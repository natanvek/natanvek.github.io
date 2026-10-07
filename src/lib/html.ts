// Titles and stats may contain small inline HTML (<sub>, <sup>) for math notation.
// Use this wherever plain text is required (<title>, meta tags, alt text).
export const stripTags = (s: string) => s.replace(/<[^>]+>/g, '');
