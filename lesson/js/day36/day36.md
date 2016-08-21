객체.속성(변수)
객체.메소드(함수)

object = properties + methods

## 배열객체를 사용하려 할때 왜 new문을 사용해서 객체를 변수에 참조하는거죠?
- 객체는 new를 통해 실체화 해야지만 사용가능하다.

Class: 설계도면 - 원형객체 JS에서는 prototype이라 한다.
(실체화된 객체)인스턴스를 통해서 Class에 접근이 가능하나, 즉 Class 내부를 변경하면 
모든 인스턴스들은 변경된다.

// 생성자 함수 : 증거 대문자와 this
function Coffee(name){
	this.name = name;
	// return 객체를 생성해서 반환한다.(new 사용시 보이지 않지만)
}

var americano = new Coffee('아메리카노');
var latte = new Coffee('라떼');
var mocha = new Coffee('모카');


# prototype

Object.prototype을 상속 Number.prototype은

프로토타입(빈객체) 
함수는 항상 프로토타입(빈객체)를 참조한다.

프로토타입에 객체를 추가하면 상속을 통해 생성된 객체(인스턴스)는 이를 가져다가 쓴다.
(물려받는..)

원형객체(빈객체) : 프로토타입
constructor, _proto_ 형태 

(10).constructor - 객체가 연결된 생성자 함수로 연결
(10).constructor.prototype - 그 생성자 함수의 원형객체로 연결

새로생긴
(10)._proto_

document.body.constructor
document.body.__proto__
document.body.__proto__.__proto__로 계속 찾아갈 수 있으며


##프로토타입 체이닝
for~in 문에서 hasOwnProperty를 꼭 써야하는이유
안쓰면 프로토타입까지 계속 거슬러 올라가기 때문에
프로토타입체이닝 과정이 일어나서 성능 저하가 된다.

## 메소드 체이닝
var str = "How are you";
str.split(" ").join('/'); 
split: string에 대한 메서드라서 return이 array이다
join: array에 대한 메서드이다


## 

global.num2 = (new Number(false)).valueOf();
이 과정에서 
var num = new Number()면 메모리 할당 되는데
(new Number())는 메모리 할당없이 바로 객체로 선언하고 쓰는의미


##input.value.trim

## concat 을 굳이 +로 처리 가능해서 잘 안쓰는 메서드 많다.

## 배열을 합칠때는

arr1.concat(arr2)로 합칠 수 있다.

arr1.push(arr2) 하면 이중배열이 되서 X


### 네임스페이스

네임스페이스 :
jquery.makeArray

네임스페이스란 간단하게 디렉토리와 같은 것이라고 생각하자

jquery라는 네임스페이스라고 부르는거.
그런데 모듈이 서로 다른 개발자에 의해서 만들어지기 때문에 같은 이름을 쓰는 경우가 생길 수 있다. 이런 경우 먼저 로드된 모듈은 나중에 로드된 모듈에 의해서 덮어쓰기 되기 때문에 이에 대한 대책이 필요하다. 네임스페이스가 필요해지게 되는 것이다. 

## 
4. slice.call()이란
slice는 인자값의 배열이 아니라 모든걸 복사해온다는 의미?
call()은 뭐지?

## 생성자 함수 프로토타입 접근 순서
function Tab(){}
var item = new Tab();
var item2 = new Tab();
var item3 = new Tab();

item.__proto__ // Object

item.constructor.prototype

Number 나 String은 프로토타입까지 거슬러 올라가는데 내부적으로 정의된 것들이 존재하나
커스텀하게 만든것은 그냥 Object 아래에 생성된다.

