let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', () => {
  console.log('버튼이 클릭되었습니다.');
  // 버튼 1을 클릭했을 때 실행할 코드
});
// A가 B하면 C가 D한다

btn1.addEventListener('mouseover', () => {
  btn1.style.backgroundColor = 'lightblue';
});

btn1.addEventListener('mouseout', () => {
  btn1.style.backgroundColor = ''; // 원래대로
});

// 함수선언
function greet(name) {
  return `안녕, ${name}님!`;
}
console.log(greet('유진')); // 콘솔을 통해 호출

//키오스크 만들기
