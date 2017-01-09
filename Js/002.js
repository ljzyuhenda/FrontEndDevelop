function add(a, b){
    return a + b;
}

var num1Ele = document.getElementById("num1");
var num2Ele = document.getElementById("num2");
var resultEle = document.getElementById("result");
var addManipulationEle = document.getElementById("calculate");

addManipulationEle.addEventListener("click", addClick, false);

function addClick(){
    var num1 = parseInt(num1Ele.value);
    var num2 = parseInt(num2Ele.value);

    resultEle.innerHTML = add(num1, num2);
}