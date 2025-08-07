function Flam(x) {
    let y = x.length;
    let skrot = "";

    for (let n = 0; n < y; n++) {
        let m = 1;
        while (n + 1 < y && x[n] === x[n + 1]) {
            m++;
            n++;
        }
        skrot += x[n];
        if (m > 1) {
            skrot += m;
        }
    }
    console.log(skrot);
}

Flam('AarSttt');         // Aa r S t3
Flam('AarStttuuuuuuuuuuUuuuu'); // Aa r S t3 u10 U u4
Flam('AarStTt');         // Aa r S t T t
Flam('4');               // 4