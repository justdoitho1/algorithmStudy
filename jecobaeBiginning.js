//1. 배열삭제
let nums = [100, 200, 300, 400, 500];
nums.splice(-2, 2);
console.log(nums);

/*마지막 한 개를 삭제할 때는 pop()이 제일 간편하지만, 여러 개를 삭제해야 할 때는 splice를 사용하는 방법도 있다.
 첫 번째 인자: 삭제를 시작할 인덱스, 두 번째 인자 : 삭제할 개수
 인덱스 0 은 첫 번째 원소를 말하고, -1은 맨 마지막 원소를 말한다.
 마지막에서 두 번째는 -2
따라서 마지막에서 두 번째 자리에서 2 개를 삭제하고 싶을 때는 splice.(-2,2)라고 써야 한다.
splice는 붙이다라는 뜻인 만큼, 원소 중간에 새로운 값을 끼워넣을 수 있다.
 예컨대 nums.splice(0, 3, 600)을 할 경우, 첫 번째 원소로부터 3개의 값을 삭제하고, 그 자리에 600의 값을 끼워넣는다는 의미. 따라서 [600, 400, 500]을 리턴한다. */

/* 2.배열의 내장함수 
배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

**데이터**
var arr = [200, 100, 300];
//pass
console.log(arr);

**출력**
[200, 100, 10000, 300]
`;
var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log(arr);
*/
// JavaScript 에서는 null, undefined, 0, 빈 문자열, NaN, false 를 제외하고는 모두 참인 값으로 평가합니다.
// JavaScript 식별자는 문자, 밑줄(_) 혹은 달러 기호($)로 시작해야 한다.

/*9. concat 활용 
**출력**
2019/04/26 11:34:27 */
var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";

var result = year.concat(
  "/",
  month,
  "/",
  day,
  " ",
  hour,
  ":",
  minute,
  ":",
  second
);

console.log(result);

/*문제 10. 별찍기
입력
5

출력
    * 빈칸 4개, 별 1개
   *** 빈칸 3개, 별 3개
  ***** 빈칸 2개, 별 5개 
 ******* 빈칸 1개, 별 7개
********* 빈칸 0개, 별 9개*/

//문제 11
//1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. for를 사용해야 합니다.

let s = 0;

for (let i = 1; i <= 100; i++) {
  // s += i;
}
console.log(s);

//문제 12
//다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.

const Wizard = class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }

  attack() {
    console.log("파이어볼");
  }
};
const x = new Wizard(545, 210, 10);
//console.log(x.health, x.mana, x.armor);
//x.attack();

//문제 13. 우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.

//1) 배열 선언
//2) 함수 선언 param : 숫자(배열인덱스)
//3) return : 배열인덱스-1의 값

let planet = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];

const planetName = function (param) {
  return planet[param - 1];
};

console.log(planetName(1));

//문제 14. 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.

// 1) function 선언, parma : 숫자, return 홀, 짝
// 2) if문 3의 배수일 때, 아닐 때

const numberGame = function (param) {
  if (param % 3 === 0) {
    return "짝";
  } else {
    return param;
  }
};

console.log(numberGame(100));

//문제 15. 만약 입력으로 김다정이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력
const selfIntroduce = function (param) {
  if ((param = "김다정")) {
    console.log("안녕하세요. 저는 김다정입니다.");
  }
};

//selfIntroduce("김다정");

//문제 16. 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.
// 함수 선언 param: string, return : 없음
const upsideDown = function (param) {
  let array = param.split("");
  console.log(array.reverse().join(""));
};
//upsideDown("거꾸로");

//1. split('') : split 괄호 안에 있는 것을 기준으로 string을 잘라 배열의 각 원소로 지정하고, 그 배열을 반환한다.
//2. array.reverse() : 배열의 정렬을 거꾸로 한다
//3. array.join('') : 배열의 원소를 붙여 string으로 반환

//문제 16. 놀이기구 키 제한
let height = 160;

if (height > 150) {
  //console.log("YES");
} else {
  // console.log("NO");
}

//문제 17. 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 단, 소숫점 자리는 모두 버립니다.
let score = "20 30 40";
const average = function (score) {
  let array = score.split(" ");
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += parseInt(array[i], 10);
  }
  return Math.floor(total / array.length);
};

console.log(average(score));

//String을 숫자로 변환해줄 때, parseInt(숫자, 10) 해주기
//Math.floor(숫자) : 버림
//Math.ceil(숫자) : 올림
//Math.round(숫자) : 반올림

//문제 19. 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

let param = "7 3";
const square = function (param) {
  let array = param.split(" ");
  let a = parseInt(array[0], 10);
  let b = parseInt(array[1], 10);
  console.log(Math.pow(a, b));
};
//square(param);
// Math.pow(밑, 지수)

//문제 20. 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

let num = "10 2";
const division = function (param) {
  let array = param.split(" ");
  let a = parseInt(array[0], 10);
  let b = parseInt(array[1], 10);
  console.log(a / b + " " + (a % b));
};
//division(num);

//문제 21. JavaScript Class

//문제 24. 민지를 위해 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.
// 대문자로 : string.toUpperCase()
// 소문자로 : string.toLowerCase()
const upper = function (param) {
  console.log(param.toUpperCase());
};
//upper("mary");

//문제 25. 원의 넓이를 구하라
const circle = function (param) {
  return param * param * 3.14;
};
//console.log(circle(3));

//문제 26. 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
let korPlanets = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];
let engPlanets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

// param : 한글 / return : 영어
// indexof 활용
// 입력된 값이 korPlanet에 존재하면, index를 받아옴
// 받아온index로 eng Planet에서 값 찾음

const planets = function (params) {
  let idx = 0;
  if (korPlanets.indexOf(params) > -1) {
    idx = korPlanets.indexOf(params);
    return engPlanets[idx];
  } else {
    console.log("해당하는 행성을 찾을 수 없습니다.");
  }
};
//console.log(planets("천왕성"));

//답안. 더 빠른 방식인 듯.

const planetsObj = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};

//console.log(planetsObj["수성"]);

//문제 27
const student = {
  Yujin: 70,
  Hyewon: 100,
};

//console.log(student);

//문제 28

const twoGram = function (param) {
  let array = param.split("");

  for (let i = 0; i < array.length - 1; i++) {
    console.log(array[i] + " " + array[i + 1]);
  }
};
//twoGram("JavaScript");

//문제 29
const LowerUpper = function (param) {
  if (param === param.toUpperCase()) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

//LowerUpper("s");

//문제 30
const findWord = function (param, word) {
 // console.log(param.search(word));
 // console.log(param.indexOf(word));
  if (param.search(word) > -1) {
    return param.search(word);
  } else {
    return "없음";
  }
};

console.log(findWord("pineapple is yummy", "apple"));
