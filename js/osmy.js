function kalkulator(x,a,b) {
    if (x==='+') {
        console.log(a+b);
    } else if (x==='-') {
        console.log(a-b);
    } else if (x==='*') {
        console.log(a*b);
    } else if (x==='/') {
        if (b===0) {
            console.log("nie dzielimy przez zero");
        } else {
            console.log(z=parseInt(a/b));
        }
    } else if (x==='%') {
        console.log(a%b);
    } 
}
kalkulator('+',7,9);
kalkulator('-',0,4);
kalkulator('*',5,6);
kalkulator('/',8,3);
kalkulator('%',5,2);