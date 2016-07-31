### CSS 선택자
- 전체 선택자(*) : HTML 내부의 모든 태그를 선택합니다.
- 아이디 선택자 : id 선택자는 중복 가능하다. 그렇지만 자바스크립트에서 문제가 발생하기 때문에 중복되지 않게 한다.
- 속성 선택자
- 1. E[attr~="val"] :  ‘attr’ 속성의 값에 ‘val’이 포함되는 요소를 선택합니다.
(공백으로 분리된 값이 일치해야 합니다.)
- 2. E[attr|="val"] : ‘attr’ 속성의 값이 정확하게 ‘val’ 이거나
‘val-’ 으로 시작되는 요소 E를 선택합니다.
- ex) input[type=text]

- 1. 선택자[속성~=값] : 속성 안의 값이 특정 값을 단어로 포함하는 태그 / ex. ko-KR
- 2. 선택자[속성|=값] : 속성 안의 값이 특정 값을 단어로 포함하는 태그 / ex. ko와 KR
- 3. 선택자[속성^=값] : 속성 안의 값이 특정 값으로 시작하는 태그
- 4. 선택자[속성$=값] : 속성 안의 값이 특정 값으로 끝나느 태그
- 5. 선택자[속성*=값] : 속성 안의 값이 특정 값을 포함하는 태그 

- 자식선택자 : div > p
- 후손선택자 : div p
- div>p , div p 의 차이
- div>p : 부모아래 자식만 선택 가능하고 / div p : 부모 아래 자식 후손 까지 선택 가능하다.

```html
<style>
  header h1 { color: red; }
</style>
</head>
<body>
  <header>
    <h1>자식</h1>
    <div>
      <h1>후손</h1>
    </div>
    <h1>자식</h1>
  </header>
</body>
```


##### `<table>`에서는 자식선택자를 사용하지 않는게 좋다. table > tr > th는 적용시 웹브라우저가 `<tbody>`를 추가 하므로 스타일 적용되지 않는다.

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

##### 형제 선택자, + , ~
- ie8 이하 에서는 지원 하지 않는다.

```html
  <style>
    /* h1 태그 바로 뒤에 위치하는 h2 태그를 선택. 하나만 color:red가 된다*/
    h1 + h2 { color: red; }

    /* h1 태그 뒤에 위치하는 h2 태그를 선택. 뒤에 위치하는 모든 color: blue; 된다 */
    h1 ~ h2 { color: blue; }
  </style>
```

##### 반응 선택자
- :active 마우스로 클릭한 태그를 선택
- :hover 마우스를 올린 태그를 선택

##### 링크 선택자
- :link href속성을 가지고 있는 a 태그를 선택
- :visited 방문했던 링크를 가지고 있는 a 태그를 선택 

##### 상태 선택자
- :checked 체크 상태의 input 태그를 선택
- :focus 초점이 맞추어진 input 태그를 선택
- :enabled 사용 가능한 input 태그를 선택
- :disabled 사용 불가능한 input 태그를 선택

##### 일반 구조 선택자
- :first-child 형제 관계 중에서 첫번째에 위치하는 태그
- :last-child 형제 관계 중에서 마지막에 위치하는 태그
- :nth-child(수열) 형제 관계 중에서 앞에서 수열 번째에 태그
- :nth-last-child() 형제 관계 중에서 뒤에서 수열 번째에 태그를 선택
- ex. nth-child(2n) , nth-child(2n+1) 

##### 형제 구조 선택자
- :first-of-type 형제 관계 중에서 첫번째로 등장하는 특정 태그
- :last-of-type 형제 관계 중에서 마지막으로 등장하는 특정 태그
- :nth-of-type(수열) 형제 관계 중에서 앞에서 수열 번째로 등장하는 특정 태그
- : nth-last-of-type(수열) 형제 관계 중에서 뒤에서 수열 번째로 등장하는 특정 태그

[예시를 통한 적용 사례]()

##### data 속성 ( 사용자 지정 속성 )
- jquery UI에서 div태그에 data-role 속성을 사용하면 레이아웃을 자동으로 구성해준다.
- `<div data-role="header">`등으로 사용하며
- data-theme, data-page 등으로 사용됨.  


