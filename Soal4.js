var randomNumbers = [
  90,
  99,
  78,
  73,
  80,
  60,
  96,
  67,
  55,
  86,
  80,
  81,
  81,
  73,
  77,
  71,
  90,
  87,
  85,
  23,
  52,
  87,
  78,
  96,
  80,
  68,
];

var total = randomNumbers
  .filter((x) => x >= 65)
  .map((x) => x / 2)
  .filter((x) => x < 40)
  .map((x) => randomNumbers.length / x )
  .reduce((x, y) => x / 2 + y);

console.log(total);
