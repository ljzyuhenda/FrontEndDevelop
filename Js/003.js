function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype.move2 = function(stepX, stepY){
    this.x += stepX;
    this.y += stepy;
}

var point1 = new Point(1, 1);
var point2 = new Point(2, 2);


var date = new Date();
date.getFullYear();
date.getDay();

date = new Date(2016, 3, 0);


/^http:/.test("http://www");
/http$/.test("http");
/\bhttp:/.test("http");

/**
 * ^    以..开始
 * $    以..结束
 * \b   以..为边界
 * \d   [0-9]
 * \D   [^0-9]
 * \s   空白符
 * \w   [A-Za-z0-9_]
 * *    出现0或者n次
 * +    出现1+次
 * {m, n}   出现m到n次
 * ？    0或者1次
 * |    多选分支
 * 
 * ()   捕获
 * (?:) 不捕获
 *      使用$1,$2等表示捕获内容
 */

var url = "http://blog.163.com/album?id=1#comment";
var reg = "/(https?:)\/\/([^\/]+)(\/[^\?]*)?(\?[^#]*)?(#.*)?/"

var arr = url.match(reg);
var protocol = arr[1];
var host = arr[2];
var pathName = arr[3];
var search = arr[4];
var hash = arr[5];
