import { formatRelative } from 'date-fns';
import { enGB } from 'date-fns/locale';

export function dateToISO(date: Date | null) {
  if (date instanceof Date) {
    return new Date(date).toISOString();
  }

  return null;
}

export function getReadableDate(date: string | null) {
  return date
    ? formatRelative(new Date(date), new Date(), { locale: enGB })
    : 'no due date';
}
