const array = ["foo", "bar", "fizz", "buzz", "foo", "fizz", "foo", "buzz"];

const groupBy = (array) => {
  return array.reduce((acc, cur) => {
    const elem = acc.find((val) => val.key === cur);

    if (elem) {
      elem.count++;
    } else {
      acc.push({
        key: cur,
        count: 1,
      });
    }

    return acc;
  }, []);
};

console.log(groupBy(array));
