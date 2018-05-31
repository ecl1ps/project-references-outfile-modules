// Ha! 

namespace Convert {
    export const FeetPerMeter = 3.28084;
    
    export function metersToFeet(m: number) {
        return m / FeetPerMeter;
    }

    export function feetToMeters(f: number) {
        return f * FeetPerMeter;
    }

    // Takes a number like 14 and returns a string like `1' 2"`
    export function formatInches(i: number) {
        if (i < 12) {
            return `${i}"`;
        }
        const ft = Math.floor(i / 12);
        i = i - ft * 12;
        return `${ft}' ${Utils.leftPad(i.toString(), 2)}`;
    }
}
