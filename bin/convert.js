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