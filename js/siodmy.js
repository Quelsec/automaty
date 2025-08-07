function kwadrat(a,b,c) {
    if (a==0) {
        console.log("A nie może być zerem");
        return 0;
    }
    else {
        let delta=b*b-(4*a*c);
        if (delta > 0) {
            let x1=(-b - Math.sqrt(delta)) /(2*a);
            let x2= (-b + Math.sqrt(delta)) /(2*a); 
            console.log("2 rozwiązania");
        } else if (delta===0) {
            let x= -b/(2*a);
            console.log("1 rozwiazanie", x)
        }
        else {
            console.log("brak rozwiązań rzeczywistych");
        }
    }
}
kwadrat(10,10,1)