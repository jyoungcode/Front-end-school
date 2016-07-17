position properties
- static (Default)
- relative (Self)  * 일반흐름(normal flow)을 꺠지 않는다.
- absolute (offsetParent)
  offsetParent란?
  * offset이란? 사전의미: (상쇄) 반대되는 것이 서로 영향을 주어 효과가 없어지는 일.
  * 자식요소를 포함하는 가장 가까운 부모 요소 중에 position 속성
   * 일반흐름(normal flow)에서 벗어난다 (float와 유사)
   * display 속성 값이 block으로 변경 된다.
   * absolute 적용된 요소의 부모에 relative을 설정하는 이유!
   (relative는 일반 흐름을 깨지 않아서)
   * float과 차이점!
   float의 경우는 부모요소가 float된 요소를 감싸게 하는 방법이 있지만,
   absolute의 경우는 별도로 height 높이를 제공해야 한다.
  - fixed (기준 : screen viewport)
  기본적으로는 absolute와 유사하게 처리되어 보이나, 처리 결과는 다르다.
  고정 형태로 위치가 설정된다. 화면 스크롤과 상관 없이 항상 그 자리를 유지한다.
  - z-index 속성의 경우는 반드시 position 속성(static 제외)과 함께 사용된다.
    z-index 속성 값은 양의 정수, 0, 음의 정수 사용이 가능. 단 설정시 10 또는 100 단위로 설정하는 것이
    유지보수 관점에서 권장된다.
    * [부모 a, [자식 c]] + [부모 b , [자식 d]]


    [ z-index: day16: button ]

    모두다 float된 상태.
    부모 : position:relative 상태일때 z-index: 10
    가상요소(자식) : position: absolute 일 때 z-index : -1
    * 이때 가상요소 z-index -1 만 하면 뒤로 숨지만 부모에 10을 주면
    부모가 올라오는게 아니라 부모는 감싸는 형태가 되고 텍스트컨텐트 자체는 위에 살아있다.
    감싸는건 현상으로 봐두자

    부모1/자식1 (z-index: 10 / -2) , 부모2/자식2 (z-index: 100 / -1)
    이때 자식1이 -2 지만 이건 부모 범위 안에서 해당되기때문에 상관없다.
    그리고 부모2가 100이라서 더 위에 올라온다.

    position 설정시에만 z-index 사용가능하고
    텍스트는 nodetype이 요소가 아니라 z-index는 요소만 설정가능
