# Navigation 작성 tip.
###### UI에 따른 여러가지 방법을 분석 해보자.

### 보편적으로 ul, li, a에 어떤 속성을 적용 시키는게 적합할까?
```css
	/* overflow: hidden 보다 clearfix */ 
	/* ul에 margin:0, padding:0로 초기화 시키는 별도 파일을 만들거나 reset에서 적용하자. ex. common.css */
	#main_gnb > ul { list-style-type: none; width: 200px; background-color: #f1f1f1;}
	#main_gnb > ul > li{ float: left; }
	#main_gnb > ul > li > a {
		display: block;
		padding: 10px 20px;
		color: #fff;
		text-decoration: none;
	}
```
##### 우리의 요구사항
- 수평으로 나열된 Navigation을 만드려고 한다.
- 텍스트 뿐만 아니라 여백까지 버튼 하나의 영역을 클릭 하기를 원한다.

##### 해결하기 위한 방법
- `<a>`는 `inline` 속성이므로 텍스트 크기만큼만 지정 되어있다. 그래서 `<a>`를 `block` 요소로 바꾸고 `padding`으로 여백을 버튼 하나 크기 만큼 늘려줘야 한다.
- `<ul>` 에는 기본적으로 아래 만큼에 `margin`, `padding`이 존재한다. 그래서 이 값을 0으로 초기화 시킨다.
- **my-research** `<ul>`의 margin 값은 자식 `<ul>`의 `font-size`값에 영향을 받는다. `<body>`의 기본인 16px에 영향을 받지만 `<ul>`에 font-size가 적용된다면 그 값에 영향을 받는다.
	- `margin-top: 16px;`, `margin-bottom: 16px;`
	- `padding-left: 40px;` 

### `header` 부분을 만들때  자식, 자손의 중앙 위치 지정
```css
	#main_header { 
		/* 배경 지정 */
		height: 45px;
		background: url('');
		/* 자손 위치 지정 */
		position: relative;
		text-align: center;
		line-height: 45px;
	}
```

-----
##### 실제 사이트들의 Navigation은 어떻게 구성했는지 파악해보자.
### Case01. [배달의 민족](http://www.baemin.com/?gclid=CISfuM-epc4CFU0AvAodV3YEXQ)
- ![배달의민족 네비게이션](../../../images/research/bamin_nav.png)
- ![배달의민족 모바일 네비게이션](../../../images/research/bamin_mobile_nav.png)

##### My Code
```html
	<div class="gnb_wrap">
		<ul class="gnb_list">
			<li><a href="#">로그인</a></li>
			<li><a href="#">회원가입</a></li>
			<li><a href="#">고객센터</a></li>
		</ul>
	</div><!-- gnb_wrap -->
```

##### Present Code
```html
<div class="gnb-wrap">
	<span class="navigation" onclick="toggleLayer('gnb','navigation');return false;">네비게이션</span>
	<ul class="list-inline gnb">
		<li><a href="javascript:;" onclick="openLayer('gnb-mem');return false;">로그인</a> <em>|</em></li>
		<li><a href="https://www.baemin.com/member/signup">회원가입</a> <em>|</em></li>
		<li><a href="http://www.baemin.com/service/faq">고객센터</a></li>
	</ul>
</div>
```
##### 코드 분석 
###### HTML
- 전체를 컨트롤 하기 위해 `<div>`요소로 감싸고 class name은 gnb-wrap(global navigation bar + wrap)을 사용한다.
- 단순한 `|` 모양을 `<em>`으로 처리한 것은 의미상 옳지 않은게 아닌가 싶다. 나라면 css에서`border-right`로 처리 할 것 같다.

###### CSS
- .gnb-wrap
	- 위치를 `position:absolute`로 설정하고 숨겨놓은 네비게이션은 `overflow: hidden` 처리를 하였다. 
- .navigation
	- sprite-image로 처리하여 `active` 했을 때와 안했을 때의 차이를 `background-positioin`으로 설정하였다.
	- `text-indent: -9999px`을 사용하여 접근성을 지킨 것 같다.
	- 반응형에 따라 `font-size`를 달리 하였다.
- li
	- 나는 `float: left`로 처리 했었는데 여기서는 `display: block;`을 주었다. 


##### 놓쳤던 부분
- pc화면에서는 텍스트로 `gnb`를 만들고 숨겨진 반응형 웹에 따라 모바일에서는 숨겨놓은 아이콘`<span>네비게이션</span>`을 사용한다.

----
### Case02. [Naver](http://www.naver.com/)

##### My Code
```html

```
##### Present Code
```html

```

##### 코드 분석 
###### HTML

###### CSS

##### 놓쳤던 부분


### 좀 더 탐구 해야 할 부분
- `float: left`와 `display: inline-block` 중 어떤 처리가 더 적합한지 테스트 해봐야 되겠다.
- 접근성 관점에서 전체 목록에 대한 제목을 스크린리더로 읽어줘야 할까? 고민 해보자.

### 각 페이지마다 해당 기능을 어떻게 구성했는지 분석해보자.

##### 문제점은 무엇인가?
##### 내가 만들었다면 어떻게 했을 것 인가?