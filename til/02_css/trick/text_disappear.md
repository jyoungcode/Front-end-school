# text를 처리 하는 기법.

|     | text-indent  | visibility: hidden | display: none| opacity: 0|
| :----------- | :------------: | :-----------: | :----------------: | --------------: |
|스크린리더 | O          | X         |  X          | O               |
| 적용 후 공간여부 | O     | O               | X               | O               |
| 적용 후 다른 속성적용여부  | O     | X               | X               | X               |
[Table caption, works as a reference][section-mmd-tables-table1]]


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