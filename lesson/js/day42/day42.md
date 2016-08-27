# Storage 

### Storage란 ?
**클라이언트에 데이터를 저장하다**
HTML 5 에는 웹 사이트의 데이터를 클라이언트에 저장할 수 있는 새로운 자료구조인 
Web Storage(웹 스토로지) 스펙이 포함되었다

- local Storage ( 로컬 저장소 )
- Session Storage ( 임시 저장소 )
- 데이터의 지속성 구분 후 환경에 맞게 사용
- Web Storage 는 기존 웹 환경의 쿠키(Cookie)와 매우 유사
(사실 거의 차이가 없어보이나  몇 가지 쿠키의 단점를 극복하는 개선점이 도입)

### Storage 사용시 주의 사항
- 지원이 안된다면 사용자에게 웹브라우저 업데이트 권고
- 우리는 local storage를 쓰는데 IE 하위버전 사용자에게 Flash 또는 다른 방법을 안내 한다. ( 그러나 브라우저 업데이트를 권장한다. )
- 도메인 하나당 5MB 지원 ( String 데이터만 저장 가능하다. )

### 사용예시
- 사용자의 로컬스토리지에 웹폰트를 저장하는경우 있다. 캐시에 저장되도 깜빡임이 있는데 로컬스토리지에 저장하면 해결된다.

### local Storage 개발자 도구
- 개발자도구 -> application -> storage 
(사용자의 로컬스토리지에 저장 가능 하다.)

- localStorage.getItem('key') : 데이터 가져오기
- localStorage.setItem('key', value(변수)) : 데이터 저장(입력)
- localStorage.clear() : 전부 지우기
- localStorage.length : 데이터 총 수 

### 지원 플러그인
- perfect pixel

페이지가 리로딩 되도 내가 원하는 컨텐츠가 그대로 그 자리에 있게
하는 거 프론트에서 설정 할 수 있다.

--------------------------------

# AngularJS
- '<' 이걸 angle brace 라고 해서 이걸 사용하는 html이라 angularjs 라고 한다.

### 용량 문제
[용량](https://css-tricks.com/case-study-boosting-front-end-performance/)

script가 총 360kb 정도 사용하는데
angular 160kb + jqeury 80kb + 내가 작성하는 용량이 그나머지 이나 벌써 앞에서 용량을 너무 많이 쓴다
jquery gzip 압축을 해보자

### 특이사항
- 1버전은 속도가 단점이다. 2버전은 아직 정식 개발버전이 나온게 아니다.

### JSON
- 무조껀 "" 써야한다

### 툴
- bower : 클라이언트 사이드 관리 툴
	- 해당 directory 
	- npm i -g bower
	- bower -v 

~/.bowerrc
echo '{"directory":"lib"}' > .bowerrc && cat .bowerrc{"directory":"lib"}

- npm : 서버 쪽 관리 툴

파일생성시 명령어
echo '{}' > bower.json
(touch는 내용없이 파일 만든다.)

bower i --save angular#1.5.8
bower i --save angular 

node_modules/angulars


devDependencies 
dependencies 

### angular 과정 용어
- bootstrap : 자기 스스로 하는 , 예비 명령에 의해 프로그램을 로드(load)하는 방법. 용어.

- data-ng-init : 
- data-ng-model:
- data-ng-bind :

- Two-Way Data Binding : 
- Own-Way는 바인딩이 한번만 되고 이후에 실시간 변화가 일어나지 않는다.


ng-app을 만나면 model에서 root scope가 생성된다.

앵귤러는 여러개의 컨트롤러를 만들 수 있다.

M (angular ajax)에서 -> controller에게 전달 -> templete(v)에게 전달
이걸 controller에서 templete으로 연결 시켜주는 directive

Routes가 model과 view를 연결 시키는 역할을 한다

view와 model

MVC 모델을 표방하지만 
MVVM : MODEL , VIEW 사이에 VIEWMODEL($SCOPE)이 통신 역할을 한다.

UI(view) : VIEW , Directive, filters 
- filters : 
logic(model) : 
controller
factory , service : controller들을 연결해주는것 

factories / service 는 싱글톤 객체
- 