// src/utils/helpers.ts
export function getTodayDay(): number {
  return new Date().getDate();
}

export function getCurrentMonthNumber(): number {
  // 1..12
  return new Date().getMonth() + 1;
}

// Optional: tomorrow with month rollover (unused now, but handy)
export function getTomorrowDayAndMonth(): { day: number; month: number } {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return { day: d.getDate(), month: d.getMonth() + 1 };
}

const helpers = { getTodayDay, getCurrentMonthNumber, getTomorrowDayAndMonth };
export default helpers;
