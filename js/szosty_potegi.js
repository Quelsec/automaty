function potega(x,y=1) {
    let z=x;
    let wynik;
    for (let i=1; i<y; i++) {
        z=z*x;
    }
    console.log(z%10);
}
potega(2);
potega(2,2);
potega(3,3);
potega(10,2);
