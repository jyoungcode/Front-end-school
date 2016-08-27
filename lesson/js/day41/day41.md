# AJAX (Asynchronous Javascript And XML)

### 비동기 (Asynchronous: 동시에 일어나지 않는, 非同期: 같은 시기가 아닌)
비동기란 말 그대로 동시에 일어나지 않는다는 의미입니다. 무엇이 같이 일어나지 않는다는 말일까요? 바로 요청과 그 결과가 동시에 일어나지 않을 거라는 약속입니다. 즉, 요청한 그 자리에서 바로 결과가 주어지는 것이 아니라, 이따가 줄게라고 약속하는 것이죠.

### 동기 (synchronous: 동시에 일어나는, 同期: 같은 시기)
동기란 동시에 일어난다는 말입니다. 무엇이 동시에 일어날까요? 요청과 그 결과가 동시에 일어난다는 약속입니다. 바로 요청을 하면 그 요청한 자리에서 바로 결과가 주어져야 한다는 말이죠. 시간이 얼마가 걸리든지 상관없습니다, 동기방식으로 하겠다는 것은 시간이 얼마가 걸리든 요청한 그 자리에서 결과를 주겠다는 약속이기 때문이죠. 즉, 요청과 결과가 한자리에서 동시에 일어난다는 말입니다.

#### 동기와 비동기를 구분하는 이유
동기와 비동기를 굳이 구분하는 이유는 상황에 따라서 장단점이 있기 때문입니다. 동기방식은 매우 설계가 간단하고 직관적이지만, 결과가 주어질 때까지 아무것도 못하고 대기해야 하는 단점이 있습니다. 비동기방식은 좀더 복잡하지만 결과가 주어지는 시간이 길어져도 그 시간 동안 다른 작업을 할 수 있으므로 좀더 효율적으로 자원을 사용할 수 있는 장점이 있습니다.

aria가 등장 : 문제점 해결.

기존 : Client - > Server ( 서버에 request 후 기다려야 한다. )
ajax : Client -> Ajax engine -> Server ( data는 ajax가 요청처리하는 동안 client는 계속 작업 가능 )

##### AJAX 기존 기술과 다른점
1. 모든 데이터를 업데이트할 필요가 없으니 불필요한 대역폭 감소가 가능 
비용절감

2. 필요한 부분만 부분 요청 응답  ( 기존은 html 파일을 통째로 바꾼다. )

3. 사용자가 대기 시간을 줄일 수 있다. 페이지 업데이트 안하고 데이터를 불러 올 수 있다.

$ http-server -o -a localhost -p 8081

ajax 객체를 생성해주는 js 생성자 객체를 만들자

### AJAX 전송 가능 데이터
- TEXT , HTML , XML , JSON 

### XHR? ( XML Http Request )
- ajax 비동기 통신을 하기 위한 생성자 함수 
- 마이크로소프트가 먼저 사용하던 같은 기술이 active X.

### ajax 통신 하나가 아니다 엔진안에서 여러개로 일을 다르게 시킬 수 있다.

webpage -> XMLhttpRequest -> server
xtr에 control가 server(model)의 바뀐 데이터를 가지고 와서 webpage에 response 해준다.
xtr->server (이동안 client는 작업가능) ->xtr->client( 이제야 바뀐다. 화면 )

### 서버 오류 메시지 
100: continue
101: switching protocols
200 ok
404: client error
5xx: server eroor

ie6에서는 지원하지 않아서 activex 써야함 

### 데이터 생성 툴
http://generatedata.com/


### XML
XML로 가져오면 responseXML 써야한다. 메서드

### json
https://randomuser.me/documentation
api에서 붙여넣는 방법
git bash -> data 폴더로 cd 이동 -> 
$curl http://api.randomuser.me/?results=20 > data.json

##### json 객체를 파서 해주는법
JSON.parse(json);

--------
# AngularJS

### 왜 사용 하나? -> SPA 

