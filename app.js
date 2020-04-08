var hello = "Hello World!";
alert(hello);

var int1 = 1;
var int2 = -10;
var float1 = 3.14;
var str1 = "JavaScriptを覚えよう！";
alert(int1)
alert(int1 * int2);

alert("Hello" + "World");

var str2 = "Hello";
var str3 = "World";
alert(str2 + str3 + str1);

var orange = 120;
var apple = 100;
if(orange < apple){
	alert("蜜柑は林檎より安い");
}
else if(orange == apple){
	alert("蜜柑と林檎はおんなじお値段");
}
else{
	alert("蜜柑の値段はリンゴよりたけえ");
}

var max = 100;
var num = 1;
var count = 0;
while(num < max){
	num = num * 2;
	count = count + 1;
}
alert("2を掛け続けて" + max + "を超えるんに必要だった回数は" + count + "回です" + count + "回数目は" + num + "です");

var i;
var num = 0;
for(i = 1; i < 11; i++){
	num = num + i;
}
alert("1から10まで足し算した結果は" + num + "です" + i);