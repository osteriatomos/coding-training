const array = [2, 3, 5, 8, 13, 21];

const checkIsPrimary = (num) => {
  if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
};

array.forEach((num) => console.log(checkIsPrimary(num)));
