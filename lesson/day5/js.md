<param> ???
모든지 표준에 있다고 다 잘쓰는건 아니다.
<object> 그림을 문서 내 호출 가능한데
안쓴다. flash 불러오느라 object 썼었다.
이제 flash 안쓰니 필요 없다.

embed=익스플로러
object= 크롬 사파리 파이어폭스
지금은 둘다 표준이나 flash 안쓰니 안씀

png 파일이 익스플로러 7부터 가능하다
익스플로러6은 gif로 처리

-
<blockquote>
  <cite>-long 인용
<q> - short 인용 (거의 안씀)?

축약
abbrevoatopm -abbr - 넷스케이프 만듬 (ie7부터)
acronym(이제안씀) - ms에서 만듬. 경쟁 사전 찾아보기
그냥 abbr 쓰자 - 표준

address - 많이 안씀. 웹 상에 연결될 경로만 말함
address 안에 p태그, div 쓰면 안됨
address 안에 주소 쓰고 a로 메일주소쓰고 한다
전화번호 쓰고

a href="mailto:aaa@gmail.com"> 하면 메일 연결

-
insert text - ins
delete text - del
preserved text- presercomputer code text - keyboard text - keyboardvariable - var
teletype text - tt
definition term - def
definitionsample computer code - code

-
### frame 왜 쓸 수 밖에 없었는가?
ajax가 없었다.
메뉴 사이드바 빼고 컨텐츠만 frame으로 교체 방식 이었다.
지금은 ajax로 구현.

### iframe
iframe은 css로 속성 처리 가능

### 마크업 정답없다. 목록이 많이 쓰임

###
W3C
WHATWG - 사파리,파폭,오페라 모였다가 구글합류 해서 W3C 빼고 만들었다. 2008
XHTML 2.0 2009년 포기 (팀버너스리)
HTML5 = HTML(new element)+Javascript API
시멘틱웹, canvas  / 사용자위치정보활용 클라이언트 데이터저장, 오프라인 웹 구현.

HTML5 = 플러그인 (Active x ) 사용 안해도 된다 그래서 좋다.
XHTML 이제 안써도 된다.
제레미키스 - html5 책

-
### HTML5 뭐가 다른가?
HTML5 MIME 기본값 지원
meta property:og:title
meta name=twitter:card 이걸 적어야 페북,트위터에서 보이는거를 말한다.

섹션요소 : section, article, aside, nav, main  
header, footer는 매번 넣지 않는다.
embed 표준됐다 (object 비교)
apple 사이트 접근성은 안좋지만 프론트기술이 총체적이다.

개발자도구 접근성 accessbility 정리

-
header , nav, article>section , sidebar

-
css-tricks
- https://css-tricks.com/snippets/css/style-placeholder-text/
적용 가능

-
block / inline element 구분
블록은 width height 설정가능
인라인은 안된다.
하지만 inline-block은 가능

-
css
91년 html 초안
<font>,<center>,bgcolor, align 등
96년 css 1.0
98년 css 2.0
04년 css 2.1 revisions (파이어폭스,사파리+표준안 차세대브라우저)
07년도 css 2.1 complete
2010 HTML5 등장 (표준 전)
2011 CSS 3.0

-
web은 기본 16px
1em = 16px
2em = 32px

-
파이어폭스 quick java 툴 이용

#### CSS 선택자
h2 > article h2 > inline 스타일
