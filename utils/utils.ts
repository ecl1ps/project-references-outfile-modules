namespace Utils {
    function notExported() {

    }

    export function leftPad(s: string, n: number) {
        notExported();
        
        if (s.length >= n) return s;
        return Array(n - s.length + 1).join(" ") + s;
    }

    export function roundTo(n: number, places: number) {
        const f = Math.pow(10, places);
        return Math.round(n * f) / f;
    }
}
