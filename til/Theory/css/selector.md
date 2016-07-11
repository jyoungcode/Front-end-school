### CSS 선택자
- 전체 선택자(*) :
- 아이디 선택자 : id 선택자는 중복 가능하다. 그렇지만 자바스크립트에서 문제가 발생하기 때문에 중복되지 않게 한다.
- 속성 선택자
- 1. E[attr~="val"] :  ‘attr’ 속성의 값에 ‘val’이 포함되는 요소를 선택합니다.
(공백으로 분리된 값이 일치해야 합니다.)
- 2. E[attr|="val"] : ‘attr’ 속성의 값이 정확하게 ‘val’ 이거나
‘val-’ 으로 시작되는 요소 E를 선택합니다.

- 자식선택자 : div > p
- 후손선택자 : div p

-

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <style>
    /* table은 내부적으로 웹브라우저가 자동으로 tbody를 생성하기 때문에 blue 적용 X
    table > tbody > tr > th { color: red; }
    table > tr > th { color: blue; }
  </style>
</head>
<body>
  <table border="1">
    <tr>
      <th>title</th>
      <th>title</th>
    </tr>
    <tr>
      <td>contents</td>
      <td>contents</td>
    </tr>
  </table>
</body>
</html>
```
