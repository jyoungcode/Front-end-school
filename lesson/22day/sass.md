### SASS
- SASS는 CSS3의 노가다를 막아준다.
- 중첩 /  변수 / 믹스인(코드합치기) / 선택자 / 상속 등  막강한 기능
- [SASS](http://sass-lang.com/)
- LIBSASS는 node.js 기반 ( C 언어 엔진 )
- RUBY기반에서 벗어났다. 너무 느리다. window랑 잘 안맞는다. 한글 호환 등

#### framework
- susy
- compass

##### CSS3 Processor
웹 브라우저는 프로세서, pre-processing ( sass -> css로 컴파일 하는 과정을 뜻함 )

##### CLI
- node : npm
- ruby : gem

##### 기존 Ruby 기반 대신에 node.js 기반을 설치한다. 
- $ npm install node-sass --global ( global은 어디서나 설치라는 의미-전역)
- $ node-sass -v : 버전확인
- $ node-sass --help 

##### 파일변환
- # node-sass [Sass 파일 이름] [컴파일 될 CSS 파일 이름]
- $ node-sass sass/style.scss css/style.css

##### sass 관찰 ( 자동 컴파일링 )
- node-sass [options] <input> [output] cat <input> | node-sass > output

##### 주의사항
###### sass
- 속성: 콜론 다음 띄어쓰기 반드시 해줘야 한다. 
- tab, space bar 중 에 규칙을 정해서 써야 한다. 안그러면 컴파일이 이상하게 된다.
- nested  
( 속성 ) {
	...  } 이렇게 감싸여진 형태.

###### scss 
- 콜론 다음 띄어쓰기 안해도 됨.
- sass scss 상관없음 호환 가능해서
- sass 권장


###### html 대신 jade 사용 가능

##### 설치
- syntax에서 ruby hamel 이면 안되서 
- pallete에서 sass, scss 설치 , syntax 변경
- [css -> sass 로 변환 ](css2scss.herokuapp.com)
- subl
[선생님 동영상](https://vimeo.com/91276962)
[외국사이트](https://scotch.io/tutorials/open-sublime-text-from-the-command-line-using-subl-exe-windows)
[shareslide](http://www.slideshare.net/jeehoon)
[sass 관련 ](https://github.com/yamoo9/the-jey)

###### sass 방식
- --output-style             CSS 출력 스타일 설정 (nested | expanded | compact | compressed)
( 기본값 | 보기 좋은 방식 | 한줄로 | 압축 방식 )
- 실제 개발 나중에는 compressed를 쓴다.

###### google developer tools
- setting>preference>source > sourcemap 부분 체크 
-  node-sass -w sass/ -o css/ --output-style expanded --source-comments

###### lg styleguide

###### sass 문법
- 주석 : // , /* (그냥 하나다.), /* */ 이것도 가능, 
/*
 */ (안으로 한칸 들어와야 함.)

###### scss vs sass
- scss 사람들이 많이 씀 이유는?
- 뭔가 정의 및 suzy 쓸때 scss 쓰고
- 평소 sass 쓴다 선생님은.

###### nesting parent selector
- 중첩규칙 ( 계층 구조가 4개 이상은 어렵다.)

###### 선택자 앞에 붙이는거 
firefox 붙이면 그 클래스를 js로 처리해서 

###### selector inheritance ( 대체 선택자 )
- @extend, %
- css에서는 출력 안됨

```css
	%reset-mp { margin: 0; padding: 0;}
	#app { @extend %reset-mp; }
	#design { @extend %reset-mp; }
```

##### 플레이스 홀더 스니펫

##### OOCSS + SASS 

#### CSS 컴파일 안되게 하는 파일 명
-  _common.css 앞에 _를 붙인다. (모듈할것)

#####  호출 ( import on steroids)
- css 뿐만 아니라 @import를 사용
- @import normalize.css
- @import part/config
- @import part/pages/page
-  이렇게 하면 sass 에서 normalize.css 는
- css 파일로 인식해서 넘어가고 두번째 부터
- 확장자가 css가 아니니 병합을 한다.
- 원래 sass 기능으로

##### sass 폴더 관리 법
- helper : 
- setting : 변수 등 설정. 
- ( _px .. ' _ '를 통해서 들어나지 않는다. )