let lines = ["10", "1 1 10", "10"];

const L = parseInt(lines[0], 10);
const [u, a, b] = lines[1].split(" ").map((val) => parseInt(val, 10));
const v = parseInt(lines[2], 10);

const usagiSpeed = 1 / u;
const kameSpeed = 1 / v;

let usagiPosition = 0;
let kamePosition = 0;

let usagiRestKm = 0;
let usagiRestMin = 0;

while (true) {
  if (usagiRestMin < 1) {
    usagiPosition = 1 / 10e9 + usagiPosition + usagiSpeed;
    usagiRestKm = 1 / 10e9 + usagiRestKm + usagiSpeed;
    if (usagiRestKm >= a) {
      usagiRestKm = 0;
      usagiRestMin = b;
    }
  } else {
    usagiRestMin--;
  }

  kamePosition = 1 / 10e9 + kamePosition + kameSpeed;

  if (usagiPosition > L && kamePosition > L) {
    console.log("DRAW");
    break;
  } else if (usagiPosition >= L) {
    console.log("USAGI");
    break;
  } else if (kamePosition >= L) {
    console.log("KAME");
    break;
  }
}
