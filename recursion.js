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

countDown(3);