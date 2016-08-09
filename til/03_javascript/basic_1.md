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
- 메모리 할당을 추적하고 할당된 메모리가 더 이상 필요 없어졌을때 해체하는 작업. 
- 자바스크립트에서 알아서 메모리 관리 해준다.


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
- 메서드란? 어떤 객체에 정의도니 함수를 메서들
- JS도 전역객체의 메서드 또는 그냥 함수라고도 하며 특정 객체에 정의되어 있다면 그건 메서드라고 명확히 말함.
- 함수는 특정 객체가 아닌 그냥 정의 되어 있는 함수.
