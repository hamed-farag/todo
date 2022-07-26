import { formatRelative } from "date-fns";

export function getRelativeTime(currentDate: string): string {
  return formatRelative(new Date(currentDate), new Date());
}

export function getCurrentUTCTime(): string {
  return new Date().toISOString();
}
