/// <reference path="convert.d.ts" />
declare namespace Utils {
    function swap(arr: any[], i1: number, i2: number): void;
}
declare namespace Utils {
    function leftPad(s: string, n: number): string;
    function roundTo(n: number, places: number): number;
}
//# sourceMappingURL=utils.d.ts.map
declare namespace Convert {
    const FeetPerMeter = 3.28084;
    function metersToFeet(m: number): number;
    function feetToMeters(f: number): number;
    function formatInches(i: number): string;
}
declare namespace Convert {
    function cToF(c: number): number;
    function fToC(f: number): number;
}
//# sourceMappingURL=convert.d.ts.map
declare function showTempConversion(): void;
declare function showLengthConversion(): void;
//# sourceMappingURL=cli.d.ts.map