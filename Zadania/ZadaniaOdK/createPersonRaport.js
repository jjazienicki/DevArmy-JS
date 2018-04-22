function createPersonRaport(name, surname, age, gender) {
  var personObj = {
    name: name,
    surname: surname,
    age: age,
    gender: gender,
    getFullName: function getFullName() {
      return name + " " + surname;
    },
    getFullInfo: function getFullInfo() {
      return "Person raport: \n Full name: " + this.getFullName() +
        "\n age: " + age +
        "\n gender: " + gender;
    }
  };

  return personObj;
}

var person1 = createPersonRaport('Janusz', 'Kowalski', 20, 'male');
var person2 = createPersonRaport('Piotr', 'Kowalski', 22, 'male');
var person3 = createPersonRaport('Beata', 'Kowalski', 12, 'female');

var family = [person1, person2, person3];

console.log(person1.getFullName());
console.log(person1.getFullInfo());
