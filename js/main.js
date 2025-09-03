// ScrollMagic 사용
// 그 외 scrollreveal
const spyEls = document.querySelectorAll('section.scroll-spy');

// init controller
const controller = new ScrollMagic.Controller();

spyEls.forEach(function (spyEl) {
  // create a scene
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); // 컨트롤러에 장면을 할당(필수!)
});



// Swiper 사용
const swiper = new Swiper('.license .swiper', {
  // 슬라이드 옵션 지정
  direction: 'horizontal', // 수평 슬라이드
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 다시 1

  autoplay: {
    delay: 5000,  // 5000ms = 5초
    disableOnInteraction: false,  // 사용자가 조작해도 자동재생 유지
  },
  // 페이지네이션 옵션
  pagination: {
    el: '.license .swiper-pagination',
    clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
  },

  // 이전/다음 슬라이드 버튼 옵션
  navigation: {
    nextEl: '.license .swiper-button-next',
    prevEl: '.license .swiper-button-prev',
  },
});

// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용
console.log(new Date().getFullYear());
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// 페이지 최상단으로 이동
const toTopEl = document.querySelector('#toTop');
// Quiz: visual 섹션 애니메이션 넣고/빼기
const visualSpanEls = document.querySelectorAll('.visual h1 span');

window.addEventListener('scroll', function () {
  // console.log(window.scrollY); // y축 스크롤 위치

  // Quiz: 페이지 스크롤 위치가 
  // 500px을 넘으면 요소를 보이고
  // 500px을 넘지 않으면 요소 숨기기!
  if (window.scrollY > 500) {
    toTopEl.style.opacity = '1';
    toTopEl.style.transform = 'translateX(0)';

    // visual 섹션 애니메이션 클래스 빼기
    visualSpanEls.forEach(function (visualSpan) {
      visualSpan.classList.remove('animate-flash');
    });
  } else {
    toTopEl.style.opacity = '0';
    toTopEl.style.transform = 'translateX(100px)';
    
    // visual 섹션 애니메이션 클래스 넣기
    visualSpanEls.forEach(function (visualSpan) {
      visualSpan.classList.add('animate-flash');
    });
  }
});

const thumbBtn = document.getElementById('thumb');
const headerEl = document.querySelector('#header');
document.addEventListener('DOMContentLoaded', function () {
  thumbBtn.addEventListener('click', function (event) {
    event.preventDefault(); // 기본 링크 이동 방지
    // 이미 애니메이션 중이라면 다시 실행하지 않음
    if (thumbBtn.classList.contains('liked')) {
      return; 
    }
    // 'liked' 클래스 추가하여 애니메이션 시작
    thumbBtn.classList.add('liked');
  });
  thumbBtn.addEventListener('animationend', function() {
        // 애니메이션이 끝난 후에 배경색 변경
        headerEl.style.backgroundColor = 'crimson';
        thumbBtn.style.backgroundColor = 'crimson';
        
    });
});

const hamburgerBtn = document.querySelector('.btn-hamburger');
const navEl = document.querySelector('header nav');
const menuItems = document.querySelectorAll('header nav ul li a');

hamburgerBtn.addEventListener('click', function () {
  navEl.classList.toggle('active');
});

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    navEl.classList.remove('active');
  });
});
