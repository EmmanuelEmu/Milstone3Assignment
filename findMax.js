let a = 10 ; 
let b = 6 ; 
let c = 9 ; 
if(a>b && a>c){
    console.log("a is the biggest number");
}
else if(b>c && b>a){
    console.log("b is the biggest number");
}
else{
    console.log("c is the biggest number");
}
let n = Math.max(a,b,c);
console.log(n);