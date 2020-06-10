const f1 = a => a*a;

const f1a = function(a){
    return a*a;
}

const f2 = () => {
    let s = 0;
    for(let i=1; i<=10; i++){
        s += i;
    }
    return s;
}

console.log(f1(7));
console.log(f2());
