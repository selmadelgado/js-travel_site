class Person {
  
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }
  
  greet(){
    console.log("Hi there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}



export default Person;








var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes(){
    console.log(this.name + " now owes $0 in taxes.");
  }
}

var aries = new Person("Aries Peterson", "white");
aries.greet();

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();


/* $("h1").remove();

alert("ABC 321"); */