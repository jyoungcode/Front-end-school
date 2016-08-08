# undefined, null  이 객체가 아닌 이유
- Object는 모든 객체의 종 ( 객체가 소유한 능력을 다른 객체는 상속 받게 된다. )
- Object의 객체인 toString을 가지고 있어야 하는데 null, undefined는 없다.
-확인법 : !!(undefined).toString()
- obj.toString()

#Object // 생성자/함수, Constructor 
- Object: 모든 객체의 조상 
- div 조상 확인 개발자 도구 Properties 에서 확인 가능 
- .toString() 객체가 가지고 있는 능력

# JS 객체생성자
- Number String Boolean Array Function Object Math Date RegExp...
위에 나열된 객체 생성자로부터 태어난 객체(인스턴스)를 통해 확인(검증)

