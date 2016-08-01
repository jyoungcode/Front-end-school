### 초기화 CSS reset.css
[Eric Meyer's Reset CSS](http://meyerweb.com/eric/tools/css/reset/)
[HTML5 Doctor Reset stylesheet](http://html5doctor.com/html-5-reset-stylesheet/)
[YUI 3 CSS Reset](https://developer.yahoo.com/yui/3/cssreset/)

### 5가지를 비교 분석 해보자.
eric이 2011년 1월 26일
doctor가 2010년 9월 17일 


##### Eric
applet
acronym
s 
strike
tt
u
center
embed
output
ruby
등 잘 쓰여지지 않는 element들 까지 모두 초기화 하였다.

eric에서는 font: inherit 
doctor에서는 outline: 0; background: transparent를 하였다.
이게 어떤 영향을 줄 것인가..?
나머지 속성은 동일하다.

##### Doctor
eric 에서는 ol,ul에 list-style: none을 하였다.
doctor에서는 nav ul에 list-style: none 으로 보아 우리는 nav의 자식으로 ul을 꼭 쓸거라는 표준?을 지켜야 하는 것을 암시하나 싶다.

eric 과 다르게 doctor는 
a 요소(element)를 따로 빼서 outline을 적용시키지 않았다.

그리고 /* change colours to suit your needs */
문구와 함께 필요에 의해서만 적용시킬 것들을 추가하였다.

--미완성--
abbr[title]. dfn[title]은 무엇을 의미하는가?
del에 적용한것?
hr에 왜 저렇게 적용했는가?
input, select에 vertical-align: middle이 주는 영향?
