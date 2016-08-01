### 기본적인 모바일 layout tip

- 1. 배경 이미지 설정

```html
	#main_header {
		..
		/* 1px 이미지를 이용해서 background의 기본 값인 repeat을 활용하여 배경 이미지를 넣는다. */
		background: url('bg.png');
	}
```

- 2. position 자식에는 absolute가 있다면 부모는 relative를 적용한다. 

- 3. 해당 고정 아이콘의 경우는 sprite 이미지를 넣고 
`backgroud: url('sprite.png');`
`background-position`으로 이미지 좌표값을 적용한다.

- 4. ul > li 목록 태그 대신에 div와 display: table, table-cell로 대신 할 수 있다.

##### 5. 부모에게 상속 받는 속성들
- 굳이 자식에게 적용시켜서 셀렉터를 추가하지 말자!
- style 부분 (color, background 등 )
- padding 

```html
	<style>
		#main_header {
			height: 60px;
			line-height: 60px;
			background: #1d4088;
			color: #fff;
	}
	</style>
	<body>
		div#main_header>h1{Fluid}
	</body>
```

##### 6. IE7 버전의 width 버그
- IE7은 두 태그를 합친 너비가 100%일 경우 버그가 생긴다. html5 shiv 플러그인 사용 html5 태그 인식하게 한다.

```html
	#wrap > #content_wrap {
		float: left;
		width: 100%;
		*width: 99.9%;
		margin-right: -200px;
	}
```
