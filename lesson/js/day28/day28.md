### 바닐라 JS


###메소드
- 객체에 정의된 함수를 말한다. 
- createElement
- 매개변수(parameter) 

###클래스가 느린가?
- dom lv1에서는 id또는 dom tagname 밖에 찾을 수 없었는데
class 등장 후 사용

- class를 사용하면 문서 노드들 모두에게 class를 있나 확인해야 하지만
id는 단번에 찾는다는 것이다. 그래서 class는 느리다.
( 지금 시대는 아니고! 예전에~!! )
예전: caniuse를 찾아보면 ie8이하 버전 
지금은 ie9부터를 말한다.

### dom lv2 ( 2000 년 발표 )
- 현재 사용되는 진보된 DOM Event model 최초 제시, 2000년 발표 이후 널리 보급

### MSDN은 예전 코드. 그래서 MDN을 보는걸 추천 하지만 번역이 자원봉사개념이라..


### Sass , SCSS, PostCSS(CSS4), 

### DOM lv3
- lv 2 를 확장한 버전으로 

지금 lv4시대 

dom lv 0 : 초창기 넥스케이프가 만든거
dom lv 1 : 
익스플로러 표준을 안지키니 시장점유율 낮아지며 ie9부터 지키기 시작함.
dom lv 3 : w3c가 새로 제정한걸 지금사용하는 대부분을 xml, html을 쓸 수 있는거
dom lv 4: 작년 표준

### DOM Property
- 

### Node Interface
- 브라우저에서 dom에 접근하는 법을 알려준다.

document: 브라우저를 구성하는 요소 중 하나이며 가장 상위 개념.
document.documentElement = html에서만 지원하는 html 찾는 법

### document의 요소 Node
- documentElement
- head
- body

#### Key point
<p><strong>Hello</strong>how are you doing?</p>
hello는 strong의 형제 요소로써 nextSibling으로 한다.
firstChild 
lastChilde
ParentNode
nextSibiling
prevlousSibling

p > stong
p > 'how are you'
strong > 'how are you'
strong > hello

childNodes

### 예전에 ID를 찍어낸 이유?
- 탐색시 문서가 바뀌면 firstchild 등 다 바뀐다.











