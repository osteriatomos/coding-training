let lines = ["6", "2 1 3", "4"];

const goal = parseInt(lines[0], 10);
const [usagiSpeed, usagiRestKm, usagiRestMin] = lines[1]
  .split(" ")
  .map((val) => parseInt(val, 10));
const kameSpeed = parseInt(lines[2], 10);

console.log(goal, usagiSpeed, usagiRestKm, usagiRestMin, kameSpeed);
