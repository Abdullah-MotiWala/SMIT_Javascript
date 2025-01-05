// var a = prompt("enter the number");
// if (a == 10) {
//     alert("hello world");
// }
var a = 25
var b = "enter your number"
var c = ["one", 2, "three", "four"];
console.log(c)
c.push("gulKhan", "fareed")
console.log(c);
c.pop();
console.log(c);
c.unshift("huzaifa", "abdullah")
console.log(c);
c.shift();
console.log(c);
c.splice(2, 0, "jawed_nihari")
console.log(c);
var fruit = c.slice(1, 15);
console.log(fruit, c);

// let a = 20 
// var arry = []
// for(var i = 0 ;i < 10 ; i++ ){
//     console.log(i)
// }
// alert("HELLO")



var arry = ["sami", "irfan", "rizwan", "abdullah"]
for (var i = 0; i < arry.length; i++) {
    console.log(arry[i])
}


// slice, charAt, indexOf, lastIndexOf, replace, replaceAll
// Math .random, .ceil, .floor, .round

let city = "Afghanistan"

console.log(city.slice(0, 3))
console.log(city.charAt(5))
console.log(city[6]);
console.log(city.indexOf("s"));
console.log(city.lastIndexOf("a"));
console.log(city.replace("A", "P"));
console.log(city.replaceAll("a", "t"));

let number = 15.6666
newNumber = Math.round(number);
console.log(newNumber);

newNumber1 = Math.ceil(number);
console.log(newNumber1)

newNumber2 = Math.floor(number);
console.log(newNumber2);

let random = Math.random();
// console.log(random.toFixed(2))
console.clear()
// console.log(random);

// let highest = Math.random() * 10
// let lowest = 0.0000000000000001 * 2
// console.log(Math.round(highest))
// console.log(lowest)

let date = new Date();
console.log(typeof date.toTimeString());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getMilliseconds());
console.log(date.getSeconds());
console.log(date.getMinutes());
console.log(date.getHours());

const bdDate = new Date("6 Dec 2025");
bdDate.setFullYear("2026");
bdDate.setMonth("");

console.log(bdDate)



// console.log(date.getHours());
// console.log(date.getMilliseconds());

// console.log(typeof date);






