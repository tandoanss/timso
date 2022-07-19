// var x = [33, 2, 11, 32, 55]
// var max = x[0]
// for (var i = 0; i < x.length; i = i + 1) {
//     if (x[i] > max) {
//         max = x[i]
//         console.log(max)
//     }
// }

// var x = [33, 2, 11, 32, 55]
// var sole = x[0]
// for (var i = 0; i < x.length; i = i + 1) {
//     if (x[i] % 2 == 0) {
//         sole = x[i]
//         console.log(sole)
//     }
// }



// var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var max = x[0]
// for (var i = 0; i < x.length; i = i + 1) {
//     if (x[i] === 2) {
//         max = x[i]
//         console.log(max)
//     }
// }


xArray = []
function getvalue() {
    var x = document.getElementById('xValue').value
    xArray.push(Number(x))
    document.getElementById('nhapso').innerHTML = xArray
}

function deleteitem() {
    xArray = []
    document.getElementById('nhapso').innerHTML = xArray
}


function findMax() {
    var max = xArray[0]
    for (var i = 0; i < xArray.length; i++) {
        if (xArray[i] > max) {
            max = xArray[i]
        }
    }
    document.getElementById('demo').innerHTML = max;
}
function findMin() {
    var min = xArray[0]
    for (var i = 0; i < xArray.length; i++) {
        if (xArray[i] < min) {
            min = xArray[i]
        }
    }
    document.getElementById('demo1').innerHTML = min;
}





function findEven() {
    var Even = []
    for (var i = 0; i < xArray.length; i = i + 1) {
        if (xArray[i] % 2 == 0) {
            Even.push(xArray[i])
        }
    }
    document.getElementById('demo2').innerHTML = Even;
}

function findOld() {
    var Old = []
    for (var i = 0; i < xArray.length; i = i + 1) {
        if (xArray[i] % 2 == 1) {
            Old.push(xArray[i])
        }
    }
    document.getElementById('demo3').innerHTML = Old;
}

function checkSNT(n) {
    var check = true;        
    if (n < 2) {
        check = false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0)
            check = false;
    }
    return check;
}
function snt () {
    var number = document.getElementById('xValue').value;
    if (checkSNT(number) == true) {
        document.getElementById('demo4').innerHTML = number + ' ' + "Là số nguyên tố"
    }
    else {
        document.getElementById('demo4').innerHTML = number + ' ' + "Không phải là số nguyên tố"
    }
}
