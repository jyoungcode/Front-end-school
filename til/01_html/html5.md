# HTML5 특징?
- 플러그인 없이 오디오, 비디오 지원
- 플래시 대신에 캔버스, 이미지 변환 기능, 애니메이션
- 로컬 저장소와 캐싱 기능. 오프라인에서 웹에 접속 가능
- 현재위치 알려주는 웹페이지 제작 가능

## HTML5에 새로 추가된 기능

`<details>`

`<summary>`

`<figure>`
- (block요소) 이미지, 차트, 비디오 등 을 감싸는 요소

`<figuration>`
- figure요소를 설명한다.

`<progress>`
- 어플리케이션 설치 상태를 게이지로 나타낸다.

#### 더 이상 지원하지 않는 요소 확인 
`<acronym>` `<applet>` `<basefont>` `<big>` `<center>` `<dir>` `<font>` `<frame>` `<frameset>` `<noframes>` `<strike>` `<tt>` `<u>`

#### footer에서 copyright를 처리하는 방법
```html
<footer>
  <small>카피라이터 부분 처리 가능</small>
</footer>
```

#### 이메일 형식일때만 처리되는 기능
```html
<form action="demo_form.jsp">
<p><label>E-mail:<input type="email" name="useremail"/></label></p>
<input type="submit" value="전송" /></form>
```

#### datalist에 등록해두면 자동완성기능 적용

```html
<form action="demo_form.jsp" method="get">
	<input list="browsers" name="browser" />
	<datalist id="browsers">
		<option value="internet explorer">
		<option value="firefox">
		<option value="chrome">
		<option value="opera">
		<option value="safari">
	</datalist>
	<input type="submit" />
</form>
```