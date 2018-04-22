function isHigher() {
  var numbers = [-6, -2, -8, -1, -3];
  var higher = numbers[0];

  for (var i = 1; i < numbers.length; i++) {
    var currentNumber = numbers[i];
    if (currentNumber > higher) {
      higher = currentNumber;
    }
  }

  return higher;
}
