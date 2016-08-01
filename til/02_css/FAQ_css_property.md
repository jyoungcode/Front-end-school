### 자주 사용하는 CSS Property
- border-radius: 왼쪽위 오른쪽위 오른쪽아래 왼쪽아래
(border-radius: 50px 40px 20px 10px)

#### background
###### background-image 
- url, linear-gradient, radial-gradient

###### background-size
- IE8 이하는 지원 안한다.

- 두개의 image를 100% 크기, 250% 높이 값을 줄때.

```css
	body {
		background-image: url('front.png'), url('back.png')
		background-size: 100% 250px;
}
```

- 두개의 image를 첫번째 100%, 두번째 200% 크기로 나타낼때. ( , 로 구분 )

```css
	body {
		background-image: url('front.png'), url('back.png')
		background-size: 100%, 200%;
}
```

- contain : width를 100% 적용한 것과 같은 효과
- cover: height를 100% 적용한 것과 같은 효과

###### background-attachment
- 배경 이미지를 어떠한 방식으로 화면에 붙일 것인지 지정
- scroll : 기본값 스크롤에 따라 이동한다.
- fixed : 배경 이미지 고정 

###### background-position
- sprite images 사용시 많이 적용시킨다.
- center, top, left, right, bottom, inherit, initial
- x축 크기 
- x축 크기 , y축 크기 

###### 속기형
- bg-image / position / size / repeat / attachment / bg-color 
- ex)
`backgroud: url('bg.png') center / 100% no-repeat fixed, url('bg2.png') bottom / 100% no-repeat fixed #E7E7E8;

#### font
- font-family: 한단어는 따옴표 없이 가능, 두 단어는 따옴표 있어야 한다. 
`font-family: 'Arial', 'sans-serif'` 
ie에서는 sans-serif에 ' '를 사용하면 안된다.

#### line-height
- CSS에 block요소를 수직 정렬 하는 방법 중 하나로 line-height로 대체 가능.

```css
	.btn {
		width: 150px;
		height: 70px;
	}
	.btn > a {
		display: block;
		line-height: 70px;
	}
```

#### text-align

text-align (속성)
- 부모(block요소)에 text-align:center를 하면 자식(inline)이 상속받아서 적용된다.
- inline요소 단독적용은 X 안된다. (inline요소는 너비가 존재하지 않기 때문에)
- block요소 단독적용 O, 부모자식 구조에 부모적용도 O  
= block요소 안에 텍스트컨텐트 자체가 기본적으로 inline 속성이라서 단독 그리고 부모자식구조도 적용이 O 된다.

#### text-shadow / box-shadow
- text-shadow: 오른쪽 아래 흐름도 색상 (px로 표현 가능)
- box-shadow : 오른쪽 아래 흐름도 (inset) 색상 (inset은 안쪽 그림자 경우만)
- 중첩 그림자
ex) box-shadow : 10px 10px 10px black, 10px 10px 20px red 
- filter 속성은 IE8 이하 에서만 필요하다.
[CSS3 Generator](http://css3generator.com/) 

#### Vendor Prefix 
- 벤더 프리픽스 사용 안해도 되게 만들어주는 라이브러리
[Prefix Free](https://leaverou.github.io/prefixfree/)

```html
	<link rel="stylesheet" href="StyleSheet.css" />
	<script src="prefixfree.min.js"></script>
```

#### Gradient
- [Gradient Generator](http://www.colorzilla.com/gradient-editor/)
- linear-gradient(각도, 색상 %, 색상 %)


#### web font
- 웹 브라우저는 사용자의 컴퓨터에 설치된 폰트만 사용가능.
이때 웹폰트 사용.
- IE8 이하 에서는 웹폰트 적용 x. 서버에서 실행해야 가능하다.

#### 글자 생략 기법 

p {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}