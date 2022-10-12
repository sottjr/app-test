
let number = 100004123;

if (number % 1119 == 0 && number >= 100000000) {
  console.log(`This number is divisible: ${number}`);

} else {
  while (number % 1119 != 0) {
    number++;
  }
  console.log(`This number is not divisible: ${number}`);
}

let list = number.toString().split('').map(Number);
console.log(list);

let count = {};
list.forEach(function(i) { count[i] = (count[i]||0) + 1; });
console.log(count);
