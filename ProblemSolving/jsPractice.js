let text = document.querySelector("h1");

let answers = [1, 3, 2, 4, 2];
solution(answers);

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

idRecommend("=.=");
function idRecommend(new_id) {
  var answer = "";
  let reg = /[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/ ]/gim;
  //첫 번째
  answer = new_id.toLowerCase();

  //2단계
  answer = answer.replace(reg, "");

  //3단계

  while (answer.includes("..")) {
    answer = answer.replace("..", ".");
  }

  //4단계
  if (answer[0] === ".") {
    answer = answer.substring(1);
  }

  if (answer[answer.length - 1] === ".") {
    answer = answer.substring(0, answer.length - 1);
  }

  //5단계
  if (answer === "") {
    answer = "a";
  }

  //6단계
  if (answer.length >= 15) {
    answer = answer.substring(0, 15);
  }

  if (answer[answer.length - 1] === ".") {
    answer = answer.substring(0, answer.length - 1);
  }

  //7단계
  if (answer.length <= 2) {
    const length = answer.length;
    for (let i = 0; i < 3 - length; i++) {
      answer = answer + answer[answer.length - 1];
    }
  }
  return answer;
}

function solution(answers) {
  let answer = [];
  let first = [];
  let second = [];
  let third = [];

  let firstCount = 0;
  let secondCount = 0;
  let thirdCount = 0;
  let initial = 1;

  // let pushArrayCount = answers.length/5;
  // for (let i = 0; i < pushArrayCount; i++) {
  //   (i + 1) % 5 === 0 ? first.push(5) : first.push((i + 1) % 5);
  // }

  for (let i = 0; i < answers.length; i++) {
    (i + 1) % 5 === 0 ? first.push(5) : first.push((i + 1) % 5);

    // if ((i + 1) % 5 === 0) {
    //   //i+1이 5의 배수일 때 5 넣기
    //   first.push(5);
    // } else {
    //   first.push((i + 1) % 5);
    // }

    if (i % 2 === 0) {
      //second의 index가 0, 2, 4 일 때만 2가 들어가므로
      second.push(2);
    } else {
      second.push(initial);
      if (initial === 5) {
        initial = 1;
      } else {
        initial++;
      }
    }

    if (i % 10000 === 0 || i % 10000 === 1) {
      third.push(3);
    } else if (i % 10000 === 2 || i % 10000 === 3) {
      third.push(1);
    } else if (i % 10000 === 4 || i % 10000 === 5) {
      third.push(2);
    } else if (i % 10000 === 6 || i % 10000 === 7) {
      third.push(4);
    } else if (i % 10000 === 8 || i % 10000 === 9) {
      third.push(5);
    }

    if (answers[i] === first[i]) {
      firstCount++;
    }
    if (answers[i] === second[i]) {
      secondCount++;
    }
    if (answers[i] === third[i]) {
      thirdCount++;
    }
  }

  let array = [];
  answer.push([firstCount, secondCount, thirdCount]);
  if (
    firstCount === secondCount &&
    secondCount === thirdCount &&
    firstCount === thirdCount
  ) {
    array = [1, 2, 3];
    return array;
  } else {
    answer.sort();
    array.push(answer.indexOf(answer[0]) + 1);
    return array;
  }
}

let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];
lotto(lottos, win_nums);
function lotto(lottos, win_nums) {
  var answer = [];

  let zeroCount = 0;
  let winCount = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos.indexOf(win_nums[i]) > -1) {
      winCount++;
    }

    if (lottos[i] === 0) {
      zeroCount++;
    }
  }
  console.log(zeroCount + "," + winCount);
  switch (winCount) {
    case 6:
      answer.push(1);
      break;
    case 5:
      answer.push(2);
      break;
    case 4:
      answer.push(3);
      break;
    case 3:
      answer.push(4);
      break;
    case 2:
      answer.push(5);
      break;
    default:
      answer.push(6);
      break;
  }

  return answer;
}
