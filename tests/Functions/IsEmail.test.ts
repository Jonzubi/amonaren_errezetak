import { isEmail } from '../../src/utils/functions/email';

test('isEmail', () => {
  expect(isEmail('j@j.com')).toBe(true);
  expect(isEmail('@j.com')).toBe(false);
  expect(isEmail('@.com')).toBe(false);
  expect(isEmail('@com')).toBe(false);
  expect(isEmail('a@')).toBe(false);
  expect(isEmail('a@.')).toBe(false);
  expect(isEmail('com')).toBe(false);
});
