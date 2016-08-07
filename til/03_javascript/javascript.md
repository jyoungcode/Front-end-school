### 인터프리터(interpreter, 문화어: 해석기)는 프로그래밍 언어의 소스 코드를 바로 실행하는 컴퓨터 프로그램 또는 환경을 말한다. 원시 코드를 기계어로 번역하는 컴파일러와 대비된다.

### DOM( Document Object Model )
- html parser 

```javascript
<script>
	// document는 html문서를 가리킨다.
	document.getElementByTagName('h1');
</script>
```

##### getElements와 getElement의 차이
- `.getElementsByClassName('.head')`: [<div class="head"]
- `.getElementById('main')`: <div id="main">

텍스트 노드란???

##### node 프로퍼티
- nodeValue:
`.firstChild.nodeValue`


### CORE

### BOM

브라우저에 한해서 Window는 한개의 세션 

탭마다 전역객체인 window를 가지고 있다.

### window 의 자식으로

Frame은 이제 쓰지 않는다.

DOCTYPE에 따라서 document의 기준.
표준모드 HTML 
비표준 모드 BODY 




### 자바스크립트 
- xtml, css 함께 웹문서에 가장 많이 사용되는 언어
- 문서객체모델(DOM)을 핸들링 할 수 있는 클라이언트 사이드 언어

#### Element = Node
- 모든 요소를 노드라 부른다. 
- 모든 요소의 부모노드는 루트 노드(html)
- 문서(document)는  노드의 집합이라고 부른다.
- html 요소, html속성, 공백까지 노드라 부른다.

document.ELEMENT_NODE
document.body.nodeType 
document.COMMENT_Type

반환값 - 요소: 1, 속성 :2, 텍스트: 3 빈 공백: 3 (텍스트와 동일하게 취급 그래서 압축하면 문제가 사라진다.)

#### Cache(캐쉬)

#### 기본적인 DOM 탐색에 의한 스타일 바꾸기.
 
 **`getElementByClassName`의 반환값은 array like object이기 때문에 반드시 [0]를 붙여서 node를 선택해줘야 한다.**
 ```javascript
 function btnColor(name){
	return document.getElementsByClassName(name)[0];
}

btnColor('btn_red').onclick = function(){
	body.style.backgroundColor = '#ea7ea7';
}
```

#### 이벤트핸들러에 함수를 literal로 지정 할 때 두가지 표기법.

- 한줄 방식 

`btn_1.onclick = btn_2.onclick = btn_3.onclick = btn_4.onclick = btn_5.onclick = changeColor;`

- 여러줄 방식

```javascript
btn_1.onclick = 
btn_2.onclick =
btn_3.onclick =
btn_4.onclick =
btn_5.onclick = changeColor;
```

#### 익명함수
- 익명함수는 혼자서 쓰이면 문법상 오류다.
- 익명함수를 변수나 이벤트에 담으면 오류가 발생하지 않는다.
- 이렇게 고정된 값을 담는걸 literal 이라 한다.

#### 자바스크립트 garbage collector
메모리에 링크가 걸려있지 않으면 자바스크립트에서 알아서 메모리 관리 해준다.

#### 이벤트 핸들러란 무엇이며 function을 실행 순서에 따른 차이
- 이벤트 핸들러란? 이벤트에 연결된 함수를 말한다.
- return이 없는 이유는 `onmouseenter`라는 이벤트 핸들러에는 반환값이 필요 하지 않고 이벤트 핸들러 자체로 제어하기 때문이다. (onmouseenter가 실행 됬을때 동작해야 하기 때문에)
- `btn_1.onmouseenter = changeBGColor()`라고 하면 `btn_1.onmouseenter = undefined`가 된다.

```javascript
	var changeBGColor = function() {
		body.style.backgroundColor = this.firstChild.nodeValue;
	}
	//btn_1.onmouseenter = changeBGColor; 
```

#### 메서드와 함수의 차이
- 메서드란? 어떤 객체에 정의된 함수를 메서드
- `.getElementByTagName('h1')`
- 메서드는 일종의 함수이며 함수란 일련의 동작을 할 수 있도록 모아놓은 덩어리를 말한다.
- 함수가 객체를 포함하고 있을 경우, 객체의 메서드라고 부른다.
- JS도 전역객체의 메서드 또는 그냥 함수라고도 하며 특정 객체에 정의되어 있다면 그건 메서드라고 명확히 말함.
- 함수는 특정 객체가 아닌 그냥 정의 되어 있는 함수.


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











