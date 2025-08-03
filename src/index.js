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
  const result = [];
  const hundreds = Math.floor(number / 100);
  if (hundreds > 0) {
    result.push(`${units[hundreds]} hundred`);
  }
 const remainder = number % 100;
  if (remainder >= 20) {
    result.push(tens[Math.floor(remainder / 10)]);
    if (remainder % 10 !== 0) {
      result.push(units[remainder % 10]);
    }
  } else if (remainder >= 10) {
    result.push(teens[remainder - 10]);
  } else if (remainder > 0) {
    result.push(units[remainder]);
  }
  return result.join(' ');
};
