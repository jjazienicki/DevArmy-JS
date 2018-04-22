class Person {
  constructor(name, surname, dateOfBirth, gender) {
    this.name = name;
    this.surname=surname;
    this.dateOfBirth=dateOfBirth;
    this.gender=gender;
  }

  hello(){
      return "Hello, I'm " + this.name + " " + this.surname;
  }

  getAge(){
    var date1 = moment(new Date());
    var date2 = moment(this.dateOfBirth);
    return date1.diff(date2,'years');
  }

  getLifeDays(){
    var date1 = moment(new Date());
    var date2 = moment(this.dateOfBirth);
    return date1.diff(date2,'days');
  }
}

var person = new Person('Mikołaj', 'Kowalski', new Date("1990-10-12"), 'male');
var infoPerson = person.hello() + " " + person.getAge() + " " + person.getLifeDays();

console.log(infoPerson);

