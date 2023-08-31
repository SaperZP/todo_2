export function dateToISO(date: Date | null) {
  if (date instanceof Date) {
    return new Date(date).toISOString();
  }

  return null;
}
