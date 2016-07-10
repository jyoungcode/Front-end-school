# HTML

## Basic, Text Format


### DOCumnet TYPE definition : <!DOCTYPE>
- 반드시 문서의 가장 첫 번째 줄에 있어야 합니다.
- 문서가 표준을 준수하는지, 준수한다면 어떤 버전의 표준인지 브라우저가 이해할 수 있도록 표시하는 식별코드
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN"
"http://www.w3.org/TR/html4/frameset.dtd">
```

# block 요소
### heading : h1 ~ h6
- 사이트 로고, 제목은 가장 중요한 정보영역
### paragraph : p
- 단락 , 인라인 요소만 포함 가능하다.
### line BReak : br
- 줄바꿈
### Horizontal Rule : hr
- 문서의 내용을 구분

# inline 요소
### comment : <!-- -->
- 메모, 브라우저가 읽을 수 없다.

### Bold : b
- text 두껍게 표현
### ltalic : i
- text 기울여서 표현
### Strong , emphasize : em
- 매우강조 , 강조
### Superscripted text : sup , Subscripted text: sub
- 윗첨자, 아래첨자

### <b>,<i>,<u>,<strike>,<s>,<big>,<small>,<center>,<font>
- 표현에 국한된 요소. 웹표준문서에서 사용하지 않는다.
- CSS로 표현 가능하다.

### Anchor: a
- 문서 내,외부 href 속성을 이용하여 연결
- a 태그는 하이퍼링크 기능을 제거하고 사용하는 경우도 있다. href 속성값 반드시 입력. 그래서 # 사용.
### resource reference : link
- 외부 스타일 자원(CSS, images)을 문서로 가져온다.


### image: img
- `src="이미지 경로"` : 필수 속성
- `alt="이미지 설명"` : 필수 속성, 이미지가 없을 경우 대체 텍스트, 스크린리더로 나타내기 위해서
- width, height 속성을 사용해야 하는 이유?


##### map : 맵의 전체 영역으로 <area/>의 부모요소
##### area : 맵 안에 다른 문서를 연결시킬 수 있는 영역

```html
<!-- 단락, 이미지 맵 -->
<img src="../img/1박2일.jpg" alt="1박 2일" width="400" height="250" usemap="#imgMap" />

<!-- map, area -->
<map id="imgMap" name="imgMap">
  <area shape="rect" coords="267, 72, 318, 130" href="#" target="_blank" alt="이수근" />
  <area shape="circle" coords="128, 71, 31" href="#" alt="강호동" />
  <area shape="polygon" coords="246, 77, 262, 241, 187, 231, 214, 69" href="#" alt="이수근" />
</map>
```

## Lists
### ordered list: ol
- 순서대로 나열
### unordered list: ul
- 순서없이 나열
### list item: li , <ul><ol> 자식요소는 반드시 <li>

### definition list
- dl 정의하고자 하는 요소들 목록
### definition term
- dt 용어
### definition description
- dd 설명


### table
- 표준 문서를 작성 시 의미에 맞게 사용한다면 사용가능.

```html
<colgroup>
  <!-- span 속성이 있으면 col을 대체 할 수 있다. -->
  <!-- span 속성이 없으면 col을 추가 할 수 있다. -->
  <col span=""></col>
</colgroup>
<!-- summary(내용요약), caption(제목)은 접근성을 위해서 반드시 필요 -->
<!-- `<caption>`은 접근성 준수를 위해서 필요하나, 제목을 의미하는 구조화된 요소가 존재할 경우 생략 가능하다 -->
<table border="1" summary="테이블 요약내용">
  <caption>테이블제목</caption>
  <colgroup>
    <col span="2" style="background: red;" />
    <col style="background: blue;" />
  </colgroup>
  <thead style="background: green;">
    <tr>
      <th scope="영역 지정">제목</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td rowspan="행 합치기">내용</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td colspan="열 합치기"><abbr title="Hyper Text Markup Language">HTML(축약 설정)</abbr></td>
    </tr>
  </tbody>
</table>
```
