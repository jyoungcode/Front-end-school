### block / inline 의 특징 

##### block ( block level element )
- 별도의 스타일 설정을 하지 않았다면, 부모 요소 영역만큼 가로 크기(width)가 커진다. (기본 값: auto)
- 요소의 높이(height)는 부모와 상관없이 요소가 포함하는 자식 요소들의 크기에 좌우된다.
- 별도로 가로 (width), 세로(height) 크기 설정이 가능하다.
- 블록 요소는 내부에 인라인 요소를 감쌀 수 있다.

##### inline
- 자신을 포함한 부모 요소 영역과 상관 없이 자신이 포함하는 자식 요소 또는 텍스트 만큼(width), 세로(height)크기를 가진다.
- 별도로 가로 (width), 세로(height) 크기 설정이 불가능하다.
- margin, padding 속성의 상(top), 하(bottom) 설정이 불가능하다.
- 인라인 요소는 내부에 블록 요소를 감쌀 수 없다. 
- 단! 예외사항: `<a>`요소는 블록 요소를 감쌀 수 있다. HTML5에서 부터 바뀌었다.
- HTML4와 달리 `<a>` 내부에 `<h1~h6>`, `<ul,ol>`, `<p>` 등 block요소를 넣을 수 있게 되었다.
- `<a>` 내부에 `<button>`, `<a>` 등 클릭 가능한 요소는 있으면 안된다.

##### inline, inline-block 차이
- inline

```html
	<style>
		#box { 
			display: inline;
			background-color: red;
			margin: 10px;

			/*width, height 적용 안됨 */
			width: 300px; 
			height: 50px; 
		 }
	</style>
```

- inline-block

```html
	<style>
		#box {
			display: inline-block;
			background-color: red;
			margin: 10px;

			width: 300px;
			height: 50px;
		}
	</style>
```

### display: none / visibility: hidden 차이
- display: none은 요소가 화면에서 제거 되지만
visibility: hidden은 화면에서만 보이지 않을 뿐이다.
대신 영역은 그대로 가지고 있다.

```html
	<style>
	#box { width: 300px; height: 300px; background: blue; }
	#box { visibility: hidden; }
	#box { display: none; }
	</style>
	</head>
	<body>
		<p>display:none vs visibility: hidden</p>
		<div id="box">box</div>
		<p>모두사라지느냐 아니면 영역은 남기고 화면에서만 사라지느냐 차이</p>
	</body>
```

