console.dir("123");
typeof("123"); //string number Array object function;instanceof;Object.prototype.toString.call;constructor

function getConstructorName(obj) {
    return (obj === undefined || obj === null) ? obj : (obj.constructor && obj.constructor.toString().match(/function\s*([^(]*)/)[1]);
}

//函数预解析

//
/**
 *  类型
 *  window、document、navigator
 *  Math、Json、arguments
 *  Boolean String Number Date Function Array Ojbect RegExp Error undefined
 * 
 *  隐式类型转换
 *  if == 数学运算符
 *  Number NaN
 *  parseInt()
 * 
 *  类型解析
 *  typeof
 *  Ojbect.propertype.toString.call
 *  oconstructor
 */


//apply 实际上传入新对象的this
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
}

var p = new Point(0, 0);
p.move(2, 3);

var circle = { x: 1, y: 1, r: 1 };
p.move.apply(circle, [2, 1]);
//=========================================
//函数模式this指向window对象
function add(num1, num2) {
    console.log(this);
}

add(1, 2);
var addInstance = new add(1, 2);

var functionDefine = function(num1, num2) {
    console.log(this);
}

var functonInstance2 = new functionDefine();

var myNumber = {
    value: 1,
    add: function(num1) {
        console.log(this);
        this.value += num1;

        console.log(this.value);
        var helper = function(num1) {
            console.log(this);
            console.log(this.myNumber.value);
            this.myNumber.value += num1;
        }

        helper(num1)

        console.log(this.value);
    }
}

myNumber.add(1);

function car(x, y) {
    this.x = x;
    this.y = y;
    var add = function(num1, num2) {
        console.log(this);
    }
    console.log(this);
}

var carNew = new car();

//函数调用 arguments Array-like对象
//闭包函数

var arr = ["c", "f"];
var strArr = "ab1de2";

var func = (function() {
    var count = 0;
    return function() {
        return arr[count++];
    }
})();

var count3 = 0;
var func3 = function() {
    return arr[count3++]
}

strArr = strArr.replace(/\d/g, func3);
strArr = strArr.replace(/\d/g, func);

console.log(strArr);
console.log(func);

var func2 = function() {
    var count = 0;
    return function() {
        return arr[count++];
    }
}

//闭包对象封装
var wheel = function() {
    var status = "stop";
    return {
        start: function() {
            status = "driving";
        },

        getstatus: function() {
            console.log(status);
        }
    }
}

var carRes = wheel();
carRes.start();
carRes.getstatus();
console.log(carRes.constructor);

var carRes2 = new wheel();
carRes2.start();
carRes2.getstatus();
console.log(carRes2.constructor);
//内存优化
var sum = function(num1, num2) {
    var add = function(num1, num2) {
        return num1 + num2;
    }

    return add(num1, num2);
}

var sum2 = (function(num1, num2) {
    var add = function() {
        return num1 + num2;
    }

    return function() {
        add(num1, num2);
    }
})();

//first-class function 回调函数
//function.prototype.bind 
var moveFunc = function(x, y) {
    this.x += x;
    this.y += y;
}

var p = { x: 1, y: 1 };
var pmove2 = moveFunc.bind(p, 1, 2);
pmove2();
console.log(p);
//apply、call
var numbers = [1, 2, 3, 5];
var maxNumbers = Math.max.apply(p, numbers);
var minNumbers = Math.min.apply(Math, numbers);

var maxNumbers2 = Math.max.call(Math, 5, 6, 7, 8);
console.log(maxNumbers);

//柯里化