# 표준, 비표준
document.compatMode == 'CSS1Compat'

document.documentElement; // html

# DOM (Document Object Model)


# BOM
Object
Global Object - window
window.location
window.history
window.screen
window.navigator

# 자주쓰는 메서드

## window
 시간을 제어하는 window 객체의 메소드
 window.setInterval()
 window.setTimeout()
 window.setInterval(할일(함수), 시간(밀리초)); // 주기마다 계속 반복
 window.setTimeout(할일(함수), 시간(밀리초)); // 1회

## DOM Traversing ( 탐색 )

#### jQuery 보다 빠른 DOM traversings (IE8 이상 지원 )
- document.querySelector == document.querySelectorAll[0]
- document.querySelectorAll

#### 요소 찾기 ( IE9 이상 지원 )
- document.getElementById
- document.getElementsByTagName
- document.getElementsByClassName

- el.parentNode ( parentElement )
- el.childNodes ( children )
- el.firstChild ( firstElementChild )
- el.lastChild ( lastElementChild )
- el.previousSibling ( previousElementSibling)
- el.nextSibling ( nextElementSibling )


#### DOM Method
- el.hasChildNodes() // boolean 반환

## Node
#### Node 탐색 
- nodeType 
	- ELEMENT_NODE == 1
	- TEXT_NODE == 3
	- COMMENT_NODE == 8
	- DOCUMENT_NODE == 9
- nodeValue 
	- textContent 로 대체
	- TEXT 노드에서만 접근 가능, ELEMENT_NODE는 null 반환
- nodeName

#### Node 만들기
- document.createElement()
- document.createAttribute()
- document.createTextNode()

#### Node 조작
- parent_node.appendChild(child_node)
- target_node.parentNode.insertBefore(insert_node, target_node)
- parent_node.removeChild(child_node)
- target_node.parentNode.replaceChild(replace_node, target_node)
- node.cloneNode(boolean)
- node.hasChildNodes()
- node.isEqualNode() (DOM Lv3, IE호환 가능)
- node.contains(other_node) (DOM Lv4, IE 호환 가능)
- node.normalize() (DOM Lv2, IE 호환 가능)
- el.innerHTML

#### HTML inline 속성 가져오기 
- el.id
- el.className
- el.title
- el.getAttribute('role')
- el.getAttribute('data-container') ↔ setAttribute()
- el.getAttribute('aria-hidden')

#### Helper Function
- prependChild(child_node, parent_node)
- insertAfter()
- query()
- queryAll()
- $q
- makeModal()
- removeModal()
- remove()
- changePositionNode()
- createNode()

##### 요소 스타일을 가져오는 Helper Function
- 비 표준 MS IE 방식 (IE 8-)
node.currentStyle.fontSize

- 표준 방식(IE 9+)
// window.getComputedStyle(대상, 가상요소).fontSize
window.getComputedStyle(target, null).fontSize




# 크롬 스타일링 출력
- console.log('%c some text', 'background: #222; color: f00')

# 메모리
- 변수 선언은 선언된 메모리 공간에 이름표를 달게된다.



# 이벤트 설정
body.이벤트 = function (){}

# JS에서 undefined, null 제외하고 객체다. 
- 기본검사 : !!'문자'.toString() // true , !![].toString() // false
- Object의 객체인 toString을 가지고 있어야 하는데 null, undefined는 없다.
- !!(null).toString()
- !!(undefined).toString()




-------------------------------------------------------------------
# 용어정리
### 익명함수
- function (){}
- var fn = function(){} : 변수에 리터럴로 설정가능
- 메모리에 링크가 걸려있지 않으면 자바스크립트에서 알아서 메모리 관리

### Like Array 
- return(반환) : NodeList or HTMLCollection

### 메서드
- 객체.함수(메서드)
- 어떤 객체에 정의 된 함수를 메서드라 한다.

### 이벤트 핸들러
- body.onclick = function(){}
- 이벤트에 연결된 리터럴 함수 

### Object - 생성자함수, Constructor 
- Object: 모든 객체의 조상 
- div 조상 확인 개발자 도구 Properties 에서 확인 가능 
- .toString() 객체가 가지고 있는 능력

### JS 객체생성자
- Number String Boolean Array Function Object Math Date RegExp...
- 위에 나열된 객체 생성자로부터 태어난 객체(인스턴스)를 통해 확인(검증)


----------------------------------------------------------
# JS 문법
### for 반복문
- 



-----------------------------------------------------------
# JS 성능저하를 일으키는 원인들 ( 티끌모아 태산 )

```javascript
	// 1번: 성능저하 코드
	for(var i=0; i<parent_child.length; i++){..}
	// 2번
	for(var i=0, l=parent_child.length; i<l; i++){..}
```

