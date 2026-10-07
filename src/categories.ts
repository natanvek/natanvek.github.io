export const categories = {
  competition: { label: 'Competition', color: '#b45309' },
  research: { label: 'Research', color: '#6d28d9' },
  trading: { label: 'Trading', color: '#047857' },
  games: { label: 'Games', color: '#be185d' },
  volunteering: { label: 'Volunteering', color: '#1d4ed8' },
  work: { label: 'Work', color: '#0e7490' },
  tools: { label: 'Tools', color: '#a16207' },
} as const;

export type Category = keyof typeof categories;
