텍스트 언어 인코딩을 [**UTF-8**](https://ko.wikipedia.org/wiki/UTF-8)로 설정하여 모든 유니코드 문자를 표현할 수 있도록 설정하고, **깨지는 한글 문제를 해결**한다.

> ※ [`http-equiv`](https://www.w3.org/TR/html5/document-metadata.html#attr-meta-http-equiv) 속성을 사용하면 `<meta>` 요소에서 정의된 명령(사항)을 먼저 실행한 후에 페이지를 로딩한다. 이를 **프라그마 디렉티브(Pragma Directive)**라고 한다. (`equiv`는 **equivalent**의 약자)

```html
<html>
  <head>
    <!-- HTML5 이전에 사용되던 코드 -->
    <!-- <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"> -->
    <!-- HTML5에서는 아래와 같이 단축된 코드를 사용한다. -->
    <meta charset="UTF-8">
    <title>웹 문서의 제목</title>
  </head>
  <body></body>
</html>
```

-

문서 유형 정의(DTD, Document Type Definition)를 문서 최상단에 입력하여 웹 브라우저에게 현재 문서가 웹 표준 문서임을 알린다. (표준 모드로 동작)

> ※ [비표준 모드(Quirk Mode) vs 표준 모드(Standard Mode)](http://naradesign.net/wp/2007/03/27/118/)


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>웹 문서의 제목</title>
  </head>
  <body></body>
</html>
```

> ※ [DTD 위에 주석이 올 경우 발생하는 문제점](http://f10024.tistory.com/1)

> [IE renders my page in Quirks mode](http://stackoverflow.com/questions/18517290/ie-renders-my-page-in-quirks-mode?rq=1) 글을 참고해 읽어보면 DTD 위에 코드 또는 주석이 존재할 경우 올바르지 않은 DTD로 간주하여 웹 브라우저는 비표준 모드로 동작하게 됨을 알 수 있다. 고로 DTD 위에는 어떤 텍스트, 주석, 코드 등을 사용하지 않는 것이 좋다.

> ```php
> <?php require'core/init.php';?>
> <?php include_once 'include/IE8Etc.php';?>
> <!DOCTYPE html>
> <meta http-equiv="X-UA-Compatible" content="IE=Edge">
> <html>
> <head>
> <meta charset="UTF-8">
> <title>Title</title>
> ```

-

> ※ 문서가 표준모드로 렌더링되는지 확인하는 방법 [#](https://developer.mozilla.org/ko/docs/Web/API/Document/compatMode)

> ```js
> document.compatMode
> ```

> - 표준 모드일 경우, `CSS1Compat`를 출력
> - 비표준 모드일 경우, `BackCompat`를 출력

-

### form
  ```html
  <form action="">
    <label for="name">이름</label>
    <input type="radio" id="name">
  </form>
  ```
의 경우 `label`(이름)을 클릭하면 input에 체크가 된다.

### select mutiple
- 스마트 폰에서 다중 선택이 가능하다.
- 보통 select를 잘 사용하지 않아서 div와 js를 사용한다.

```html
  <select multiple="multiple">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
  </select>
```

#### semantic web
- 의미론적 웹
- 의미 있는 정보를 컴퓨터가 처리 할 수 있는 온톨리지 형태로 표현, 자동화(컴퓨터)된 기계가 처리 하도록 하는 프레임 워크
(온톨리지: 컴퓨터에서 다룰 수 있는 형태로 표현한 모델, 개념의 타입이나 사용상의 제약조건들을 명시적으로 정의한 기술)


#### 16진수 색상 표현
- 16진수를 사용 색표현 = 00 ~ FF까지의 숫자.
- 16진수 F는 10진수에서 16을 나타내므로 16 x 16 = 256 이다.
- RGB 단위 보다 HEX 코드 단위가 미세하게 용량이 작다.

