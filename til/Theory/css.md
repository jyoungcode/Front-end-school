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

4. float

1. 어떤 element를 float하면, 그 요소의 display 값은 자동으로 block이 됩니다.
/* 싱퀴… 실제로 <span>요소 float해보니 display:block이 되었습니다! */
2. element를 float할 때, width값을 명시적으로 언급해줘야 합니다! 아니면 예측할 수 없는 결과가 발생할 수도 있다고 하네요! 단, <img> 같이 그 자체적으로 암묵적인 width가 정해져있는 경우는 width를 굳이 선언할 필요는 없습니다.
3. “float”의 기원 자체가 해당 요소를 왼쪽이나 오른쪽으로 보내고 싶어서 만들어진 것이기 때문에 float로 가운데 배치하는 것은 (거의) 불가능합니다! 즉, 가운데에 배치할 때 주로 이용되는 margin-left/right: auto;가 먹지 않는다는 것이죠.
/* float를 포함하고 있는 부모의 width가 정해져있다면, margin-left/right을 계산해서 적용할 수는 있지만, 그렇지 않는 경우에는 float된 요소를 자동으로 가운데에 배치할 수는 없다는 말입니다! */
4. float된 요소는 margin collapsing이 적용되지 않습니다!

혹시나 모르시거나, 머릿속에 정리가 안 되어 있으실 분들을 위해 공유합니다! 즐거운 주말되시구 월욜에 봐요~~ (edited)

큰틀을 float  /  position은 작은 것
<qna>
1. 부모 float는
= 가운데 정렬이 쉽지 않다.
= 그 부모는 높이가 안생겨서
무한 float에 빠진다.

2. overflow는 높이 0 이어도
overflow hidden 쓰면
float 자식은 hidden 본연의 기능의 반대.
