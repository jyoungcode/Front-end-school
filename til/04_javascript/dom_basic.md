# 표준, 비표준
document.compatMode == 'CSS1Compat'

document.documentElement; // html

# DOM (Document Object Model)

### getElements와 getElement의 차이
- `.getElementsByClassName('.head')`: [<div class="head"]
- `.getElementById('main')`: <div id="main">

### 셀렉팅된 Node는 array like 형태다.
 **`getElementByClassName`의 반환값은 array like object이기 때문에 반드시 [0]를 붙여서 node를 선택해줘야 한다.**
 ```javascript
 function btnColor(name){
	return document.getElementsByClassName(name)[0];
}

btnColor('btn_red').onclick = function(){
	body.style.backgroundColor = '#ea7ea7';
}
```

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

# Type 비교 

### type of
- arr , null을 object 반환하는 오류가 있다.

### instanceof
- 객체를 생성하는 생성자 함수를 통해 객체인지 확인
- 원시 데이터 리터럴의 경우 쓸모가 없다.
- new Number(9) instanceof Number // true

### constructor ( 데이터가 생성된 객체 )
- 객체 유형에 한해서 완벽
- 객체가 아닌 것에 부정확

# prototype
- Objectㅇ



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
### 삼항식
```javascript
	// 0: 일요일, 1: 월요일, ~ , 6: 토요일
	var today = 5;

	var today_is = today === 0 ? '일' :
	                today === 1 ? '월' :
	                today === 2 ? '화' :
	                today === 3 ? '수' :
	                today === 4 ? '목' :
	                today === 5 ? '금' :
	                today === 6 ? '토' : '장난 하냐';
	console.log('오늘은 ' + today_is + '요일 입니다.');
```

### switch ~ case
```javascript
switch (today): {
    case 0: 
        today_is = '일';
        break
    case 1: 
        today_is = '월';
        break
    case 2: 
        today_is = '화';
        break
    case 3:
        today_is = '수';
        break
    case 4:
        today_is = '목';
        break
    case 5:
        today_is = '금';
        break
    case 6: 
        today_is = '토';
        break
    default: 
        today_is = false;
}
```

### while

```javascript
var count = 0;

while (count++ <= 15) {
    document.write('<p>' + count + '</p>')
}
```

### do ~ while

```javascript
	var boo = true, n = 10;
// 무조건 한번 실행
do {
    console.log( boo ? 'True!' : 'False!');
    if ( n-- < 10 ) {
        boo = !boo;
    }
} while(boo)
```

### for문
```javascript
	for( var i = 0; boo = false; i < 10; i++ ) {
    if ( i === 9 ) {
        boo = !boo
    }
    //  혹은 boo === 9 ? !boo : boo;
    console.log(boo ? 'True!' : 'False!')
    // 숏 코딩
    // console.log( ( i === 9 ? !boo : boo ) ? 'True!' : 'False!' );
}
```

### for ~ in
```javascript
// 배열에게는 권하지 않음! 프로토타입 체이닝을 거치기 때문에 느려짐
//  for문, forEach()메서드를 사용
// obj.hasOwnProperty 꼭 사용 
// 왜냐면? obj가 prototype을 타고 올라가서 확인하는것을 방지한다.

for (var property in obj) {
    if (obj.hasOwnProperty(property){
        console.log('속성: ', property);
        console.log('값: ', obj[property]);
    }
}

// 객체에 속성이 있는지 물어본다
'localStorage' in window // true;
```

### forEach
```javascript
	// 배열 객체(Array)의 메소드: .forEach(원소, 순서, 배열)
// .forEach() 문은 반환 값이 없다. (undefined)
// 참고 URL: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
var arr = []
movielist.forEach(function(item, idx) {
    console.log('item '+ idx +': ', item);
    return 'item '+ idx +': ' + item;
    if (item !== '부산행') {
        arr.push(item)
    }
});
```

### map()
```javascript
	// 배열 객체(Array)의 메소드: .map(원소, 순서, 배열)
// .map()의 반환 값은 수정된 배열을 반환한다.
// 참고 URL: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
var new_movielist = movielist.map(function(item, index, arr) {
    console.log(item + '은 ' + index + '번째 원소입니다.');
    return item + '은 ' + index + '번째 원소입니다.';
    if ( index === movielist.length - 1 ) {
        console.log('arr:', arr);
    }
});
```

### this

### callback 함수

### %나머지 연산자 응용 방법 ( 배열 )

```javascript
var message = ['hi', 'hello', 'come on', 'bye'];
for (var count = 0, messages = message.length; count < messages; count++) {
    console.log(message[ count % messages ]);
}
```



---------------------------------------
# Helper Function
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
- equal()
- strictEqual()
- cleanWhiteSpace() - ES6
- getStyle()
- getUnit()
- hasUnit()
- errorMSG() - 오류메시지 입력 목적
- prevEl()
- nextEl()
- isElementNode()
- firstElement()
- lastElement()
- isElName()
- isTextNode()



-----------------------------------------------------------
# JS 성능저하를 일으키는 원인들 ( 티끌모아 태산 )

```javascript
	// 1번: 성능저하 코드
	for(var i=0; i<parent_child.length; i++){..}
	// 2번
	for(var i=0, l=parent_child.length; i<l; i++){..}
```

