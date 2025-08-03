module.exports = function toReadable(number) {
  if (number === 0) return 'zero';

  const units = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const result = (() => {
    const parts = [];
    let num = number;

    if (num >= 100) {
      parts.push(`${units[Math.floor(num / 100)]} hundred`);
      num %= 100;
    }

    if (num >= 20) {
      parts.push(tens[Math.floor(num / 10)]);
      if (num % 10 !== 0) {
        parts.push(units[num % 10]);
      }
    } else if (num >= 10) {
      parts.push(teens[num - 10]);
    } else if (num > 0) {
      parts.push(units[num]);
    }

    return parts;
  })();

  return result.join(' ');
};
