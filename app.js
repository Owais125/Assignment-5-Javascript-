// ***********Chapter 21 (Changing Case)************

// ******************Q:1*******************

var userInput = prompt("Enter your's Name")

var allLower = userInput.toLowerCase();

alert(allLower)


// ******************Q:2*******************




var x = "Hello World"

 x = x.toLowerCase();

console.log(x)




// ******************Q:3*******************

var y = "Hello World"

 y = y.toUpperCase();

console.log(y)


// ******************Q:4*******************

var str = "Welcome To My Page"

var  lower = str.toLowerCase();

console.log(lower)


// ******************Q:5*******************

var arr = ["Welcome To My Web Page"]

var  lower = arr[0].toLowerCase();

console.log(lower);



// ******************Q:6*******************


var userInput =" Welocme To My World"

var allUpper = userInput.toUpperCase();

alert(allUpper);


// ******************Q:7*******************



var cityName = "kaRacHi";

var firstChr = cityName.slice(0,1).toUpperCase();

 var remainChr = cityName.slice(1).toLowerCase();

console.log(firstChr+remainChr);


// ******************Chapter 22 - 25 (Strings)*******************

// ******************Q:1*******************

var val = "captain";

var valparrt = val.slice(1, 3);

console.log(valparrt);



// ******************Q:2*******************
// ******************Q:2*******************


var mystring = "This is my Assignment"

console.log(mystring.length)


// ******************Q:2*******************



 var animals =  "elephant"

 var seg = animals.slice(2,5);

 console.log(seg)

 

// ******************Q:3*******************


 var my1string = "This is my  Assignment of javascript "

 console.log(my1string.length)



// ******************Q:4*******************


var q4 = "Hello World"

var q04 = q4.slice(8,12);

console.log(q4.length);


console.log(q04);


// ******************Q:5*******************


var text1 = "To be or not to be.";
var indx1 = text1.indexOf("be");

console.log(indx1)


// ******************Q:6*******************

var text2 = "To be or not to be.";
var indx2 = text2.lastIndexOf("be");

console.log(indx2)

// ******************Q:7*******************




var text = "This is the end of the program. Let's go, go, go!";


var lastIndex = text.lastIndexOf("go");

if (lastIndex !== -1) {
  var indx = lastIndex;
  console.log(indx); 
} 
else {
  console.log("The string 'go' was not found in the text.");
}


// ******************Q:8*******************



var chr = "abcde"

var chrat1 = chr.charAt(2)

console.log(chrat1)



// ******************Q:9*******************





var my2string = "This is  my  Assignment of javascript "

var chrat2 = my2string.charAt(10);

console.log(chrat2);


// ******************Q:10*******************



var str = "This is a sample string.";
var w = str.charAt(str.length -1 );

console.log(w); 

// ******************Q:11*******************



var my2string = "This is  my  Assignment of javascript "

var chrat3 = my2string.charAt(5);

console.log(chrat3);


// ******************Q:12*******************

var city = "karachi"

var arr = []

for(var i = 0;i<city.length;i++){
    arr.push(city.charAt(i))
}

console.log(arr)

// ******************Q:13*******************


var stri = "This is 1 example.and There is 1 and another here"

var newstri = stri.replaceAll("1","one")


console.log(newstri)


// ******************Q:14*******************

var strin = "a v w g a h a y y o a "

var x = strin.replace(/a/g,"z")


console.log(x)



// ******************Chapter 27 (Random Numbers)*******************

// ******************Q:1*******************

var randomNumber = Math.random()*50


console.log(randomNumber.toFixed(0));

// ******************Q:2*******************

var randomNumber1 = Math.random()


console.log(randomNumber1);

// ******************Q:3*******************


var dice = Math.random()*6;

// var dice1 = Math.ceil( dice)


console.log( Math.ceil(dice));


// ******************Q:4*******************



var headUser = prompt("Enter head username");

var tailUser = prompt("Enter tail username");

var toss = Math.random() * 2;



var floor = Math.ceil(toss);

if (floor === 1) {
  alert(headUser + " win the toss");
} else {
  alert(tailUser + "win the toss");
}




// ******************Chapter 28, 29 (Converting Strings)*******************


// ******************Q:1*******************

var num = parseInt("Owais")

console.log( typeof num)

// ******************Q:2*******************

var num1 = 3.012548

console.log(num1.toFixed(2))

// ******************Q:3*******************


var number = 42;

var stringNumber = number.toString();

console.log(stringNumber);


// ******************Q:4*******************


var num1 = Number("3.012548")

console.log(num1)

// **************Chapter 30 (Controlling the length ofdecimals)****************

// ******************Q:1*******************

var num = 12.3456789; 

var newNum = num.toFixed(4).toString();

console.log(newNum); 

// ******************Q:2*******************


var num3 = 12.3456789; 

var newNum1 = num3.toFixed(2).toString();

console.log(newNum1);

// ******************Q:3*******************



if (num.toFixed(2).toString().length > 4) {
 console.log("Match")
}


// ******************Q:4*******************


var num4 = 12.3456789; 

var newNum2 = num4.toFixed(2);

alert(newNum2);