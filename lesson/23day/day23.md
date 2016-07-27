
#### $ node-sasss sass/ -wo css/ --output-style expanded --source-map map


##### 직접 나만의 라이브러리를 만들자. (포폴)
[라이브러리 예제 사이트](http://bourbon.io/docs/#linear-gradient)

##### SASS를 통해 스타일 모듈 관리 
- 각각의 역할을 분리하여 필요에 따라 재사용할 수 있도록 모듈 관리
- ex. 라이브러리 : reset, config, sprites, mixins 
- ex.  타이포그래피 : typeStyle, typeLayout 등... 

##### @import
- @import "teamwork.scss" -> "teamwork"로 확장자 생략가능 (css 확장자 반드시있어야함)
- @import "team-works", "team-activity" -> ,로 여러개를 한줄로 불러오기 가능.
- @import var, mixins 오류남!!!!
(해외경우 여러줄 권장하지않는다! 그냥 여러줄로 쓰자!)

[reference](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import)
- 구글 웹폰트도 변수로 선언하여 변수값만 바꿔서 쉽게 이용 할 수 있다.
- css해석시에 @import는 주석이 위에 있어도 주석이 아래 존재하는 것처럼 존재하게 된다.
- .demo 
	@import box 
	이렇게 만들 수 있다.
- nested: 안에 중첩으로 쓰는것: .button{} / expanded 집합체 확장: .part_A .button{} 

#### import 예제
.buldack {
	$space: null;
	width: 55%;
	@import "button";
}

.buldack .button {
  padding: 10px;
  border: none;
  background: #efefef;
}

#article-container
	header
		height: $space * 10
		@extend .button

.button, #article-container header {
  padding: 10px;
  border: none;
  background: #efefef;
}
#article-container header {
  height: 100px;
}
=> @extend는 .button, #article-container header (button을 끌어 올린다.)
=> @import는 .buldack .button을 넣는다. 이 차이다.

-----------------------------------------------------
### script
- 변수는 $를 사용한다.
-  $set-width: 90px; #doc { width: $set-width } 

#### !global 지역변수 -> 전역변수로 바꾸는 법.

```css
	#main { $width: 5em !global; width: $width; }
	#sidebar { width: $width;}

	!global 을 통해서 지역변수를 전역변수처럼 사용 할 수 있다.
	is complied
	#main {
		width: 5em;
	}
	#sidebar { 
		width: 5em;
	}
```

### RWD, SASS 변수 + MQ 활용 ( SASS 3.2 +)
- 반응형 웹 디자인에서 Sass 변수와 css3 미디어쿼리 조합은 매우 유용

### 변수 기본값 설정 !default 사용 가능
변수들 설정후 초기값을 지정 가능
- reference 찾아보기
- !default값이 아닌 값이 적용됨.
- 외부 파일에 null 그리고 내가 10px !default면 10px이 우선이다.( null은 예외 )

### Data Type
- Null : null
- Number : 15, 15px
- String & Color : Verdana, 
- Boolean (true/false, yes/no)
- list ( = js: array ) .con, .text 등 ,로 구분되는것 
- map ( = js: object)

- cli 
- ruby 안깔려 있으면 sass 에서 @debug type-of(9)
확인가능  
