/**
 * float: 큰틀 레이아웃 잡을 때 사용 / position: 세세한 부분들

 * [Float]
 ※ float은 가운데 정렬이 쉽지 않다. 그 부모는 높이가 생겨서 무한 float에 빠진다. ( clearfix:after로 해결(micro- clearfix:before), 예전에는 비권장: overflow: hidden)

 1. <img> 요소를 좌/우로 부유시켜 텍스트가 이미지를 둘러싸도록 설정하기 위해 고안된 기술이나, 오늘 날 그리드 시스템(멀티 컬럼 레이아웃)에 활용됩니다.

 2. HTML 모든 요소는 float 속성 기본 값이 float: none으로 설정되어 있습니다.

 3. 어떤 html 요소를 float하면, 그 요소의 display 값은 자동으로 block이 됩니다.
   ( <span>요소 float해보니 display:block );

 4. 요소를 float할 때, width값을 명시적으로 언급해줘야 합니다! 아니면 예측할 수 없는 결과가 발생할 수도 있다고 하네요.

 5. <img> 같이 그 자체적으로 암묵적인 width가 정해져있는 경우는 width를 굳이 선언할 필요는 없습니다. ( replaced element라 부른다. <object>,<video>도 동일 https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element )

  그러나 UX를 위해서 width, height 이미지 크기만큼 정해줘야 합니다. (css보다 html을 먼저 불러와서 로딩이 걸릴때 사용자에게 보여줘야합니다.)
  (그렇지만 반응형 웹사이트에서는  <img>의 크기가 화면의 viewport 사이즈에 따라 자동으로 바뀌여야 하는 경우가 많은데, width랑 height 값을 딱 정해두면..! 안 될 것 같다. 예를 들어 viewport의 width사이즈는 600px인데, 이미지 width를 900px로 적어두면.. 좀 난감하지 않을까? 아직 더 공부해봐야함.)

 6. 사용자가 필요에 따라 float 방향을 왼쪽(left), 오른쪽(right)으로 설정할 수 있습니다. (float: left, right)

 7. float이 block 요소의 성질을 같지만 left, right 했을 경우 content 영역 크기 만큼의 width 가진다
 (width를 지정 하지 않는 경우)

 8. “float”의 기원 자체가 해당 요소를 왼쪽이나 오른쪽으로 보내고 싶어서 만들어진 것이기 때문에 float로 가운데 배치하는 것은 (거의) 불가능합니다! 즉, 가운데에 배치할 때 주로 이용되는 margin-left/right: auto;가 먹지 않는다는 것이죠.
(  float를 포함하고 있는 부모의 width가 정해져있다면, margin-left/right을 계산해서 적용할 수는 있지만, 그렇지 않는 경우에는 float된 요소를 자동으로 가운데에 배치할 수는 없다는 말입니다! )

 9. float된 요소는 margin collapsing이 적용되지 않습니다!

 10. float이 적용된 요소의 뒤에 마크업(구조화)된 요소는 float의 영향을 받습니다.

 11. 한쪽은 width="50%"를 경우 float 되지 않은 영역을 그대로 전체 영역을 잡고 있지만 뒤에 숨어있다. 대신 텍스트컨텐트만 옆으로 나온다
 */
