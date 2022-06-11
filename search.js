/**
 * 검색 알고리즘
 * 1. 선형 검색
 * 의미 :  모든 개별 항목을 확인. 처음부터 끝까지 하나씩 순회하며 검색
 * 선형 검색을 사용하는 함수 : indexOf, includes, find, findIndex
 * 빅오 : O(1)이 가장 좋고, O(n)이 가장 나쁘다. 평균적으로는 O(n)이다. 찾고자 하는 값이 배열의 마지막에 있을 경우, 빅오는 O(n)
 */
//아래 같은 배열을 앞에서부터 끝까지 하나하나씩 확인함
let exArr = [1, 2, 3, 4, 5, 6, 7, 8];
//선형검색 간단한 구현

const linearSearch = (arr, num) => {
  return arr.indexOf(num);
};

/**
 * 2. 이진 검색
 * 특징 : 항목을 확인할 때마다, 남은 항목의 절반을 없앨 수 있다. 단, 데이터가 반드시 정렬돼 있어야 한다. 선형 검색보다 훨씬 빠름.
 */
let exBinaryArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//만약 값 2를 찾는다면, 가운뎃값 7와 2를 비교. 2보다 7이 크다면, 7 이상의 값을 제거. 즉 비교대상이 [1,2,3,4,5,6]만 남음.  가운뎃값 3과 2를 비교. 3이 더 크므로 [1,2]만 남음. 그 담에 2찾음. 즉 세 번 만에 바로 값을 찾을 수 있음. 선형검색의 경우 열세 번을 돌았어야 함. 하지만 이진검색은 세 번 만에 가능. 이때 중요한 건, 꼭 정렬돼야 이진검색 할 수 있음

//이진검색 의사코드. 이진검색의 구현
// param : 정렬된 배열, 찾는 값
// pointer : 1) 좌측 포인터 : 배열 첫 번째 인덱스 0번  2)우측 포인터 : 배열 마지막 인덱스. array.length -1
// 연산 지속 조건 : 1) 항목을 찾지 못했을 때 2) 좌측 포인터가 우측 포인터보다 앞에(앞 인덱스) 있을 때만 연산이 계속되게.
// 중간점 기준 : 좌측 포인터와 우측 포인터 평균 인덱스
// 값이 작으면, 좌측 포인터를 중간 인덱스로 바꿈. 값이 크면, 우측 포인터를 중간 인덱스로 바꿈.
//즉, 중간점이 내가 찾는 value가 아니면, value가 중간점보다 큰지 작은지 판단 후, 좌측이나 우측 인덱스를 바꾸고 새로운 중간점을 선택.

// 찾는 value의 index 위치를 반환하는 binarySearch 구현
const binarySearch = (sortedArr, value) => {
  let left = 0;
  let right = sortedArr.legnth - 1;
  let avgIdx = 0;
  while (sortedArr[avgIdx] === value) {
    let avgIdx = Math.floor(left + right / 2);
    if (sortedArr[avgIdx] > value) {
      left = avgIdx;
      console.log(left);
    } else if (sortedArr[avgIdx] < value) {
      right = avgIdx;
      console.log(right);
    }
    Math.floor(left + right / 2);
  }
  return avgIdx;
};

console.log(binarySearch(exBinaryArr, 2));
