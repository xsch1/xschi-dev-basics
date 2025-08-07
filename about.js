window.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll(
    'page-title, main section, main p.section-title, .footer-info'
  );

  animatedElements.forEach((el) => {
    // 리셋: 처음 상태로 강제 초기화
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
  });

  // 약간의 시간 뒤에 애니메이션 실행 (강제 초기화가 먹히게 하기 위함)
  setTimeout(() => {
    animatedElements.forEach((el, i) => {
      el.classList.add('fade-in-up');

      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, i * 200);
    });
  }, 80); // 50ms 정도 딜레이 두면 대부분 브라우저에서 문제 없음
});

const links = document.querySelectorAll('.nav-links a');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const href = link.getAttribute('href');

    // 바로 이동하지 않고, 페이지 전환 시 완전히 새로고침
    window.location.href = href + '?reload=' + new Date().getTime();
  });
});
