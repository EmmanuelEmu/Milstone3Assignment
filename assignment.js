function feetToMile(feetValue) {
    if(feetValue<0){
        return "Invalid input";
    }
    else{
        let mile = feetValue / 5280;
    return mile.toFixed(4);
    }
}

function woodCalculator(ch, tb, bd) {
    let total = (1 * ch) + (3 * tb) + (5 * bd);
    return total;
}
function tinyFriends(arr) {
    let min = arr[0].length;
    let smallName = arr[0];
    let i = 1;
    let cnt = 0;
    for (let j = 0; j <= arr.length; j++) {
        if (arr[j] == '') {
            cnt++;
        }
    }
    if (cnt == 0) {
        while (i < arr.length) {
            if (arr[i].length <= min) {
                min = arr[i].length;
                smallName = arr[i];
            }
            i++;
        }
        return smallName;
    }
    else {
        return "There is a empty name .Try to avoid this";
    }
}

let ft = 129;
let mile_result = feetToMile(ft);
console.log("The mile converted value is:", mile_result);

let chair = 10, table = 2, bed = 3;
let totalWood = woodCalculator(chair, table, bed);
console.log("The total required woods is:", totalWood);


let friends = ["Emu", "Mukta", "JONY"];
console.log(tinyFriends(friends));


