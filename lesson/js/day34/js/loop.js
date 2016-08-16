// JavaScript Loop Statement
// while문

// count++ : 1~16까지 찍힌다. 왜? 조건에서 ++된 값이 아래에 찍혀서 
// ++count : 1~15까지 찍힌다. 왜? 조건문에서 ++로 더해주고 시작하기 때문에
// var count = 0;

// while (count++ <= 15) {
//     document.write('<p>' + count + '</p>')
// }

// var boo = true, m = 10;

// while(boo) {
  // console.log(boo ? '참참참!' : '짝짝짝!');
  // if (--m > 0) { // 9,8,7,6,5,4,3,2,1
  // if (m-- > 0) { // 10,9,8,7,6,5,4,3,2,1
    // boo = !boo;
  // }
// }

// do ~ while 문

// var boo = !true, m = 10;

// do {
//   // console.log(boo ? '참참참!' : '짝짝짝!');
//   // if (--m > 0) { // 9,8,7,6,5,4,3,2,1
//   if (m-- < 0) { // 10,9,8,7,6,5,4,3,2,1
//     boo = !boo;
//   }
// } while(boo);


// firstEl() 함수 셀렉터문 

var demo_container = query(".demo-container");

// console.log(demo_container.firstChild);

var demo_container_first_el = firstEl(demo_container);

console.log(demo_container_first_el);


// for 의 조건문 선언문을 선언하면 바깥에 전역객체가 생성된다.
// for문 순서 1. 조건문 2. 선언문 3. 실행코드 4. i++ ( 4번이 먼저가 아니다. )

// ------------------------------------------------------------
// for 문 
// 실행 흐름 순서를 기억하라.
// for (var i = 0, boo=false; i < 10; i++) {
//   // if ( i === 9 ) {
//   //   boo = !boo; // true = !false 
//   // }

//   // ↓ 위 코드는 아래처럼 변경 가능하다.
//   // boo = i === 9 ? !boo : boo;

//   // console.log( boo ? '참참참' : '짝짝짝');
//   // ↕ 코드를 병합하면 ... 아래처럼 코드를 변경할 수 있다.

// // if문에서 true값이 삼항식 !true : true 이면 true에 대응하는 '짝짝짝' 출력
//   console.log( (i === 9 ? !boo : boo) ? '참참참' : '짝짝짝' );
// }


// var a = [],
//      fruit,  ( 이게 singleton pattern 이나 잘 안씀 )

// 전역 변수 k=9 , 코드 안에는 실행은 8까지 

// for문 continue를 사용해보는 예제
var fruits = ['바나나', true, '딸기', false, '포도', null, '수박'];
// push는 추가 메서드 
fruits.push(function(){});
fruits.push({'name' : 'object'});

// 미션! fruits 변수에 참조된 데이터 (배열)에는 과일이 아닌 것들이 포함되어 있습니다.
// 이름 for문을 사용하여 불필요한 데이터를 뺀 실제 과일만 담은 배열을 반환하시오.
var real_fruits = [],
      fruit,
      k = 0,
      o = fruits.length; //9

for( ; k<0; k=k+1) {
  fruit = fruits[k];
  // string이 아닌값 continue는 조건이 참이면 건너띄겠다..즉 string만 담겠다.
  if( isType(fruit) !== 'string' ){
    continue;
  }
  real_fruits.push(fruit);
}
// console.log(real_fruits);

// 위에꺼 응용. document.body.childNodes 일때 배열 안에 #text가 아닌 요소만 수집할때 사용가능
// for 코드 내에서는 전역인데 var 대신 let(for문 내에서만)을 써서 그 지역으로만 사용가능 하다( ES6 - 크롬에서만 돌아간다. )
// 다른 곳에서 i 변수가 전역으로 겹치는게 문제인데 let 사용으로 지역변수로 활용가능하다. ( let을 hoisting이 안되서 아래에 기입하면 안된다. )
// 이 예제는 쉽게 처리 할 수 있지만 continue를 응용하기 위해 하는 예제.

var collection = document.body.childNodes;

// length가 index 값보다 하나 많아서 -1 처리 
for( var el_collection=[], i=collection.length - 1; collection[i]; i--){
  let node = collection[i];
  // if(node.nodeType === 3 || node.localName === 'script') {
      if( isTextNode(node) || isElName(node, 'script') ) {
    // #text, <script> ( 둘중 하나가 true 일때 )
    continue;
  }
  el_collection.push(node); // #text, <script> (x)
}
// console.log(el_collection);


// getStyle 대신 split으로 숫자와 단위를 나눌 수 있다.
// 이런 함수는 jQuery가 지원해주지 않아서 helper function으로 만들어야한다.
// CSS 단위를 찾는 메서드 
// var units = 'em rem % px vw vh vmin vmax'.split(' ');

// break 예제
// Unit 값이 있는지 확인하고 있다면 가져오는 함수.
// 왜? break 쓰냐면? 내가 원하는 단위 찾으면 굳이 다 뒤질필요 없이 break로 찾으면 종료 시키려고. 
// 반복문은 성능에 저하를 주기에 units에 담을때 먼저 찾을 px부터 선언하자.
var units = 'px em rem % vw vh vmin vmax'.split(' ');
var unit;
var i = 0;
var l = units.length;

var demo_container = query('.demo-container');
var get_value = getStyle(demo_container, 'margin-bottom');

// 아래에 구문을 가지고 두가지 함수 형태를 목적에 따라 만들 수 있다.
function hasUnit(){}

// getUnit은 함수 또한 object다 그래서 property를 가질 수 있고 
// memorial 패턴? 
// getUnit.units 를 하면 접근 가능 하나 units를 전역객체로 선언시 누구도 접근 할 수 없다. 값을 변경 할 수 없다.
// function getUnit(value){
//   for ( lef unit of getUnit.units){
//     console.log(unit);
//   }
// }

function getUnit(value){
  var i=0, l=getUnit.units.length, unit;
  // var reg;
  // if( errorMsg(value)) return errorMsg();

  for( ; i<l; i++){
    unit = getUnit.units[i];
    // 방법1
    if( value.indexOf(unit) > -1 ){
      // 이 문제에 경우 units에서 'px rem em ...' 이런식으로 em 보다 rem을 먼저 선언하면 된다.
      break; 
    }

    // 방법2
    // reg = new RegExp('\\d+' + unit, 'i');
    // if( reg.test(value) ){
    //   break;
    // }
  }
  return unit;
}

// 함수가 선언 되어 있어야 지만 밑에서 속성을 정의 할 수 있다.
// 이경우 indexOf에서 문제가 된다. rem을 찾아도 em을 반환하기 때문에 
// getUnit.units = 'px em rem % vw vh vmin vmax'.split(' ');
getUnit.units = 'px em rem % vw vh vmin vmax'.split(' ');


// 한줄로 가능 대신 지역객체가 된다.
// for( let units = 'em rem % px vw vh vmin vmax'.split(' '), i = 0, l = units.length; )
// for( ; i<l; i++){
//   unit = units[i];

//   if( get_value.indexOf(unit) > -1 ) {
//       //빈 값일때 -1 반환이라 그거 보다 큰수면 true
//   }
//   console.log(unit);
// }

// ECMAScript 2015 < for ~ of > 위 코드를 ES6로 
// for (let unit of units){
//   console.log(unit);
// }
// console.log('for 밖:', unit); // 마지막에 unit is not defined 왜냐면 let이 지역객체라서


// for in 문
// for in문이 배열에는 성능상 느려서 사용하면 안된다!!!( 배열은 for, for each, es6 사용 권장, 왜냐면 cross type chain에 걸려서 ) 객체는 사용 가능!!!!
// javascript garden FDS에 있음
// https://github.com/yamoo9/FDS/blob/master/References/B__Advanced/README.md

// 왜? 객체에는 for-in문 쓰는가? 객체와 값을 찍어낼때
var obj = {
  'name' : 'jyoungcode',
  'location' : 'seoul'
};

// for-in을 사용시 성능이 느려서 꼭 조건을 걸어야 한다.
// for-in 문은 객체의 내부 속성을 순환할 때 사용.
// 조건을 걸어주지 않으면 조상까지 찾아 올라간다.
// js garden에 조상까지 찾아 올라가는 나쁜 예가 나와있다.
for( var prop in obj) {
  if( obj.hasOwnProperty(property)){
    console.log('속성', property);
    console.log('값', obj[property]);
  }
}


