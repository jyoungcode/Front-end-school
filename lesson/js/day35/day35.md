
### forEach()
- 콜백함수: return없이 정의된 함수를 불러서 사용하는것.
- return 값 없이 for each(callback fn) 콜백 함수를 담아서 실행

```javascript 
// Define the callback function.
function ShowResults(value, index, ar) {
    document.write("value: " + value);
    document.write(" index: " + index);
    document.write("<br />");
}

// Create an array.
var letters = ['ab', 'cd', 'ef'];

// Call the ShowResults callback function for each
// array element.
letters.forEach(ShowResults);

// Output:
//  value: ab index: 0 
//  value: cd index: 1 
//  value: ef index: 2 
```
### map()
- 배열 내의 모든 요소 각각에 대하여 제공된 함수(callback)를 호출하고, 그 결과를 모아서 새로운 배열을 반환

return 능력
- 함수를 종료
- 함수값을 반환

return이 있어야할 경우 : 값을 가져와야할때
return이 필요없는 경우: setter함수 함수기능을 세팅할때

# this
context는 특정객체를 말하고
this는 그걸 가르킨다.

전역 컨텍스트에서 this는 window를 가르킨다. ( 웹브라우저에서만 node는 global)

지역컨텍스트에서 this는 해당 컨텍스트 객체를 가르킨다.

var fds = {};
fds.showMe = showMe;
fds.showMe // this는 fds

# strict mode
ES6는 기본적용, ES5는 선언해줘야 사용가능
"use strict" 

function(){
	"use strict";
	this // undefined
}

new를 붙이는건 window에에러..?
생성자 만들때 꼭 use 쓰자
안쓰면 계속적으로 전역변수가 생길수있다.

### dbclick event 
- 모멘텀에서 텍스트 편집시 사용

### callback functioin

- offsetparent : 해당 요소 absolute에 부모 컨테이너가 된다.
- offset 좌표 값이 브라우저마다 다 달라서 helper function을 만들어야 한다.
- jquery가 그렇게 되어있다.


# 클로저 closure
- 함수는 인자로 전달 될수도 있고 값으로 반환 될 수도 있다.
- 함수에서 반환된 함수를 실행하면 생성됩니다.

원래 외부함수에 감싸진 내부함수는 접근할 수 없는데 .

외부 함수 호출시 내부 함수에서 리턴한 것 즉 내부 함수 자체를 리턴 받을 수 있다.

클로저 함수란 : 내부 함수를 뜻하고
클로저 스코프는 : 이미 사라졌을 그 부모 스코프를 뜻한다.
클로저 사용시 체이닝이 많아지면 성능 저하?

함수 종료후 메모리에서 지워지는데 부모 스코프의 변수를 계속 참조하면서 거슬러 올라가기 때문에 가비지 컬렉터 대상에서 제외 되다가 메모리 참조되지 않으면 삭제된다.

### 스코프 까먹지 말자

(inner 함수) 지역변수 > 파라미터 > (outer) 전역변수and지역변수 > 파라미터 > 전역변수

### domhelper 함수를 오픈 api 시키는 법.

 
### prototype은 메서드의 모음