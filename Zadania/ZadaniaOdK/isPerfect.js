function isPerfect(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i > number / 2) {
      break;
    }

    if (number % i === 0) {
      sum = sum + i;
    }
  }

  return sum === number;
}

console.log(isPerfect(6));
