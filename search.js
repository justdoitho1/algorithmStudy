/**
 * 검색 알고리즘
 * 1. 선형 검색
 * 의미 :  모든 개별 항목을 확인. 처음부터 끝까지 하나씩 순회하며 검색
 * 선형 검색을 사용하는 함수 : indexOf, includes, find, findIndex
 *
 */

//선형검색 간단한 구현
const linearSearch = (arr, num) => {
  return arr.indexOf(num);
};
