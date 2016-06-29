.htm은 뭐지?
#html(Hyper Text Markup Language)
- Markup : 구조화, 규칙을 지켜 작성하는 언어

## head
- html문서의 정보영역
### meta
- 웹 서버와 브라우저 간에 상호 교환되는 정보를 정의.
- 디자인에는 전혀 영향을 미치치 않는다.
- 문서의 내용, 키워드, 만든이 등 자체 특성을 담고 있다.
##### http-equiv, name, content
- `http-equiv="브라우저가 서버에 지시하는 명령"`
- equivalent: (의미)동등한
- html 문서가 응답 헤더와 함께 웹 서버로부터 브라우저에 전송 되었을 때에만 의미를 갖는다.
- `content="정보 값"`
- 정보의 내용을 지정
- `name="정보 이름"`
- meta 정보의 이름을 정할 수 있으며, 지정하지 않으면 http-equiv와 같은 기능
```html
<meta http-equiv="name" content="content">
```

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```
- 비표준모드
- http-equiv : <meta> 요소에서 정의된 명령을 먼저 실행 후 페이지로딩. 프라그마 디렉티브
- "X-UA-Compatible" : -호환되는 ( 여기서 X 약어가 아니라 비표준의 표시이다. )
- IE=Edge : 최신버전(Edge)으로~ 익스플로러에 대응하기 위해서 쓰이는 meta 요소다. ( Edge가 익스플로러 버전이 아니다. )
- 위 코드 자체가 없으면 익스플로러 7 대응한다. 표준은 아니다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
```
- 초기 화면 배율, 최대, 최소 축소가 같으면 손가락으로 drag를 할 수 없다.
- user-scalable=no: 확대, 축소 금지
- 그래서 사이트 마다 모바일 환경에서 이걸 적용 할 건지에 따라 기입하고 안하고 한다.
width=device-width 는 디바이스에 따라 width를 잡아 준다는 의미.




### base
- `<base href="http://myDomain.com" target="_blank">`
- 웹문서 내에 사용되는 링크의 기본 도메인 경로 및 열리는 상태를 설정

### style
- html문서 내부에 css를 작성

### script
- html문서 내부에 Javascript를 작성
- type 생략가능 [MIME]( )

### noscript
- javascript를 지원하지 않을 경우 대체
```html
<script type="text/javascript">
  document.write("<h1>동적으로 생성된 스크립트</h1>")
</script>
<noscript>
  <p>클라이언트 user-agent(브라우저)는 JS를 지원하지 않습니다. JS를 지원하는 브라우저로 접속해주세요.</p>
</noscript>
```

### lang
- 스크린리더의 음성엔진이 달라진다.
- 접근성이 향상된다.

###
