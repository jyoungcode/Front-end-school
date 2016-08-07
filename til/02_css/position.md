# position properties

### static (Default, 기본위치)

### relative (Self 상대위치)
  - 일반흐름(normal flow)을 꺠지 않는다.
  - 자신의 현재 위치를 기준으로 이동.
  - 이동 하더라도 그 공간은 다른 요소가 침범하지 못한다.
  - 이동: 시에 자신의 원래 위치를 기준으로 이동.
  - 기준점: 각 모서리 
  - 부모요소가 relative라면 부모 위치를 기준으로 자식에게 절대 좌표가 설정 된다.

### absolute (offsetParent)
  - offsetParent란?
  - offset이란? 사전의미: (상쇄) 반대되는 것이 서로 영향을 주어 효과가 없어지는 일.
  - 일반흐름(normal flow)에서 벗어난다 (float와 유사)
  - display 속성 값이 block으로 변경 된다.
  - 이동: 보통 relative가 적용된 부모(static을 제외하고) 안에서 abbsolute를 가진 자식요소는 가장 가까운 부모를 기준 
  - 자식(absolute)가 이동하면 원래 공간은 사라지고 아래에 있던 요소가 그 자리를 차지 한다. 
  - 부모에 relative 적용하지 않으면 body가 기준이 된다. 

### fixed (기준 : screen viewport)
  - 스크롤을 해도 화면에 고정된다.
  - 이동: 웹브라우저화면(viewport)을 기준으로 이동
   - 자식(fixed)가 이동하면 원래 공간은 사라지고 아래에 있던 요소가 그 자리를 차지 한다.

### float과 차이점!
- float의 경우는 부모요소가 float된 요소를 감싸게 하는 방법이 있지만, absolute의 경우는 별도로 height 높이를 제공해야 한다.

### z-index
  - 숫자가 클수록 앞에 위치 한다.
  - z-index 속성의 경우는 반드시 position 속성(static 제외)과 함께 사용된다.
  z-index 속성 값은 양의 정수, 0, 음의 정수 사용이 가능. 단 설정시 10 또는 100 단위로 설정하는 것이
  유지보수 관점에서 권장된다.
  * [부모 a, [자식 c]] + [부모 b , [자식 d]]
  - html 상에서 position 속성이 적용된 가장 마지막 element가 화면 상에서 앞에 나온다. 


##### ex. [ z-index: button ]
  - 모두다 float된 상태.
  - 부모 : position:relative 상태일때 z-index: 10
  가상요소(자식) : position: absolute 일 때 z-index : -1
  - **point** 
  이때 가상요소 z-index -1 만 하면 뒤로 숨지만 부모에 10을 주면 부모가 올라오는게 아니라 부모는 감싸는 형태가 되고 텍스트컨텐트 자체는 위에 살아있다. 감싸는건 현상으로 봐두자
  - position 설정시에만 z-index 사용가능하고
  - 텍스트는 nodetype이 요소가 아니라 z-index는 요소만 설정가능

##### 화면 앞에 나오는 우선순위 순서
- 부모1, 부모2가 각자 자식1, 자식2를 가지고 있을 때 
- 부모 z-index의 수치에 따라 화면 우선순위가 결정되나
자식의 z-index는 영향이 없다. 
- 같은부모(ex.부모1) 안에서 여러 자식이 있을때만 자식끼리 우선순위 영향이 있다.

```html
  <style>
    .p1, .p2 { width: 200px; height: 200px; position: relative; }
    .p1 { background: blue; z-index: 10; top: 50px;}
    .p2 { background: green; z-index: 100; top: -100px; }
    .c1, .c2 { width: 50px; height: 50px; position: absolute; }
    .c1 { background: yellow; z-index: 100; top: 50px; left: 50px;}
    .c2 { background: pink; z-index: -2; top: 50px; left: 50px;}
  </style>
</head>
<body>
  <div class="p1">
    <div class="c1"></div>
  </div>
  <div class="p2">
    <div class="c2"></div>
  </div>
</body>
```



q. 사람들은 top: -100px ,  bottom: 100px 중 어떤 것을 선호할까, 또 이 둘의 성능상 차이가 있는가? 