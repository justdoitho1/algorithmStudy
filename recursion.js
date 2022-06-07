/**
 * 재귀(recursion)
 * 뜻 : 자기 자신을 호출하는 함수.
 * 왜 알아야 하는가? => 모든 곳에서 사용되니까!
 * 재귀는 무수히 많은 곳에서 사용된다. 데이터 구조/트리/그래프를 생성할 때 or 순회&검색하고자 할 때 재귀가 포함되는 경우가 많다.
 * 때로는 반복 대신 재귀를 사용하는 것이 깔끔하다.
 * 직접 parse 함수나 getElementById 함수를 작성할 때 중요하게 쓰인다.
 */

/**
 * 오류 없이 재귀 함수를 작성하기 위해 알아둬야 할 것 : 함수 실행 순서 관리법
 * 모든 프로그래밍 언어는 함수가 올바르게 실행되도록 만드는 데이터 구조가 있는데, JS는 CALL STACK이라고 부른다.
 * 함수를 호출하면, CALL STACK의 맨 위에 함수가 쌓인다. 마치 종이 더미에 종이가 쌓이는 느낌.
 * 1) JS가 함수를 인식하면, CALL STACK에 함수가 쌓인다.
 * 2) 또 다른 함수를 인식하면 그 위에 함수를 또 쌓는다.
 * 3) RETURN을 확인하거나, 함수 안에 더이상 실행할 코드가 없으면 스택의 제일 위에서부터 함수를 제거한다.
 *
 * 이는 크롬 개발자도구의 Sinppet, Call Stack 등에서 확인할 수 있다.
 * 여러 함수를 작성한 뒤, break를 걸고 step(F9)을 하면 stack의 변화를 확인할 수 있음.
 */

/**
 * 재귀의 중요한 두 요소
 * 1) base case : 함수를 멈추는 end point
 * 2) diffrent input. 다른 입력값
 *
 * 이 두 가지가 있어야 의미 있는 재귀함수.
 */

// 재귀함수 예시

function countDown(num) {
  //endpoint
  if (num <= 0) {
    console.log("Done");
    return;
  }
  console.log(num);
  num--;
  //재귀 호출
  countDown(num);
}

// countDown(3);

// 재귀함수 예시 2

function sameRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

/**
 * 만약 sameRange(3)을 실행하면 return 6

return 3 + sameRange(2) ⇒ 3+ 3⇒ 6

→ 2+ sameRange(1) ⇒3

→ sameRange(1) ⇒  1

마지막 base case 까지 가서 마지막 return을 받고, 더이상 재귀함수가 없을 때 마지막에서 위로 return 값을 받아가면서 올라감. 

재귀를 하면서 가장 많이 발생하는 실수 

1. base code(엔드포인트)를 쓰지 않는다. ⇒ maximum call stack size 오류가 발생함. 
2. base code에서 잘못된 값을 return함 ⇒ 오류
3. return을 안 함. ex) console.log(’’)를 해버린다든가. 

call stack에서 call을 지우기 위해서는 return을 주면 됨. !!!!!!!!!
 */

// 재귀함수 패턴
// 1. helper 재귀
// 재귀 함수가 아닌 함수 안에서 재귀 함수를 만들기.

// helper 재귀 예시 : 홀수만 골라낸 배열을 반환하는 함수
const collectOddValues = (arr) => {
  //함수를 실행할 때마다 result가 []로 초기화되는 것을 방지하기 위해 할 수 있는 조치들이 있음. 1) result를 외부에서 선언. 그런데 다소 뜬금없는 위치에서 선언하게 될 수 있음. 2. 아래와 같은 재귀함수를 사용함
  let result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  };
  helper(arr);

  return result;
};

console.log(collectOddValues([1, 2, 3, 4]));

//순수 재귀를 사용하기
const collectOddValues2 = (arr) => {
  //함수를 실행할 때마다 result가 []로 초기화되는 것을 방지하기 위해 할 수 있는 조치들이 있음. 1) result를 외부에서 선언. 그런데 다소 뜬금없는 위치에서 선언하게 될 수 있음. 2. 아래와 같은 재귀함수를 사용함
  let newArr = [];

  //return newArr 안 해주면, undefined까지 newArr에 concat된다.
  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  //[1].concat([3,5]); 같은 형태로 반복
  newArr = newArr.concat(collectOddValues2(arr.slice(1)));

  console.log(newArr);
  return newArr;
};

console.log(collectOddValues2([1, 2, 3, 4, 5]));

//순수 재귀 솔루션을 작성하는 경우 아래 메소드를 사용하면 편함
//배열 :  slice, spread, concat을 사용하면 편함
//문자열 : slice, substring
//객체 : Object.assgin, spread

//재귀 함수를 활용해 지수 구현하기
// ex. power(2,4) return 16
function power(num1, num2) {
  // num1 * num1
  // num2 === 0 일 때, return 1; 하기
  if (num2 === 0) {
    return 1;
  }

  return num1 * power(num1, num2 - 1);
  // 2 * (power(2,2) * power(2,1)=> * 1
  //  2 * (power(2,2) * pow
}

//console.log(power(2,4));

//재귀 함수를 이용해 팩토리얼 구현하기
const factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(7));

//재귀 함수를 이용해 배열 안 모든 값을 곱하기

const productOfArray = (arr) => {
  if (arr.length === 0) {
    return 1;
  }
  //배열의 마지막 원소
  let i = arr.length - 1;
  //마지막 원소를 삭제한 뒤의 새로운 배열
  let newArr = arr.slice(0, -1);

  return arr[i] * productOfArray(newArr);

  // return : arr[마지막 원소] * productOfArray([새 배열])
};

const array = [1, 2, 3, 4, 5];
//productOfArray(array);

//1~입력된 숫자 더하기
const recursiveRange = (num) => {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
};
