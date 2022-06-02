/**
 * 배열/String 비교 시 JS 객체 사용
 * 배열/string을 원소(key) : 개수(value)인 객체로 만들기
 * Example: Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
 */

function same(arr1, arr2) {
  //배열 길이가 같지 않을 때 return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  //arr 객체화. 원소(key) : 개수(value)
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    // arr1 원소 ^ 2가 arr2에 없을 때 false 반환
    if (!(key ** 2 in frequencyCounter2)) {
      console.log(key ** 2);
      return false;
    }
    // arr2와 arr1의 원소 개수 체크. ex) arr1에서 2가 2개 있을 때 arr2에서도 4가 2개 있어야 함. 같지 않을 경우 false 반환
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

//console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]));

//frequency Count Example2 : 2개 단어 비교
//알파벳 구성이 같을 경우 true 반환.

function validAnagram(inputWord1, inputWord2) {
  //소문자로 통일
  const word1 = inputWord1.toLowerCase();
  const word2 = inputWord2.toLowerCase();

  //길이 같지 않을 경우 false 반환
  if (word1.length !== word2.length) {
    return false;
  }
  //word1 객체 생성
  const wordObj1 = {};
  const wordObj2 = {};
  for (let val of word1) {
    wordObj1[val] = (wordObj1[val] || 0) + 1;
  }
  //word2 객체 생성
  for (let val of word2) {
    wordObj2[val] = (wordObj2[val] || 0) + 1;
  }
  console.log(wordObj1);
  console.log(wordObj2);

  // word1과 word2 객체 비교
  for (let key in wordObj1) {
    //word1의 원소가 word2에 없을 경우 false 반환
    if (!(key in wordObj2)) {
      return false;
    }
    //word1의 원소 개수와 word2의 원소 개수가 다를 경우 false 반환
    if (wordObj1[key] !== wordObj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("CAT", "cat"));

/** Mutiple Pointer

인덱스/위치 등을 기준으로 포인터를 만들어 시작or끝지점, 양쪽 지점으로 이동시키는 것.

배열이나 문자열 같은 선형 구조에서 자주 쓰인다.

한쌍의 값을 찾을 때 유용하게 쓰인다. 

이중 for문

example : 배열에서 두 원소 값이 0이 되는 첫 번째 한 쌍을 return */

function sumZero(arr) {
  //조건 : 오름차순 정렬일 때
  let sortedArr = arr.sort(function (a, b) {
    return a - b;
  });

  console.log(sortedArr);

  let left = 0; //배열의 첫 번째 idx
  let right = sortedArr.length - 1; //배열의 마지막 idx

  while (left < right) {
    let sum = sortedArr[left] + sortedArr[right];
    //합계가 0일 때 해당 쌍 반환
    if (sum === 0) {
      return [sortedArr[left], sortedArr[right]];
    }
    //둘의 합이 0이 넘으면 맨끝 idx에서 왼쪽으로 한 칸 이동
    else if (sum > 0) {
      right--;
    }
    //둘의 합이 0보다 작으면 맨 처음 idx에서 오른쪽으로 한 칸 이동
    else {
      left++;
    }
  }
}

sumZero([-4, -3, -52, 41, 0, 1, 2, 3, 10]);

// console.log(countUniqueValues2(arr));
/**
 * Mutiple Pointer 연습 
 * @param {} rowArr
 * @returns
 */
//포인터를 앞에다 두고 뒤로 이동시키면서 독립된 값을 찾을 때
//정렬된 배열에서만 이용 가능

function countUniqueValues(rowArr) {
  const arr = rowArr.sort(function (a, b) {
    return a - b;
  });

  console.log(arr);
  if (arr.length === 0) return 0;
  //첫 번째 포인터 i 설정. 배열의 첫 번째 원소
  let i = 0;
  //두 번째 포인터 j 설정. 배열의 두 번째 원소.
  //배열을 한 바퀴 도는 for문 설정.
  //j는 for문에 따라 배열 끝으로 이동하고, arr[i]와 arr[j] 값이 다를 때 i는 다음 원소로 이동.

  for (let j = 1; j < arr.length; j++) {
    console.log(`기존 i : ${i} , 기존 j : ${j}`);

    //i번째 원소와 arr[j]의 원소 값이 다를 때 ex) 2, 3
    if (arr[i] !== arr[j]) {
      //i의 위치를 오른쪽으로 돌리고, arr[j]를 arr[i]에다가 삽입
      console.log(`
  ------------------------------
  기존 배열 : ${arr}
  arr[${i}] : ${arr[i]} // arr[${j}] : ${arr[j]} ==> arr[i]와 arr[j]가 같지 않을 때
  i++`);
      i++;
      arr[i] = arr[j];
      console.log(`
  arr[${i}] = ${arr[j]} ===>  arr[i] = arr[j];
  변경후 배열 : ${arr}
  -----------------------------`);
    } else {
      console.log("arr[i]와 arr[j] 같음. j+1로 넘어감");
    }
  }

  //유니크한 값들의 개수는 i+1과 같다.
  return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 3, 3, 3, 5, 7, 10]));

/**
 * 다중 포인터 문제 2 
 * @param  {...any} args 
 * @returns 
 */

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++;
    next++;
  }
  return false
}