//1.2 순열관계인가
/**
 * 방식 1. 배열로 for문 돌려서 비교
 * 예상 빅오 : O(n)
 * @param first
 * @param second
 * @returns {boolean}
 */
function isThisSame(first, second){
    //1. 두 개의 입력값을 오름차순으로 정렬한다
    //2. 각 원소마다 같은지 확인한다

    //이렇게 배열을 선언한 뒤에 하는 게 낫나?
    let firstArray = [...first];
    let secondArray = [...second];

    //두 배열의 길이가 틀릴 때
    if(first.length !== second.length){
        return false;
    }

    //두 배열의 길이가 모두 0일 때
    if(first.length === 0 && second.length===0){
        return true;
    }

    //그것도 아니라면
    firstArray = firstArray.sort(function(a,b){
        return a-b;
    });

    secondArray = secondArray.sort(function(a,b){
        return a-b;
    });

    console.log(firstArray, secondArray)

    for(let i = 0; i < firstArray.length; i++){
        if(firstArray[i] !== secondArray[i]){
            return false;
        }
    }
    return true;

}
//4번 주어진 두 문자열이 회문의 순열인지 판별
function isItPalindrome(first, second){
    let firstLength = first.length;
    let secondLength = second.length;
    //둘의 길이가 다르면 false
    if(firstLength!== secondLength){
        return false;
    }

    //first를 뒤집었을 때 second와 같으면 true
    for(let i = 0; i < firstLength; i++){
        if(first[firstLength-1-i] !== second[i]){
            return false;
        }
    }
    return true;
}

isItPalindrome("heyeR2", "2Reyeh")

//6번 문제
function stringCompression(param){
    let obj = {};
    for(let i = 0; i < param.length; i++){
        obj[param[i]] === undefined ?
            obj[param[i]] = 1
            : obj[param[i]] = obj[param[i]]+ 1;
    }

    let rtn = Object.entries(obj).join('').replaceAll(',','');

    if(rtn.length > param.length){
        return param;
    }else{
        return rtn;
    }
}

//8번 문제
// m * n 행렬의 한 원소가 0일 때, 해당 원소가 속한 행과 열의 모든 원소를 0으로 설정하는 알고리즘

function makeRowCol0(matrix){
    // m = 2 , n = 2
    // 행, 열 크기 구하기
    // 행, 열을 하나씩 훑어보면서 0인 원소를 찾으면,
    // 이중 포문으로 가야 하려나 ㅠ
    let rowTotalCnt = matrix[0].length;
    let colTotalCnt = matrix.length;

    let zeroSpot = [];

    // 0이 있는 위치 찾아내 새 배열에다가 선언
    for(const [index, row] of matrix.entries()){
        let colhasZero = row.findIndex((element)=>{return element===0});
        if(colhasZero > -1){
            // 행 : index, 열 : colhasZero
            zeroSpot.push([index, colhasZero]);
        }
    }

    //행을 0으로 만들기
    for(row of zeroSpot){
        matrix[row[0]] = matrix[row[0]].map((e)=>{return e * 0});
    }
    //열을 0으로 만들기

    for(let i = 0; i < colTotalCnt; i++ ){
        for(row of zeroSpot){

        }
    }

}

let array = [[1,2],[3,4]]
module.exports = isThisSame;