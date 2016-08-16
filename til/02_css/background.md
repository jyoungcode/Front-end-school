### background

- `background: color image repeat position attachment`

### background-image 
- url, linear-gradient, radial-gradient

### background-size
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

- contain : width를 100% 적용한 것과 같은 효과 ( 요소에 width 크기에 기준이 되어 맞춰진다. )
- cover: height를 100% 적용한 것과 같은 효과 ( 요소에 height 크기에 기준이 되어 맞춰진다. )

### background-attachment
- 배경 이미지를 어떠한 방식으로 화면에 붙일 것인지 지정
- scroll : 기본값 스크롤에 따라 이동한다.
- fixed : 배경 이미지 고정 

### background-position
- sprite images 사용시 많이 적용시킨다.
- center, top, left, right, bottom, inherit, initial
- x축 크기 
- x축 크기 , y축 크기 

### 속기형
- bg-image / position / size / repeat / attachment / bg-color 
- ex)
`backgroud: url('bg.png') center / 100% no-repeat fixed, url('bg2.png') bottom / 100% no-repeat fixed #E7E7E8;

### Gradient
- [Gradient Generator](http://www.colorzilla.com/gradient-editor/)
- linear-gradient(각도, 색상 %, 색상 %)

### background-origin
- border-box : border라인에 기준이 된다.
- content-box : content영역에 기준이됨.
- padding-box : 파이어폭스만 적용된다. padding에 맞춰진다.