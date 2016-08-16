# Jquery

### JS에서 jquery 이용

```css
var $h1 = jQuery('h1');
$h1.text('내용 변경');
```

### tip
- jquery 1.xx 버전은 ie8을 지원하는데 대신 씨찔이라고 하는 엔진이 무겁다.
그래서 2, 3 버전을 쓰자 .

- jquery는 문자 하나 하나 쪼개고 나서 찾기 때문에 느리다.


### 자주 쓰는 method
- css()
- addClass()
- removeClass()
- hasClass()
- toggleClass()
- attr()
- prop()
- show()
- hide()
- toggle()
- width : content-box 까지  
- height: content-box 까지 
- innerWidth, innerHeight : padding-box 까지 
- outerWidth, outerHeight : border-box 
- outerWidth(true), outerHeight(true) : margin-box
