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
  console.log(usagiPosition, kamePosition, usagiRestKm, usagiRestMin);
  if (usagiRestMin < 1) {
    usagiPosition = usagiPosition + usagiSpeed + 0.0000000001;
    usagiRestKm = usagiRestKm + usagiSpeed + 0.0000000001;
    if (usagiRestKm >= a) {
      usagiRestKm = 0;
      usagiRestMin = b;
    }
  } else {
    usagiRestMin--;
  }

  kamePosition = kamePosition + kameSpeed + 0.0000000001;

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
