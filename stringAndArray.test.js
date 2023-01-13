const  isThisSame = require('./stringAndArray');
const stringCompression = require('./stringAndArray');

test('같은 string일 때', ()=>{
    expect(isThisSame('hey','hey')).toBe(true);
});

test("두 input이 ''일 때 ", ()=>{
    expect(isThisSame('','')).toBe(true);
});

test("띄어쓰기가 다를 때 ", ()=>{
    expect(isThisSame('우 하 하 하', '이 히 힉히')).toBe(false);
});

test("같은 원소로 구성된 숫자string이 들어왔을 때 ", ()=>{
    expect(isThisSame('78321', '12387')).toBe(true);
});

//숫자는 spread 안 돼서 오류 남 ㅎㅎ
// test("같은 원소로 구성된 숫자가 들어왔을 때 ", ()=>{
//     expect(isThisSame(78321, 12387)).
// });

