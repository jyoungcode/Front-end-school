
[Reference](http://sass-lang.com/documentation/Sass/Script/Functions.html#lists)

### operations 연산자
- +, =, * ,/ , %, ==, !=, >, <, >=, <=

#### Sass 에서 연산
- 10px * 10px = 100px*px
- 10px * 10 = 100px
- 10px(1px) = 10

#### 
- font 속기형 필수는 font-family, font-size

#### interpolation 보간법
- mixin 떄문에 배운다?!
 - `font: #{$base-font-size}/#{$base-line-height}` 
 ( #{}/#{})인터폴레이션이 두개여야지만 '/'가 나누기로 인식 안한다. 한쪽만 하면 나누기가 된다. )
 - (인터폴레이션 보간법) => 문자를 집합( 용접과 비슷 )
문자열 안에서 #{} 통해서 값을 넣어줄 수 있다.
이렇게 하면 url 함수 내에서 인터폴레이션 적용이 된다. 
- window에서 sass파일에 #을 쓰면
(Invaild utf-8 오류가 생긴다. gulp를 쓰면 상관없지만 
맥에서는 오류가 없고 윈도우에서만 오류가 생긴다.)

#### 비교 연산
- #000 != black  ( false ) , #000 = black ( true )

#### node-sass 에서 디버깅하는법
- @debug 1<4 하고 git bash에서 확인하자
- ex. 
@debug 디렉티브(지시자)를 사용하면 명령 창에 디버그 결과를 출력한다. 
@debug type-of(red) // color 

#### 문자연산( string operations )
- 문자와 문자를 접합하려는 경우 +연산자를 사용

##### media print 경우
```css
@media #{$media-print}
	background: #fff !important
	color: #000 !important
```

- !important 일반적으로 쓰는걸 지양하지만 print 경우 잉크 낭비 방지를 위해 
(글자 검은색, 배경 흰색으로 하는걸 권장한다.)

#### 컬러연산
- color: #010203 + #020305 = #030508 

#### 기타 연산
- boolean : and or not 
- list : length($list), nth-child
( css는 1부터 시작. indexing 갑 빼올때 , js는 0부터 )


### Mixins 완전중요~!!
- @mixin 모듈을 정의
- @include 로 호출
- 재사용 가능
- 원래 @include 쓰는데
( %(placeholder)를 쓸때는 @extend (선택자 상속 묶임)을 사용한다.)

- @extend로 하면 코드가 줄어서 더 효율적이나 디버깅 작업시에 보기가 불편하다.
하지만 회사 동료들이 모두 sass를 잘쓰면 그래도 쓸만하다.
(@include가 코드가 길어져서 해외에서는 효율적인 @extend를 많이 쓴다.)

- 그러나 mixin이 후져 보이지만 확장성은 mixin이 좋다?!
[@mixin VS @extend](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)

### 전달인자 (arguments)
- js 함수 확장 처럼 @mixin으로 정의된 모듈에 인자를 전달하여 믹스인을 확장.

### 멀티전달인자 유지보수 문제 (maintence)

### scss 파일에 @mixin을 쓰는 이유
- @mixin size(
	$w1
	$w2
){} 이런식으로 가능하다. 
sass 여러줄 parameter가 안된다.

### 변수범위(scope)와 콘텐츠블록(@content)

### 정리
- @mixin @include 방식 vs =demo +demo 방식 중에 sass 방식이 편하다.(후자)

### 믹스인(Mixin, 외부에서 전달받은 인자 또는 콘텐츠를 병합해서 코드 덩어리를 출력한다)

#### 믹스인 정의
- 직관적으로 정의 가능 

#### 정적 믹스인 호출
- @include 믹스인이름

#### 정적 믹스인
- @mixin 믹스인이름 {}

#### 동적믹스인
- @mixin 믹스인이름(매개변수1, 매개변수2) {}

#### 동적믹스인 호출
- @include 믹스인이름(전달인자1, 전달인자2)

#### 매개변수 기본 값 설정
- @mixin 믹스인이름(매개변수1: 기본값1, 매개변수2: 기본값2){}

#### 매개변수 확장
- @mixin 믹스인이름(매개변수1, 매개변수2, 매개변수3, 매개변수4) {}

#### 가변 매개변수 (args, variable)
- @mixin 믹스인이름(매개변수...) {}

#### 콘텐츠 블록 @content
- @mixin 믹스인이름(매개변수...) {
	@content
}

#### 외부 믹스인 호출 시 콘텐츠 블록 코드 전달
- @include 믹스인이름 {
	믹스인 내부로 전달할콘텐츠 블록 (코드덩어리)
}

