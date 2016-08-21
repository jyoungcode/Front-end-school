1. global이 전역이 된다? 
 - global this는 window라서 전역으로 빼겠다는 의미
2. 바닐라js는 라이브러리 프레임워크 없이 네이티브 코드로 하는것. 다운받아서 사용
4. ++ 보다 --가 빠른이유?
- var 변수를 줄여주는것과 그리고 0에서 ++로 10까지 찾는거 보다 --로 0에 가까운 음수로 찾는게 가깝다 그래서 빠르다.
5. 캐러셀 작업방식? 순서
6. IIFE이라서 내가 마음에 드는걸 외부에 공개? .. 그건 다른 개발자들이 보고 쓰게끔 하고 싶은것만을 이야기 하는건가..? 
- 페북 로그인처럼 서비스 마다 공개할만한게 다르다
7. requestAnimation 대신에 그냥 css 쓰면 되는거 아닌가? 원리 설명하려고 알려주신건가?
- css를 쓰는게 best지만 크로스브라우징 때문에 하위브라우저는 requestAni.쓰자 
8. carousel.prototype을 만들고
demo-a에서 프로토타입에 생성된 메서드를 가져온다.
9. changePositionNode 

======================================================
< 찾아보기 /  할일 >
1. aria-hidden
2. variable 등 다 외부 sass로 빼서 import 하자
3. carousel content wrap
transform - translate-y를 -로 올리면 사진 올리기 가능하다
4. jade로 
5. trim 헬퍼함수 만들자
6. 캐러셀 인디케이터 수는
데이터(사진) 갯수에 따라 동적생성이다. html 하드코딩 아니다
7. 링크걸어주신 requestAnimationFrame은
시간 제어 어려워서 stackoverflow에 animate 함수를 넣어서 사용

이 메서드가 css animation과 성능차이가 없게 끔 하려고 GPU 기반이다.

8. jquery q unit - 테스터 
