function prime(x) {
    let y=Math.sqrt(x);
    let a=true;
    for (let n=2; n<=y; n++)
    {
        if (x % n === 0)
        {
            a = false;
            break;
        }
    }
    if (a) {
            console.log(x,'  TAK');
        } else {
            console.log(x,'NIE');
        }
}
prime(7);
prime(2);
prime(15);
prime(133);
prime(150);
