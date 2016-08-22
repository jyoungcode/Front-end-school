### 인터프리터(interpreter, 문화어: 해석기)
- 프로그래밍 언어의 소스 코드를 바로 실행하는 컴퓨터 프로그램 또는 환경을 말한다. 원시 코드를 기계어로 번역하는 컴파일러와 대비된다.
- 아무래도 해석이 다 된걸 보니 컴파일러가 더 빠르다.
- 인터프리터는 실시간으로 해석을 해내야하니 컴파일러 보다는 느리다.

### 변수란? 
- '변할 수 있는 수', 프로그래밍에서 '시스템이 동작하는 동안 데이터가 담기는 공간'

### 자바스크립트 
- xtml, css 함께 웹문서에 가장 많이 사용되는 언어
- 문서객체모델(DOM)을 핸들링 할 수 있는 클라이언트 사이드 언어

###JS 특징
- 함수는 동사형태이며 ()를 사용한다.
- 객체.함수() 이런식으로 . 으로 연결
- 브라우저에서 JS엔진을 가지고 있다.
- 변수에는 `var`를 붙인다. (붙이지 않을 시 전역변수로 설정되지만 권장하지 않는다.)
- 변수 선언만 하는 경우. 즉, 값이 대입(할당)되지 않은 경우 ( undefined 값이 기본으로 할당되어 있다. )
- 이미 객체의 속성이 정해진 값을 사용자가 덮어쓰게 된다면, 덮어쓴 값이 출력된다. (자바스크립트의 약점. 태생적 한계)
- 초창기 자바스크립트 환경에서는 문법이 엄격할 수가 없었다.

### Element = Node
- 모든 요소를 노드라 부른다. 
- 모든 요소의 부모노드는 루트 노드(html)
- 문서(document)는  노드의 집합이라고 부른다.
- html 요소, html속성, 공백까지 노드라 부른다.

### 이벤트핸들러에 함수를 literal로 지정 할 때 두가지 표기법.

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

### 익명함수
- 익명함수는 혼자서 쓰이면 문법상 오류다.
- 익명함수를 변수나 이벤트에 담으면 오류가 발생하지 않는다.
- 이렇게 고정된 값을 담는걸 literal 이라 한다.

### 자바스크립트 garbage collector
메모리에 링크가 걸려있지 않으면 자바스크립트에서 알아서 메모리 관리 해준다.

### typeof 쓰면 안되는 이유
- null을 null이라고 모르고 array를 array라고 하지 못하는 점 
- 나중 수업때 해결 방안에 대해 이야기 하겠다.

### `if(조건) 실행문`은 안티패턴이라 지양한다.

### function에 return 
- return이 있는건(get함수일때) 
- return없는건(set함수)

### console.error 와 throw new error 의 차이  
- 둘다 오류를 발생 
- console.error : 에러 확인 후 실행까지 된다.( 최신 브라우저만 지원 ) 
- throw error :  throw는 오류 발생할때 코드 실행 안된다. ( throw error도 가능하지만 throw new error는 정식 표현식이라 권장한다.)

### BOM 
- 브라우저에 한해서 Window는 한개의 세션 
- 탭마다 전역객체인 window를 가지고 있다.

### window
- Frame은 이제 쓰지 않는다.
- DOCTYPE에 따라서 document의 기준.
- 표준모드 HTML  /  비표준 모드 BODY 

### 용어
- Traversing, Selecting : 탐색
- Manipulation, Interactive : 조작

### 이벤트 핸들러란 무엇이며 function을 실행 순서에 따른 차이
- 이벤트 핸들러란? 이벤트에 연결된 함수를 말한다.
- return이 없는 이유는 `onmouseenter`라는 이벤트 핸들러에는 반환값이 필요 하지 않고 이벤트 핸들러 자체로 제어하기 때문이다. (onmouseenter가 실행 됬을때 동작해야 하기 때문에)
- `btn_1.onmouseenter = changeBGColor()`라고 하면 `btn_1.onmouseenter = undefined`가 된다.

```javascript
	var changeBGColor = function() {
		body.style.backgroundColor = this.firstChild.nodeValue;
	}
	//btn_1.onmouseenter = changeBGColor; 
```

### 메서드와 함수의 차이
- 메서드란? 어떤 객체에 정의된 함수를 메서드
- `.getElementByTagName('h1')`
- 메서드는 일종의 함수이며 함수란 일련의 동작을 할 수 있도록 모아놓은 덩어리를 말한다.
- 함수가 객체를 포함하고 있을 경우, 객체의 메서드라고 부른다.
- JS도 전역객체의 메서드 또는 그냥 함수라고도 하며 특정 객체에 정의되어 있다면 그건 메서드라고 명확히 말함.
- 함수는 특정 객체가 아닌 그냥 정의 되어 있는 함수.

###클래스가 느린가?
- dom lv1에서는 id또는 dom tagname 밖에 찾을 수 없었는데
class 등장 후 사용

- class를 사용하면 문서 노드들 모두에게 class를 있나 확인해야 하지만
id는 단번에 찾는다는 것이다. 그래서 class는 느리다.
( 지금 시대는 아니고! 예전에~!! )
예전: caniuse를 찾아보면 ie8이하 버전 
지금은 ie9부터를 말한다.

### DOM의 역사

dom lv 0 : 초창기 넥스케이프가 만든거
dom lv 1 : 
익스플로러 표준을 안지키니 시장점유율 낮아지며 ie9부터 지키기 시작함.
dom lv 3 : w3c가 새로 제정한걸 지금사용하는 대부분을 xml, html을 쓸 수 있는거
dom lv 4: 작년 표준

###클래스가 느린가?
- dom lv1에서는 id또는 dom tagname 밖에 찾을 수 없었는데
class 등장 후 사용

- class를 사용하면 문서 노드들 모두에게 class를 있나 확인해야 하지만
id는 단번에 찾는다는 것이다. 그래서 class는 느리다.
( 지금 시대는 아니고! 예전에~!! )
예전: caniuse를 찾아보면 ie8이하 버전 
지금은 ie9부터를 말한다.