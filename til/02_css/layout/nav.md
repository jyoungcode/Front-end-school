# Navigation 작성 tip.
###### UI에 따른 여러가지 방법을 분석 해보자.

### 보편적으로 ul, li, a에 어떤 속성을 적용 시키는게 적합할까?
```css
	/* overflow: hidden 보다 clearfix */ 
	/* ul에 margin:0, padding:0로 초기화 시키는 별도 파일을 만들어두자. */
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
	- `margin-top: 16px;`, `margin-bottom: 16px;`
	- `padding-left: 40px;` 

### `header` 부분을 만들때  자식, 자손의 중앙 위치 지정
```html 
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

### 각 페이지마다 해당 기능을 어떻게 구성했는지 분석해보자.

##### 문제점은 무엇인가?
##### 내가 만들었다면 어떻게 했을 것 인가?