const getPrime = (num) => {
  let primes = [];

  for (let i = 2; i <= num; i++) {
    primes[i] = true;
  }

  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (primes[j] === true) {
      for (let k = j * 2; k <= num; k += j) {
        primes[k] = false;
      }
    }
  }

  for (let l = 2; l <= num; l++) {
    if (primes[l] === true) {
      console.log(l);
    }
  }
};

getPrime(50);
