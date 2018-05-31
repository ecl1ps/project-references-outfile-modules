"use strict";"use strict";
var Utils;
(function (Utils) {
    function swap(arr, i1, i2) {
        var tmp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = tmp;
    }
    Utils.swap = swap;
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    function notExported() {
    }
    function leftPad(s, n) {
        notExported();
        if (s.length >= n)
            return s;
        return Array(n - s.length + 1).join(" ") + s;
    }
    Utils.leftPad = leftPad;
    function roundTo(n, places) {
        var f = Math.pow(10, places);
        return Math.round(n * f) / f;
    }
    Utils.roundTo = roundTo;
})(Utils || (Utils = {}));
//# sourceMappingURL=utils.js.map
"use strict";
// Ha! 
var Convert;
(function (Convert) {
    Convert.FeetPerMeter = 3.28084;
    function metersToFeet(m) {
        return m / Convert.FeetPerMeter;
    }
    Convert.metersToFeet = metersToFeet;
    function feetToMeters(f) {
        return f * Convert.FeetPerMeter;
    }
    Convert.feetToMeters = feetToMeters;
    // Takes a number like 14 and returns a string like `1' 2"`
    function formatInches(i) {
        if (i < 12) {
            return i + "\"";
        }
        var ft = Math.floor(i / 12);
        i = i - ft * 12;
        return ft + "' " + Utils.leftPad(i.toString(), 2);
    }
    Convert.formatInches = formatInches;
})(Convert || (Convert = {}));
// This is cool
var Convert;
(function (Convert) {
    function cToF(c) {
        return 1.8 * c + 32;
    }
    Convert.cToF = cToF;
    function fToC(f) {
        return (f - 32) / 1.8;
    }
    Convert.fToC = fToC;
})(Convert || (Convert = {}));
//# sourceMappingURL=convert.js.map
showTempConversion();
showLengthConversion();
/// <reference path="../bin/convert.d.ts" />
function showTempConversion() {
    console.log("The boiling point of water in F is " + Convert.cToF(100));
}
function showLengthConversion() {
    var i = 35;
    var i = 10;
    console.log(i + " inches formats as " + Convert.formatInches(i) + "\"");
}
//# sourceMappingURL=cli.js.map