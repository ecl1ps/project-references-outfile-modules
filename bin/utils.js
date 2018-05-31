"use strict";
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