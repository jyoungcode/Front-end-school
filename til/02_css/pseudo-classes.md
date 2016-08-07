# 가상클래스(유사클래스, pseudo-classes)
- 가상으로 클래스를 설정한 것 처럼 작동하는 클래스.

### 상태디자인 관련 클래스
- `:link` : `<a>`에 href 속성이 설정된 경우의 초기 상태. 기본값이다.
- `:visited`:방문 상태 식별. 
- `:hover` : 마우스 포인터를 올려놓은 상태 식별
- `:active` : 클릭한 상태를 식별
- `:focus` : 포커스된 상태를 식별(포커스요소 input, a, area 등)에 적용

### :nth-child, :nth-of-type 차이 
- body > *:first-child = body의 모든 자식 중 첫번째만 선택
- body > *:first-of-type = body의 자손 중 첫번째로 등장하는 모든 형태 태그 

### 일반, 형태 구조 선택자 간의 모든 경우의 수 비교 
- first-child, first-of-type 비교 

```html
  <head>
  <meta charset="UTF-8">
  <title>test</title>
    <style>
      .word:first-child{ color: red }
    </style>
  </head>
  <body>
    <div class="word">word</div>
    <div class="word">word</div>
    <div class="word">word</div>
  </body>
```
first-child : 요소들이 형제 관계이며 첫번째 word가 선택된다.
first-of-type: 요소들이 형제 관계 이며 첫번째로 등장하는 첫번째 word가 선택 된다.

```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <title>test</title>
    <style>
    .word:first-child{ color: red; }
    </style>
  </head>
  <body>
  <div class="word">h1
    <h2 class="child">
      <p>child</p>
      <p>child</p>
      <p>child</p>
    </h2>
  </div>
  <div class="word">word</div>
  <div class="word">word</div>
  </body>
  </html>
```
- 이렇게 해도 .word가 상속 받기 때문에 모두 스타일이 적용 된다.
(div만 예외)

```html
<h1 class="word">h1
  <h2 class="child">
    <p>child</p>
    <p>child</p>
    <p>child</p>
  </h2>
</h1>
<div class="word">word</div>
<div class="word">word</div>
  ```
- first-child는 첫번째 .word에 대한 모든게 선택되고
- first-of-type은 .word 중에 첫번째로 등장하는 태그를 선택 
즉 h1과 word의 첫번째 텍스트에 스타일 적용이 된다.


