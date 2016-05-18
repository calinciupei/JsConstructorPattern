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