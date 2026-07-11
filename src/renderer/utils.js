/* ========================================
   UTILITIES — Shared helpers
   ======================================== */

/**
 * Format a duration in minutes to a human-readable string.
 * @param {number} minutes
 * @returns {string} e.g. "1h 30m", "45m", "2h"
 */
export function formatDuration(minutes) {
  if (!minutes || minutes <= 0) return '0m';
  const h = Math.floor(minutes / 60);
  const m = Math.round(minutes % 60);
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

/**
 * Escape HTML special characters to prevent XSS.
 * @param {string} text
 * @returns {string}
 */
export function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Get the local date string in YYYY-MM-DD format for a given Date object or date value.
 * @param {Date|string|number} [date]
 * @returns {string} e.g. "2026-07-11"
 */
export function getLocalDateString(date) {
  const d = typeof date === 'string' || typeof date === 'number' ? new Date(date) : (date || new Date());
  if (isNaN(d.getTime())) return '';
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

