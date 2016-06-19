### HTML 구조화 (기초)

- **HTML 문서의 루트 요소(Root Element)**는 `<html>` 요소 뿐이다.
- 루트 요소 `<html>`은 `<head>`, `<body>` 단 2개의 자식 요소만 가질 수 있다.
- `<head>` 요소는 내부에 `<title>` 요소를 가지며, 그 값은 웹 브라우저 탭 패널 제목으로 표시된다.

```html
<html>
  <head>
    <title>웹 문서의 제목</title>
  </head>
  <body></body>
</html>
```

- **`<meta>` 는 해당 페이지에 대한 정보를 포함**한다.
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

텍스트 언어 인코딩을 [**UTF-8**](https://ko.wikipedia.org/wiki/UTF-8)로 설정하여 모든 유니코드 문자를 표현할 수 있도록 설정하고, **깨지는 한글 문제를 해결**한다.

> #### UTF-8 인코딩

> ##### 장점
  - UTF-8은 모든 유니코드 문자를 표현할 수 있다.
  - 바이트 표현의 첫 바이트만 사용하여 해당 바이트 표현의 길이를 결정할 수 있다. 따라서 부분 문자열을 얻는 과정이 매우 쉽다.
  - 인코딩에 간단한 비트 연산만 사용되므로 효과적이다. UTF-8은 곱셈이나 나눗셈과 같은 느린 연산들을 사용하지 않는다.

> ##### 단점
  - 대부분의 UTF-8 문자열은 일반적으로 적당한 기존 인코딩으로 표현한 문자열보다 더 크다. 판독 기호를 사용하는 대부분의 라틴 알파벳 문자는 적어도 2바이트를 사용하며, 한중일 문자들과 표의 문자들은 적어도 3바이트를 사용한다.
  - 한중일 문자들과 표의 문자를 제외한 거의 모든 기존 인코딩들은 한 문자에 1바이트를 사용하므로 문자열 처리가 간편한 반면, UTF-8은 그렇지 않다.
