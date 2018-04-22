// na obiekcie
function calculateMoney(nominals, money) {
  var raport = {};

  for (var i = 0; i < nominals.length; i++) {
    var currentNominal = nominals[i];
    var divider = money / currentNominal;

    if (divider >= 1) {
      var count = parseInt(divider);
      // dynamiczne tworzenie klucza obiektu
      raport[currentNominal] = count;
      money = money - (currentNominal * count);
    }
  }

  return raport;
}

// na tablicy
function calculateMoneyArray(nominals, money) {
  var result = [];

  for (var i = 0; i < nominals.length; i++) {
    var currentNominal = nominals[i];
    var divider = money / currentNominal;

    if (divider >= 1) {
      var count = parseInt(divider);
      var singleSet = {
        count: count,
        nominal: currentNominal
      }
      result.push(singleSet);
      money = money - (currentNominal * count);
    }
  }

  return result;
}

var nominals = [500, 200, 100, 50, 20, 10, 5, 2, 1];
var money = 997;

console.log(calculateMoney(nominals, money));
