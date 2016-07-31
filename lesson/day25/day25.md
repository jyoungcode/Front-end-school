-`@mixin`
- `@mixin` 
- 기본적으로 매개변수(parameter)가 설정되어 있지 않은 믹스인을 정적 믹스인이라한다. (확장이 안된 상태)
- 어떤 경우에 정적 믹스인 보다 플레이스홀더 선택자가 좋은 선택인가?
common.cs
- 전달인자(Arguments)를 설정한 믹스인을 동적 믹스인이라고 한다. (확장이 가능한 상태)
- 전달 인자는 Sass의 변수와 유사학에 변수 전달인자 앞에 `$`를 붙여야 하며, 각 인자는 콤파(`,`)로 구분된다.
- 전달 인자의 값을 설정하는 구문이 있다면 해당 인자는 선택사항이다. ex) `$arg: value`
- 줄여서(`...`) 전달하는 인자 표현식에서 `맵(Map) 데이터 유형`을 사용할 경우, $를 제외한 키(key)를 전달하여 처리 가능하다. (반복문 없이)
- 믹스인 내부에 `@content`를 사용하면 믹스인 호출 과정에서 믹스인 내부에서 처리될 콘텐츠(코드블록)를 전달하여 코드를 섞을 수 있다.

### color function
- hsla 보다 rgba가 표현할 수 있는 게 많다.
- color 함수를 통해서 

### function 그리드 1280 

### if, else, else if

### while 

$unit: 80px;
$gutter: 20px;
$i: 1; 
@while $i <= 9 {
.grid .unit-#{$i} { width: $unit * $i + $gutter * ( $i - 1) };
$i: $i + 1;
};

------- !global로 지역변수안에서 전역 설정시에 바로 while문에서 인식 할 수 없다. 그래서 body에 인식을 시켜줘야 가능하다. ---
@function width($n){
  // @at-root {
  $i: 1 !global;
    $unit: 130px !global;
    $gutter: 30px !global;
    $count: 24 !global; 
  // }
  @return $unit * $n + $gutter * ($n - 1);
}

body {
  width: width(10);
  height: $count;
  content: $gutter;
}

@while $i <= $count {
  .grid .unit-#{$i} { width: width($i) };
  $i: $i + 1;
};

------- 원래 좋은 코드 -------------------
$i: 1;
$unit: 130px;
$gutter: 30px;
$count: 24; 

@function width($n){
  @return $unit * $n + $gutter * ($n - 1);
}

@while $i <= $count {
  .grid .unit-#{$i} { width: width($i) };
  $i: $i + 1;
};


