console.log("პირველი");

for (let i = 0; i < 25; i++) {
  console.log(i);
}

console.log("მეორე");
let i = 0;
while (i <= 20) {
  console.log(i);
  i++;
}
console.log("მესამე");
do {
  console.log(i);
  i++;
} while (i <= 30);

console.log("მეოთხე");
const numbers = [2, 3, 6, 7, 8, 9, 23, 24, 29];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}
console.log("მეხუთე");
const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("კვირა");
    break;
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათი");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
    break;
  default:
    console.log("უცნობი დღე");
}