### nav 작성 tip

##### nav > ul > li > a 에서 a를 어떻게 처리해야 하는가?

```html
	#main_gnb > ul { <!-- overflow: hidden 보다 clearfix --> }
	#main_gnb > ul > li{ float: left}
	#main_gnb > ul > li > a {
		display: block;
		padding: 10px 20px
	}
```
- 우리는 버튼 하나의 영역을 클릭 하기를 원한다.
- a는 inline 속성이므로 텍스트 크기만큼만 지정 되어있다.
- a를 block 요소로 바꾸고 padding으로 여백을 버튼 하나 크기 만큼 늘려줘야 한다.

### ul 에는 기본적으로 margin, padding이 존재한다.
- margin-top: 16px, margin-bottom: 16px
- padding-left: 40px; 

### header를 만들때  자식, 자손의 중앙 위치 지정
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