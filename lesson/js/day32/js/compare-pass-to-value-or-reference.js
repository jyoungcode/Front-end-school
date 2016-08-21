/*! compare-to-value-reference.js © yamoo9.net, 2016 */

// [값을 복제하는 경우]
// 원시 데이터 유형 (숫자, 문자, 논리, undefined, null)
// 원시 데이터 유형은 값이 복제가 된다.

// [값을 참조하는 경우]
// 자료형 데이터 유형 (객체, 배열, 함수)
// 자료형 데이터 유형은 데이터가 참조가 된다.

// --------------------------------------------------------
// 변수에 복사/참조되는 값의 유형을 확인하기 위해 실습

// 문서에서 .brand 요소를 찾아 변수 brand에 참조(Reference)
var brand = query('.brand');
// String Literal Data (Primitive Data)
// 변수 brand_txt에 복사(Copy)된 값은 문자 유형의 데이터(Data)이다.
var brand_txt = brand.firstChild.nodeValue;

//------------------------------------------------
// 데이터 유형 변환
// 1. 숫자 -> 문자
// -----------------------------------------------
// 1.1. '데이터' ex) '9'
// 1.2  데이터 + ' ' ex 9 + ' ' // '9'
// 1.3 String(데이터) ex) String(9) // '9'
// 1.4 데이터.toString() ex) (9).toString() // '9'
// 주의할 점: 숫자, 함수, 객체 리터럴(그 자체의 값)의 경우는 오류가발생!
// 오류가 발생하는 객체는 괄호 ()를 사용하여 데이터를 감싼 후 테스트

// 이상한 코드 : 9..toString() / 9 .toString() 쓰면 안되지만 작동한다. 올바른법 : (9).toString()
// obj.toString() 이라서 
// (9).toString()
// (function(){}).toString
// ({}).toString() 만 ()wrapper로 감싸야 한다.

// ---------------------------------------------------
// 데이터 유형 변환
// 2. 문자(숫자형 문자) -> 숫자
// ---------------------------------------------------
// 2.1. 데이터 -0, *1, /1
// 2.2. +데이터
// 2.3. Number(데이터)
// 2.4. parseInt(데이터), parseFloat(데이터)

// ---------------------------------------------------
// 데이터 유형 변환
// 3. 데이터 -> 불리언
// ---------------------------------------------------
// 3.1. Boolean(데이터
// 3.2. !!데이터

// 그림선택 예제
// document.querySelector().style.padding 하면 값을 가져 올 수 있다. (html에 적용된 인라인스타일) "1rem"
// 그러면 "1rem"/2가 안되니까 2를 2.toString()으로 변환시켜서 하면 안될까?

// var page_header = documet.querySelector('.page-header');
// parseFloat(page_header.style.fontSize, 10);
// parseInt(page_header.style.fontSize, 10);
// page_header.style.fontSize.split('px')[0]-0;
