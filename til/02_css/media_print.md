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



