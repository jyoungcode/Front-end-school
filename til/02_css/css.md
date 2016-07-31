1. 모듈화된 클래스 - 재사용성
2. before, after 가상요소는 스크린리더에 읽히지 않는다.
3.     @media print {
        a::after {
                content: '(' attr(href) ')';
                color: red;
        }

        abbr::after {
                content: '(' attr(title) ')';
        }
}
인쇄하기 화면 ctrl+p 하면 이 값들이 나온다.

/


4.



<!-- 족구왕 -->
a[class*="underline-"] {
  position: relative;
  border-bottom: none;
}
a[class*="underline-"]::before {
  content: '';
  position: absolute;
  top: 100%;
  width: 100%;
  border-bottom: 2px solid currentColor;
}
여기서 before ,after 상관없음
그리고 부모에 relative 안주면 화면까지 부모를 찾아감..블로그하자
