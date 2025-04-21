let num = +prompt("Enter the number");
let pa=+prompt("enter the second number");

 function cal(n) {
     return n ? (n % 10) + cal(Math.floor(n / 10)) : 0;
 }

let sum = cal(num);
 document.writeln("Sum of digits: " + sum);

function bal(p){
    return p ? (p % 10)+ bal(Math.floor(p / 10)) : 0;
}
let sam =bal(pa);
document.writeln("the sum of the digits: " + sam);