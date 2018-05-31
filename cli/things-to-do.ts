/// <reference path="../bin/convert.d.ts" />

function showTempConversion() {
    console.log(`The boiling point of water in F is ${Convert.cToF(100)}`);
}

function showLengthConversion() {
    var i = 35;
    var i = 10;
    console.log(`${i} inches formats as ${Convert.formatInches(i)}"`);
}

