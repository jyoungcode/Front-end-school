### mobile web을 만들 시에 주의 사항.
- 안드로이드 운영체제 버전이 같아도 내장되어 있는 웹브라우저가 다를 수 있다.
- 1. overflow 속성을 사용해 스크롤을 넣을 수 없다. ( JS를 활용해서 만들 수는 있다. ex. 페이스북 )
- 2. 스마트폰에서는 hover, active 사용을 주의해서 해야한다. touch 시에 바로 적용 될 수 있기 때문에.
- 3. 대부분 스마트 폰에서 ~ (일반형제선택자)를 지원하지 않는다. ( 모두는 아니고 대부분이다.)
- 4. 안드로이드 2,3 버전의 웹브라우저는 CSS3 gradient 적용하지 못한다.
( background.png로 1px 높이px; gradient로 대체한다. )
- 5. 스마트폰 웹 브라우저는 CSS 선택자를 사용 할 수 없다.

### viewport meta 요소
```html
<meta name="viewprot" content="width=device-width, initial-sclae=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi" />
```

- 일부 모바일 브라우저에서는 target-densitydpi를 지원하지 않는다.

##### 스마트폰 운영체제 meta태그 관련 
[android](https://developer.android.com/guide/webapps/targeting.html)
[iPhone](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html)

### mobile , % 계산
- unit 2개 : 50%
- unit 3개 : 33.33%
- unit 4개 : 25%
- unit 5개 : 20%
- unit 6개 : 16.66%

### `<div>`를 이용한 mobile web navigation 에서 목록을 만드는 법 
- display: table (table태그와 같은 레이아웃)
- display: table-cell (td태그와 같은 레이아웃)

### 언제 min-, max- 를 사용 할 것인가?

`body { min-width: 760px;}` 을 설정하면 760p이하로는 float라든지 떨어지지 않도록 한다. 그 크기를 유지하는 최소 너비값을 말한다.

