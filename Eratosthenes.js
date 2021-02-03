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
};

getPrime(10);
