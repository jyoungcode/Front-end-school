# Javascript Basic Tip

####원시 자료형 
- 원시자료형에는 해당하는 리터럴 표현이 있다.
(리터럴이란 "hello, world"말고는 다른 의미를 표현하지는 않는다. 그냥 딱 그 값을 말한다.)
- 자바스크립트는 모든 값을 객체처럼 다룬다. 원시자료형에도 프로퍼티와 메소드가 존재하는 것처럼 보인다.

> ex)`"hello, world".length;`

#### 생성자, 인스턴스 
- 생성자 : 각 타입의 특성을 말한다. ( ex. String 생성자 만으로 사용못한다)
- 인스턴스 : 생성자의 실제 사용값 ( ex. String생성자의 string은 인스턴스다. 이 또한 객체다. )

#### 참조자료형
`var obj1 = new Object();`

- Object()라는 객체 생성자는 메모리에 올라가 있고 var obj1은 변수모양에 객체로서 또하나가 만들어지고 메모리에 연결 되는 것이다. 고리로

#### undefined
`var name; //undefined`

- 변수를 선언하고 아무런 값도 할당하지 않을 때의 기본값

`var name = undefined;`

- undefined를 직접 설정해주면 된다.


## 자주 쓰는 Method

####[Number] 숫자가 아닌 것을 확인 
- `isNaN()`

####[object] 활용도 높은 메서드
- `charaAt()`
- `charCodeAt()`
- `replace()`
- `indexOf()`
- `lastIndexOf()`
- `search()`
- `slice()`
- `split()`
- `substr()`

> ex) "안녕하세요".substr(2,2); // "하세"

- `substring()`

> ex) "안녕하세요".substring(2,4); // "하세"

- `trim()`
- `String.fromCharCode()`

> ex) String.fromCharCode(64) = "@"
> ex) "가나".charCodeAt(0) 44032

####[array]자주쓰는메서드
- `concat()`
- `filter()`
- `forEach()`
- `indexOf()`
- `join()`

> ex) var arr=[10,20,30] 
> arr.join(+) = "10+20+30"

- `map()`
- `pop()`
- `push()`
- `reverse()`
- `shift()`
- `slice()`

> ex) var arr=[10,20,30]
> arr.slice(1,2); = [20]

- `sort()`
- `unshift()`

## 이스케이프 문자
- `\r`
- `\n`
- `\t`
- `\xNN`
- `\uNNNNN`

##[ 헷갈리는 자바스크립트 ]
####< string >
`"40" + 5 // "405"`
`"40" - 5 // 35`

`var numORstring1 = "3"+"3" //"33"`
`var numORstring2 = "3"*"3" //9`

> "a" - 5 // NaN
> "" -5 // -5
> null - 5 // -5 

####0만 false다!
> !10 // false
> !0 // true

####문자열 중에 딱 하나만 false다
> !"" // true
> !"a" // fasle (안에 뭔가 넣으면 무조껀 false)

####변수에 값을 모를때 boolean을 뽑아내는법
> var guess="hello" // true
> !guess // false 
> !!guess // true  ( 한번 더 되돌리는것. )

#### length 줄이기 ( 배열에 적용, 원시타입 리터럴 X)
`var arr = [10,20,30];`
`arr.length // 2`
`arr = [10,20]`

- (줄어든다. 대신 값이 string인거는 안된다!)

#### 원시타입과 참조타입의 메모리 연결 차이 

`var arr1 = [10,20,30];`
`var arr2 = arr1;`
`arr2 == arr1; // true`

`var arr3 = [10,20,30];`
`arr1 == arr3 // false`

- 메모리에 참조하는 주소가 다르다.

`var str1= 'string';`
`var str2=str1;`
`var str3 = 'string';`
`str3=str1 // true` 

- 값이 같으면 가르키는곳이 같다.

## ES 6
- backtick 문자(`)로 묶으면 템플릿 문자열이 된다.
- 템플릿 문자열 안에서 표현식도 사용할 수 있다.

```js
var num = 30;
"인생은 "+(num * 2)+" 부터"
`인생은 ${num * 2}부터`
```
