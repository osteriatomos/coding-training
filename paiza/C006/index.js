const lines = [
  "4 10 3",
  "1.5 1.2 2 0.4",
  "208 200 3 99988",
  "255 150 50 65472",
  "103 748 39 48571",
  "159 403 32 89928",
  "254 300 67 78492",
  "249 298 47 45637",
  "253 382 89 37282",
  "250 350 78 76782",
  "251 371 69 67821",
  "256 312 89 54382",
];

const [N, M, K] = lines[0].split(" ").map((val) => parseInt(val, 10));
const C = lines[1].split(" ").map((val) => parseFloat(val));

let score = [];
for (let m = 0; m < M; m++) {
  const X = lines[m + 2].split(" ").map((val) => parseInt(val, 10));
  let sum = 0;
  for (let n = 0; n < N; n++) {
    sum += X[n] * C[n];
  }
  score.push(sum);
}

const intScore = score.map((val) => Math.round(val));

intScore.sort((a, b) => b - a);
intScore.slice(0, K).forEach((val) => console.log(val));
