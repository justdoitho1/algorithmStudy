// var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
// var a = parseInt(input[0], 10);
// var b = parseInt(input[1], 10);

let a = 12;
let b = 5;

 
//윤년 
// if((a%4===0 && a%100!==0)||a%400===0){
//     console.log(1);
// }else{
//     console.log(0)
// }

//시험 성적 
// if(a >= 90){
//  console.log('A');
// }else if(80<=a && a<90){
//     console.log('B');
// }else if(70<=a && a<80){
//     console.log('C');
// }else if(60<=a && a<70){
//     console.log('D');
// }else{
//     console.log('F');
// }

//두 수 비교하기
// if(a>b){
//     console.log('>');
// }else if (a<b){
//     console.log('<');
// }else{
//     console.log('==');
// }

//곱셈
// console.log(a*(b%10));
// console.log(a*(Math.floor(b/10)%10));
// console.log(a*(Math.floor(b/100)%10));
// console.log(a*b);

//숫자 n의 k번째 숫자를 가져오고 싶을 때 
//Math.floor(n/(10)^(k-1))%10

//사칙연산 
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(Math.floor(a/b));
// console.log(a%b);

//나눗셈을 할 때는 몫만 나오는 게 아닌, 소수점까지 출력된다.
// Math.ceil(숫자) : 올림
// Math.floor(숫자) : 버림
// Math.round(숫자) : 반올림
