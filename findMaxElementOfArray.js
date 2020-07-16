let a = [2,3,5,6,7,8,11,14];
let len = a.length;
let i = 0;
let max = -10000000;
while(i!=(len)){
        if(a[i]>=max){
            max = a[i];
        }
        else{
            continue;
        }
        i++;
}
console.log(max);