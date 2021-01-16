const lines = ["5", "1 2 3 1 1"];

const N = lines[0].split(" ").map((val) => parseInt(val, 10));
const ids = lines[1].split(" ").map((val) => String(val));

let count = {};
for (let key of ids) {
  count[key] = ids.filter((id) => id === key).length;
}

let counts = [];

for (let i in count) {
  counts.push({ id: i, count: count[i] });
}

const maxCount = Math.max(...counts.map((data) => data.count));
const answerUser = counts.filter((c) => c.count === maxCount);
const answer = answerUser.map((u) => u.id);

console.log(...answer.sort((a, b) => a - b));
