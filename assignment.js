function feetToMile(feetValue) {
    if (feetValue < 0) {
        return "Invalid input";
    }
    else {
        let mile = feetValue / 5280;
        return mile.toFixed(4);
    }
}

function woodCalculator(ch, tb, bd) {
    ch = Math.abs(ch);
    tb = Math.abs(tb);
    bd = Math.abs(bd);
    let total = (1 * ch) + (3 * tb) + (5 * bd);
    return total;
}

function brickCalculator(floorNum) {
    if (floorNum < 0) {
        return "Invalid input";
    }
    else if(floorNum==0){
        return 0;
    }
    else {
        let sum = 0;
        if (floorNum >= 1 && floorNum <= 10) {
            sum = sum + (10 * 15 * 1000);
        }
        else if (floorNum > 10 && floorNum <= 20) {
            sum = sum + (10 * 15 * 1000) + (12 * (floorNum - 10) * 1000);
        }
        else {
            sum = sum + (10 * 15 * 1000) + (12 * 10 * 1000) + (10 * (floorNum - 20) * 1000);
        }

        return sum;
    }
}


function tinyFriend(arr) {
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
console.log("The mile converted value is: " + mile_result + " mile");

let chair = 10, table = 2, bed = 3;
let totalWood = woodCalculator(chair, table, bed);
console.log("The total required woods is: " + totalWood + " cubic/feet");


let friends = ["Emu", "Mukta", "JONY"];
console.log("The small name among the array is : ", tinyFriend(friends));

let floor = 0;
console.log("The total amount of bricks is : ", brickCalculator(floor));


