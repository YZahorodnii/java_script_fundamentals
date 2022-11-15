function isItTrueOrFalse(trueOrFalse) {
    if (trueOrFalse) {
        return "Yes, it is True";
    }
    return "No it is False";
}

//console.log(isItTrueOrFalse(false));


function myReturnBiggest(a, b, c) {
    if (a > b && a > c) {
        return "a: " + a;
    }
    else if (a > b && a < c) {
        return "c: " + c;
    }
    else if (a < b && a < c) {
        if (b < c) {
        return "c: " + c;
        }
        else {
        return "b: " + b;
        }
    }
    else if (a < b && a > c) {
    return "b: " + b;
    }
}

//console.log(myReturnBiggest(15, 25, 10));


function compareTwoVal(item1, item2) {
    if (item1 > item2) return "TRUE";
    else {
    return "FALSE";
    }
}

//console.log(compareTwoVal(10, 9));


var names= ["Sadly", "Poor Guy", "Less than expected", "Good Job!"];
function howFarYouHit(metres, attempt) {
    if (metres > 4 || attempt > 4) {
        return names[1];
    }
    else if (metres >= 3 && attempt >= 3 ) {
        return names[0];
    }
    else if (metres == 3) {
        return names[2];
    }
    else if (metres < 2) {
        return names[3];
    }
}

//console.log(howFarYouHit(1, 1));
