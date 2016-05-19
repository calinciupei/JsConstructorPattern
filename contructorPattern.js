/**
 * Created by calin on 17-May-16.
 *
 * Simple version of a constructor pattern.
 * Disatvantages for this pattern are:
 * 1. Makes inheritance difficult.
 * 2. Function as toString() are redefined for easch new object created using Mountain constructor
 */

function Mountain(name, height, country){
    this.name = name;
    this.height = height;
    this.country = country;

    this.toString = function () {
        return "Mountain "+this.name+" has height "+this.height+" in country "+this.country;
    }
}

var annapurna = new Mountain('Annapurna', 8000, "Nepal");
var makalu = new Mountain('Makalu', 27838, "Nepal");

console.log(annapurna.toString());
console.log(makalu.toString());


/****
* Constructor with prototypes
* If a javscript constructor is called for creating an object, then all the properties of the constructor's
* prototype are available to the new object.
* */

function Car(model, year, miles){
    this.model = model;
    this.year = year;
    this. miles = miles;
}

/*
 * syntax is Object.prototype.newMethod.
 * it is used this way to avoid redefining the property object.
*/
Car.prototype.toString = function(){return this.model+" has done "+this.miles+" miles"};

var civic = new Car("H Civic", 2990, 2001222);
var mondeo = new Car("F Mondeo", 788, 5554788);

console.log(civic.toString());
console.log(mondeo.toString());