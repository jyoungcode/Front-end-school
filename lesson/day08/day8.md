#### box model
margin, border, padding 은 주변에 주변에 영향을 준다.
normal flow : 4가지중 하나라도 달라지면 아래에 애들이 영향받는다.
outline : 기능은 같은나. border처럼 영향 안줌 !

margin : 투명하다. margin만! 음수값 가능
padding : 양수만, 색상 기입 가능
border : 테두리 영역
content : 내용

**CSS** 는 HTML 요소를 네모난 박스로 인식한다.

가상클래스는 (:)
가상요소는 (::)는 인라인 width,height 시에 inline-block 필요

#### block inline 차이
블록 시에 위 아래로만 겹치고 양 옆은 안겹친다.

margin collapsing
em
media

input은 body의 font-size를 상속 받지 않는데 inherit로 할 수 있다.
이처럼 상속 받지 않는 요소를 알아보자

비표준모드(ie 6~10)에서는 border까지만 width로 잡는다.

box size는 border가지 보고 작업

DTD가 없으면


가상요소..

css expression - ie만 가능

line-height 특성 단점 설명
: 텍스트의 줄이 여러줄일 경우 예를 들어 하나의 텍스트가
박스로 쌓여있다면 다음 텍스트는 박스공간 넘어서 아래로 내려간다.
이러면 문제가 생김. 그래서 한줄 일때만 사용. 나머지는 다른 해결책.

자식 margin 벗어나는거
: 자식에 margin 넣어주는 것보다 부모에서 padding을 처리하는게 좋고
부득이할 경우 자식에서 margin넣고 부모에서 padding, border로 처리하자

inline-block 일때 왜 공간이 생기나
: 이건 그냥 특성으로 받아들여야 한다. margin 처리하고

flex-box 하위호환과 회사환경?
ie8 지원안함 11은 부분지원
아직 쓰는곳 거의 없으나 하위지원필요없이 모바일 환경 대응할때 쓰는곳 거의 소수. 아직까지 없다.

1.
2. 블록요소 안쪽에 자식요소가 마진삐져나올때 패딩 보더로 처리
3. 블록요소 가운데 배치 기법 테이블셀 방법 이건 인라인처럼 동작
  라인하이트 -여러줄 에서 문제가 생김
  해결책 플렉스 박시
4. 보더

-----------------------------
font vs test
font : 글꼴 글자 하나하나를 말함
text : 단락 타이포 를 말함

rgb 실무에서 잘 안쓴다.

웹폰트 - 번쩍이는거?
