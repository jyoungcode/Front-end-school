### div
- Division : 문서의 영역별로 구분, 의미 없는 element

### span
- block element 내부에별로 구분

### form
- `<form action="login.php" method="post" enctype="multipart/form-data">폼 요소</form>`
- 사용자로 부터 정보를 입력받기 위한 양식
- action: 사용자가 입력한 정보를 처리할 프로그램(cgi, php, asp, aspx, jsp 등)의 경로를 입력
- method: get | post
- ![GET VS POST](images/getpost.png)
- enctype: multipart/form-data | application/x-ww-form-urlencoded
- name: 폼(form)의 이름, JS에서 제어할 경우, 식별자(hook)로 사용된다.

### input, label, fieldset, legend
- `<input>`: form 요소 내부 요소로 입력된 값을 담아두는 역할
- `<label>`: `<input>`요소의 꼬리표 역할로 접근성을 높여준다. `<label for="input id와 연결">`
- `<fieldset>`: form 요소 내에서 그룹을 만들 경우
- `<legend>`: fieldset 그룹의 제목

```html
<label for="u_id">사용자 아이디</label>
<input type="text" name="user_id" id="u_id" value="jyoungcode" size="30" disabled="disabled" maxlength="10"/>
```
- type
```html
<input type="submit" value="전송 버튼" />
<input type="button" value="입력 버튼" tabindex="1" />
<label><input type="radio" value="man" name="user_sex" />남자</label>
<label><input type="checkbox" value="프로그램" />프로그램</label>
<input type="file" />
<input type="password" id="u_pass" value="" maxlength="10" />
<input type="image" src="images/btn.png" align="absmiddle" />
<input type="reset" value="리셋 버튼" />
<input type="hidden" value="숨겨진 데이타 정보" />
```

### textarea
- 여러 줄의 정보를 입력받을 경우 사용하는 텍스트필드 양식을 말합니다.
```html
<label for="u_comment">사용자 코멘트</label>
<textarea name="user-comment" id="u_comment" cols="77" rows="20">사용자가 전달하고 싶은 말</textarea>
```

### select
- 드롭 다운 메뉴를 만들 경우 사용하는 선택 양식을 말한다.
```html
<select name="">
  <optgroup label="프론트엔드" />
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="javascript">JAVASCRIPT</option>
</select>
```

### object
- images, audio, video, java applets, activeX, PDF, Flash 삽입시 사용
- parameter : `<param>` object의 자식요소
```html
<object data="../images/blog_ad.png" type="image/png" height="240" width="240">
  <p>블로그 광고</p>
</object>
```
- object(chrome,firefox,safari) vs embed(IE6,7,8)
```html
<h3>object를 이용하여 Flash Animation을 문서 내 호출하는 경우</h3>
<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-44455354000" codebase="http://fpdownload.marcromedia.com/pub/shockwave/cabs/flash..." width="400" height="40">
  <param name="SRC" value="http://www.w3schools.com/media/bookmark.swf"/>
  <embed src="http://www.w3schools.com/media/bookmark.swf" width="400" height="40"></embed>
</object>
```
- `<object>` 안에 `<object>` 중첩사용 가능 , 만약 3개의 `<object>`가 있다면 가장 바깥부터 시도, 실패시 안쪽이 실행.

### blockquote
- Long Quotation - 내용이 긴 인용문 사용
- `<q>`는 짧은 인용문 이나. 이제는 '', ""로 대체한다
```html
<blockquote cite="http://...">
  <p>인용 내용</p>
  <cite>인용하는 사람</cite>
</blockquote>

<p>'짧은 인용문'</p>
```

### abbr
- Abbreviation : 축약
- `<acronym>` 축약이나 이제는 사용 안함
```html
  <p><abbr title="Hyper Text Markup Language">HTML</abbr></p>
```

### address
- 이메일 주소 등 웹 상에서 연결될 경로 (물리적 주소가 아니다.)

### ins, del
- insert text , delete text
```html
<p>
  <del>지울 내용</del>
  <ins>삽입 내용</ins>
</p>
```

### pre
- `<pre>`: preserved text
- `<code>`: computer code text
- `<kbd>`: keyboard text
- `<var>`: variable
- `<tt>`: teletype text
- `<dfn>`: definition term
- `<samp>`: sample computer code

### frame, frameset, noframes, iframe(inline frame)
- 접근성이 떨어지는 관계로 표준 문서 작성시 사용 권장 X
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<html>
  <head>
    <meta charset="utf-8">
    <title>HTML Frameset</title>
  </head>
  <frameset cols="10%, 80%, 10%">
    <frame name="page-left-sidebar" src="frames/sidebar-left.html">
    <frame name="page-main" src="frames/main.html">
    <frame name="page-right-sidebar" src="frames/sidebar-right.html">
    <noframes>
      <body>
        <!-- 프레임셋 이제 쓸 필요 없다. AJAX로 처리하자 -->
        <!-- 프레임셋 미 지원 시, 대체 내용 작성 -->
        <p>브라우저가 프레임을 지원하지 않습니다.</p>
      </body>
    </noframes>
  </frameset>
</html>
```
