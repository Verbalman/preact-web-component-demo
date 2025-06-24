/**
 * Check if passed value is true or false
 * @param value
 * @constructor
 */
export function BoolFromString(value: 'true' | 'false' | string) {
  return (String(value).toLowerCase() === 'true');
}

/**
 * Check if passed value is a valid JSON
 * @param text
 */
export function isValidJSON(text?: string) {
  let isValid = false;

  if (typeof text !== 'string' || text.length === 0) {
    return isValid;
  }

  try {
    JSON.parse(text);
    isValid = true;
  } catch (e) {
    console.error('[isValidJSON], invalid JSON text', text);
  }

  return isValid;
}
