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
