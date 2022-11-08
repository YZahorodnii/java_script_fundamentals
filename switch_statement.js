//1 - alpha
//2 - beta
//3 - gamma
//4 - delta

function switchCaseTest(num) {
    switch(num) {
        case 1: {
            answer = "alpha";
        break;
        }
        case 2: {
        answer = "beta";
        break;
        }
        case 3: {
        answer = "gamma";
        break;
        }
        case 4: {
        answer = "delta";
        break;
        }
        default: {
        answer = "OTHER";
        break;
        }
    }
    return answer;
}

//console.log(switchCaseTest(8));


function testSwitchCase(val) {
    var answer = "Please input 1 - 9";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
}
    return answer;
}

//console.log(testSwitchCase(7));
