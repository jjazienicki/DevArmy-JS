function stringLogger(strings) {
  for (var i = 0; i < strings.length; i++) {
    console.log(strings[i]);
  }
}

function stringLoggerForOf(strings) {
  for (var element of strings) {
    console.log(element);
  }
}

function stringLoggerForIn(strings) {
  for (var index in strings) {
    console.log(strings[index]);
  }
}

function stringLoggerWhile(strings) {
  var i = 0;
  while (i < strings.length) {
    console.log(strings[i]);
    i++;
  }
}

function stringLoggerForEach(strings) {
  strings.forEach(function (element, index) {
    console.log(element);
  });
}

var array = ["czesc", "jestem", "bartosz", "z", "devarmy"];
stringLoggerForEach(array)
// stringLoggerWhile(array)
// stringLoggerForOf(array)
// stringLoggerForIn(array)

