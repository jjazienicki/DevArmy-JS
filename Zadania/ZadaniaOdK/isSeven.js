/* // zadziała tak samo jak na dole 

  function isSeven(x, y) {
    if (
      (x === 7 || y === 7) ||
      (x + y === 7) ||
      (x - y === 7) ||
      (y - x === 7)
    ) {
      return true;
    } else {
      return false;
    }
  }
*/

function isSeven(x, y) {
  // sprawdzamy czy podany jest przynajmniej jeden parametr;
  if (x === undefined || y === undefined) {
    console.error('Musi byc podana przynajmniej jedna liczba')
    return false;
  }

  return (
    (x === 7 || y === 7) ||
    (x + y === 7) ||
    (x - y === 7) ||
    (y - x === 7)
  );
}

console.log(isSeven());
