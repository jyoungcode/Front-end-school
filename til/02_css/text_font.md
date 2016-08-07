# font & text

### font 속기형 작성법
- font: style weight size/line-height family 
- font-weight는 영문 글꼴에만 적용된다.
- font-size와 font-family는 반드시 지정한다.
- font-size/line-height는 '/'를 사용하여 적용한다.
- font-family: 한단어는 따옴표 없이 가능, 두 단어는 따옴표 있어야 한다. 
`font-family: 'Arial', 'sans-serif'` 
ie에서는 sans-serif에 ' '를 사용하면 안된다.

### line-height
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

### @font-face
- CSS3 웹폰트테크닉
- 글꼴이 설치되지 않은 시스템에서도 글꼴이 보이도록 만든다.

### 스마트폰 처럼 작은 기계에서 글자가 잘릴 경우

- `text-overflow: ellipsis;` 를 통해 줄임말 표시가 가능하다.
 
```html
	.ellipsis {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
```	

### text-align

text-align (속성)
- 부모(block요소)에 text-align:center를 하면 자식(inline)이 상속받아서 적용된다.
- inline요소 단독적용은 X 안된다. (inline요소는 너비가 존재하지 않기 때문에)
- block요소 단독적용 O, 부모자식 구조에 부모적용도 O  
= block요소 안에 텍스트컨텐트 자체가 기본적으로 inline 속성이라서 단독 그리고 부모자식구조도 적용이 O 된다.

### text-shadow / box-shadow
- text-shadow: 오른쪽 아래 흐름도 색상 (px로 표현 가능)
- box-shadow : 오른쪽 아래 흐름도 (inset) 색상 (inset은 안쪽 그림자 경우만)
- 중첩 그림자
ex) box-shadow : 10px 10px 10px black, 10px 10px 20px red 
- filter 속성은 IE8 이하 에서만 필요하다.
[CSS3 Generator](http://css3generator.com/) 

### web font
- 웹 브라우저는 사용자의 컴퓨터에 설치된 폰트만 사용가능.
이때 웹폰트 사용.
- IE8 이하 에서는 웹폰트 적용 x. 서버에서 실행해야 가능하다.

### 글자 생략 기법 

p {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}