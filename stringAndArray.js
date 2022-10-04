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


module.exports = isThisSame;