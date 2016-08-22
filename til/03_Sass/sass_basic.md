# Sass Basic 

### 부모 참조 선택자 (&)

```css

// 가상클래스, 가상 요소로 많이 사용한다.

	#page a
		color: #069aea
		&:hover
			color: #023755


// &를 앞에 붙이면 & 뒤로 참조 된 선택자가 자식이 된다.
// css : .rgba #page a 

	#page a
		.rgba &
			color: rgba(6, 144, 233, 0.7)
}
```

### import
- 하나의 main sass 파일을 만든다.
- 나머지 모듈은 '_exam.sass' 같이 언더바를 붙여서 css로 컴파일되지 않게 한다.
- main sass 파일에 '_'로 시작하는 모듈 파일을 import 시킨다.

```css
	@charset "utf-8"

	// sass 주석
	@import "parts/comments"
	// sass 대체 선택자
	@import "parts/placeholderSelector"
```

### 변수 활용 

```css
// 폰트
	$gothic: "Nanum Gothic", Dotum, sans-serif
	$myungjo: "Nanum Myungjo", Gulim, serif

// 색상
	$fg-color: #382f1f
	$bg-color: #fefcf5
```