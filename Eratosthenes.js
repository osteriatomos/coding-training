N = [
  [2, 2],
  [2, 4],
  [2, 32],
  [4, 128],
  [8, 256],
  [100, 10000],
  [10000, 1000000],
];

const getPrime = (num) => {
  let primes = new Array(num + 1).fill(true);
  primes[0] = false;
  primes[1] = false;

  primes.forEach((isPrime, idxNum) => {
    if (!isPrime) return;
    for (let i = idxNum * 2; i <= num; i += idxNum) {
      primes[i] = false;
    }
  });

  primes.forEach((isPrime, idxNum) => {
    if (isPrime) console.log(idxNum);
  });

  return primes;
};

const maxNum = Math.max(...N.flat());
const isPrimeList = getPrime(maxNum);

N.forEach(([start, end]) => {
  const slicedIsPrimeList = isPrimeList.slice(start, end + 1);
  console.log(slicedIsPrimeList.filter((isPrime) => isPrime).length);
});
