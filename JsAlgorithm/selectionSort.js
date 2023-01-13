//선택정렬 : Selection Sort
//visualgo 참고 : https://visualgo.net/en/sorting?slide=1
// 한 줄 설명 : 배열 전체를 돌며 가장 작은 값을 선택해 현재 위치 idx와 자리를 바꾸며 정렬
// 의사코드
// 1. 정렬 시작 시 : 첫 번째 인덱스를 가장 작은 값(smallest)로 설정한다.
// 2. smallest와 다음 인덱스를 비교한다. 비교값이 smallest보다 작을 경우, 비교값을 새 smallest와 비교한다.
// 3. 배열 인덱스 끝까지 2번을 반복한다.
// 4. smallest와 첫 번째 인덱스 자리를 교환한다.
// 5. 다음 인덱스를 smallest로 설정한다.
// 6. 1~5를 반복한다.

const array = [4, 3, 5, 6, 7, 1, 2];

const selectionSort = (arr) => {
  //기준값을 도는 for문
  for (let i = 0; i < arr.length; i++) {
    let noSwap = true; //정렬됐을 때 for문 탈출 위한 boolean
    let smallest = arr[i]; //가장 작은 값을 저장하는 int
    let changeIdx = 0; //비교값과 기준값을 교환할 때, 비교값의 idx가 담기는 int

    //비교값을 도는 for문. i보다 한 자리 더 뒤에 있다.
    for (let j = i + 1; j < arr.length; j++) {
      // arr[j]:비교값과 arr[i]:기준값보다 작으면, smallest는 arr[j]로.
      if (arr[j] < smallest) {
        smallest = arr[j];
        changeIdx = j;
        noSwap = false; //이 for문에서 한번도 스왑이 되지 않으면, noSwap을 false로 지정
      }
      if (j === arr.length - 1 && !noSwap) {
        //배열의 끝까지 돌았을 때 비교값과 기준값 교환
        arr[changeIdx] = arr[i];
      }
    }
    //swap이 발생하지 않았으면 정렬됐다고 판단하고 최종 반목문 탈출
    if (noSwap) break;

    //j 포문을 다 돌고나면, smallest를 기준값에 할당, arr[i]는 비교값 arr[j]에 할당
    arr[i] = smallest;
    console.log(`smallest : ${smallest} arr : ${arr}`);
  }

  return arr;
};

console.log(selectionSort(array));

//강사님 풀이

// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      //SWAP!
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);
