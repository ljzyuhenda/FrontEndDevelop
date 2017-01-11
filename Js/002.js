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

    // document.write((100.123).toFixed(2));//保留小数点后几位
    //String函数
    "str".charAt(0);
    "str".indexOf('str');
    "str".search(/[0-9]/);//正则表达式 返回索引位置
    "str".match(/[0-9]/);//正则表达式 返回匹配到的第一个值，数组形式
    "str".match(/[0-9]/g);//g表示全局，匹配到的所有值
    "str".replace("123", "321");//正则或者正常字符串
    "str".replace(/[0-9]/g, "#");
    "str".substring(5, 7);//只可以正数,两个值之间
    "str".substr(5, 2);//取两个
    "str".slice(-1);//可以传负数。从后数不包括第一个
    "str".split('s');//分割
    String(123);//将传入值加""，变成string
    //Array
    var arr = new Array();
    var students = [
        {id : "1", score : 50},
        {id : "1", score : 50},
        {id : "1", score : 50}
    ];

    students.forEach(editScore);

    students.reverse();//数组顺序反转

    students.sort(sortByScore);//类似于compareTo

    students.push({id : "1", score : 50});//往后增加元素
    students.unshift({id : "1", score : 50});//往前面增加元素
    students.shift();//移除第一个,并返回已移除的第一个值
    students.pop();//取出最后一个
    students.splice(1, 1,  {id : "1", score : 50});//剪接
    students.slice(0);
    students.concat();
    students.join(";");//数组成员连接起来

    var scores = [1, 3, 5, 7];
    var newStuArr = [];
    newStuArr.forEach(addScore);

    var newStuArr2 = newStuArr.map(addScore2);

    students.reduce(sum, 0);

    document.write(add(1, 3, 5));
    regDemo1();
}
var sum = function(previousResult, item, index, array){
    return previousResult + item.score;
}

var addScore2 = function(item, index, array){
    return item + 5;
}

var add = function(){
    var length = arguments.length;
    var sum = 0;
    for(var i = 0; i < length; i++){
        sum += arguments[i];
    }

    return sum;
}

var regDemo1 = function(){
    var url = "http://blog.163.com/album?id=1#comment";
    var reg = /(https?:)\/\/([^\/]+)(\/[^\?]*)?(\?[^#]*)?(#.*)?/;

    var arr = url.match(reg);
    var protocol = arr[1];
    var host = arr[2];
    var pathName = arr[3];
    var search = arr[4];
    var hash = arr[5];

    var content = "The price is 5.0";
    var replaceRes = content.replace(/(\d+)/, "$1.00");

    var content2 = "The price is 5， the others is 10";
    var replaceRes2 = content2.replace(/(\d+)/g, "$1.00");
    var replaceRes3 = content2.replace(/(\d+)/g, replaceFuc);//对替换的数据进行函数处理

    var reg2 = /(.*)(\d+)/g;
    var scores = "Tom $88, Nicholas ￥100， jack $38";
    var result;
    while(result = reg2.exec(scores)){
        console.log(reg2.lastIndex);
    }

    //贪婪与惰性模式
    var content3 = "<h1>acb<h1>abc<h1>";
    var reg3 = /<h1>.*<h1>/;
    var reg4 = /<h1>.*?<h1>/;

    var resArr = content3.match(reg3);
    var resArr2 = content3.match(reg4);

    var content4 = "aabab";
    var reg5 = /a.*b/;
    var reg6 = /(.*)/;

    var resArr3 = content4.match(reg5);
    var resArr4 = content4.match(reg6);

    var jsonStr = '{\
        "id": 1,\
        "avatar":"1.jpg"\
    }';

    // var user = JSON.parse(jsonStr);
    var user = JSON.parse(jsonStr, parseDeal);
    var jsonStrRes = JSON.stringify(user);
    var jsonStrResFilter = JSON.stringify(user, ["id"]);

    var jsonParseRes = parseJsToJson(user);

    console.log("ok");
}

var parseJsToJson = function(object){
    var res;
    for(var key in object){
        if(typeof object[key] == "string"){
            res = '"' + key + '":' + object[key] + ',';
        }
    }

    res = "{" + res + "}";
    return res;
}

var parseDeal = function(keyParam, valueParam){
    if(keyParam == "avatar"){
        return "img: " + valueParam;
    }

    return valueParam;
}

var replaceFuc = function(param){
    return param * 10;
}

var addScore = function(item, index, array){
    newStuArr.push(item + 5);
}

var sortByScore = function(first, second){
    return second.score - first.score;
}

var editScore = function(item, index, array){
    item.score += 5;
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

cat.hasOwnProperty("name");//是否包含某属性 true/false,判断是否是继承属性
cat.name;
cat['name'];
//in 判断某对象是否有某属性    true/false

var dog = new Object();

for(var propertyName in cat){
    console.log(propertyName);
}

// with(kitty.friend){
//     document.write("name:" + name + ".age:" + age);
// }

// parseInt,parseFloat,Number
