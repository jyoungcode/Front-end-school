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
