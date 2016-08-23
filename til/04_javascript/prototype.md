[프로토타입](http://www.nextree.co.kr/p7323/)

Object(prototype이라는 빈객체를 가지고 있고)
Object프로토타입 객체는 constructor라는 메서드를 가지고 있다.
이 둘은 서로 참조를 하고 있고 
var obj = new Object()는 __proto__를 가지고 있으며 
construct를 일방적으로 가르킨다. 

그래서  Function.__proto__.__proto__.constructor 는
function Object(){[native code]} 를 가르킨다.(역으로 타고 올라감 )

- Object 최상위는 Function이라는 하위 생성자 함수(객체)를 알지 못한다. 그러나 Function이라는 하위 객체가 
__proto__로 Object.prototype.constuctor를 연결, 일방적으로 가르킨다.(참조)
Object.prototype에 constructor 라는 함수(객체)는 
Object()를 가르킨다. 그안에는 prototype이라는 객체(함수가 아니다. 빈객체)