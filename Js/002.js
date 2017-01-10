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

    // console.log(num1);
    resultEle.innerHTML = add(num1, num2);

    // var num3 = NaN;
    // var num4 = Infinity;
    //String 类型 单引号和双引号一样
    //typeof打印类型

    /**
     * var num = 4;
     * num == "4";//true
     * num === "4";//false
     * 0 == false;//true
     * 2 == true;//false
     * 1 == true;//true
     * 
     * 
     * && 第一个true,则取第二个值
     * && 第一个false,则取第一个
     *     短路操作符
     * 
     * ||
     */

    alert([] == true);//false
    alert(result = [] && 3);//3 
    alert(resut = false && 3);//false
    alert(result = 0 && 3);//

    document.write();
}

//object
var cat = {
    name : "kitty",
    add : function(){
        console.log("cat");
    },
    friend : {
        age : 11,
        name : "hello"
    }
    //delete 删除对象的某个属性值
}

cat.name;
cat['name'];
//in 判断某对象是否有某属性    true/false

var dog = new Object();

for(var propertyName in cat){
    console.log(propertyName);
}

with(kitty.friend){
    document.write("name:" + name + ".age:" + age);
}