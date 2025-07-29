import { toWords } from 'number-to-words';

export default function toReadable(number) {
  return toWords(number)
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};
