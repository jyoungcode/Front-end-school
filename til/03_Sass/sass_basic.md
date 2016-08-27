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


< Q & A >

1. lt-ie8 & 중간에 주석

2. !optional 용도
코드가 길어지니 
그냥 모듈을 안쓰는대신 문법오류 안나고 정의 되어 있지 않은 선택자를 사용할때 

3. _ 붙으면 내부에서만 사용하는 파일.
선택자에서 _는 
js에서 지역함수_variation과 같은 의미에서 가져왔다.
명시적으로 지역에서만 쓰겠다는 의미.

4. scss sass 다 호환 된다.
= sass 파일에서 scss 파일 여러개를 가져올때 @import로 불러 올 수 있으며 호환이 가능하다는 걸 의미.

5 스타일가이드에서
모듈단위에서 개발자들이 많이 쓰는 이름이 있는데 
이를 지키는게 중요할 듯하다.
또는 팀에서 정하는거 
어느걸 쓰는게 좋을까?

6. em 과 strong의 적절한 적용이란? 
