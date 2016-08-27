(function(global, XHR){
	'use strict';

	var createXHR = (function() {
		// IE 6 이하 웹 브라우저를 위한 대체 코드
		// ActiveXObject ( 'Microsoft.XMLHTTP' )
		// 1번 방법
		// var _xhr;
		// if( XHR ) {
		// 	_xhr = XHR;
		// } else {
		// 	_xhr = ActiveXObject('Microsoft.XMLHTTP');
		// }

		// 2번 방법
		XHR = XHR || ActiveXObject('Microsoft.XMLHTTP');
		return function(){
			return new XHR;
		};
	}) ();

	// function createXHR(){
	// 	return new XHR();
	// }

	// XMLHttpRequest() 생성자 함수를 통해
	// xhr을 콘솔에서 보면 xhr에 내장된 객체에 함수를 설정할 수 있다.
	// 비동기 통신을 수행할 객체를 생성
	// var xhr1 = new XHR();
	// var xhr2 = new XHR();
	// console.log(xhr2);
	

	// 'XMLHttpRequest 생성자.prototype 객체 
	// console.dir(XHR.prototype); // 원형객체 xhr.__proto__와 동일 
	// console.log('xhr 객체: ', xhr); // 생성자함수

	// 1. create
	var xhr = createXHR();

	// 2. open
	// 마지막 인자 값이 false 라면 동기 통신!
	// 마지막 인자 값이 true 또는 생략하면 비동기 통신!
	// 마지막 인자 더이상 사용하지 않는다. (권장) 경고생긴다. deprecated 
	// xhr.open('GET', 'data/data.txt', false); // 동기 통신
	// xhr.open('GET', 'data/data.txt', true); // 비동기통신

	// 3. send
	// xhr.send();

	// 동기 통신일 경우는... 데이터가 로드될 때까지 기다림..
	// 비동기 통신일 경우는... 아래 코드가 바로 해석됨...

	// 비동기 경우에 open 후 데이터를 읽지 않고 send를 해서 받아온 데이터가 없기에 else 구문이 실행된다.

	var result_view = document.querySelector('.ajax-result');
 	var call_ajax_btn = document.querySelector('.call-ajax-data-btn');

 	call_ajax_btn.onclick = updateViewPlace;

 	// var call_ajax_btn_2 = document.querySelector('.call-ajax-data-btn-2');
 	// var call_ajax_btn_3 = document.querySelector('.call-ajax-data-btn-3');
 	// call_ajax_btn_2.onclick = updateViewPlace;
 	// call_ajax_btn_3.onclick = updateViewPlace;

	// 통신 상태 확인
	// if( xhr.status == 200) {
	// 	console.log('통신 데이터 전송 성공! :)');
	// 	// console.log(xhr.response);
	// 	result_view.textContent = xhr.response;
	// } else {
	// 	console.log('통신 데이터 전송 실패! :(');
	// 	result_view.textContent = '데이터 로드에 실패했습니다.'
	// 	console.log(xhr);
	// }

	// true가 기본값 : 비동기, false: 동기 
	// xhr.open('GET', 'data/data.html'); // 성공
	// // xhr.open('GET', 'data/model.txt', false); // 실패 
	// xhr.open('GET', 'data/data2.html');
	// xhr.open('GET', 'data/data3.html');

	// switch( this = ) {
	// 	case 0:
	// 		xhr.open('GET', 'data/data.html');
	// 		break;
	// 	case 1:
	// 		xhr.open('GET', 'data/data2.html');
	// 		break;
	// 	case 2:
	// 		xhr.open('GET', 'data/data3.html');
	// 		break;
	// 	default:
	// 		"Stand ready";
	// }

	// if ( this === call_ajax_btn ){ xhr.open('GET', 'data/data.html'); return xhr;}

	// if ( this === call_ajax_btn_2 ){ xhr.open('GET', 'data/data2.html'); return xhr;}

	// if ( this === call_ajax_btn_3 ){xhr.open('GET', 'data/data3.html'); return xhr;}
	// xhr.open('GET', 'data/data.html');
	// xhr.open('GET', 'data/data.xml');
	// xhr.open('GET', 'data/data.json');
	xhr.open('GET', 'http://api.randomuser.me/?results=20&gender=female&nat=gb,br');

	// updateViewPlace 클릭 되면 send 실행되고 xhr 객체에서 감지후 함수 실행
	// 비동기 통신 객체에 이벤트 핸들러 바인딩
	// 데이터를 받아오는 과정의 이벤트를 감지해야하는데 그 이벤트란 바로 readystatechange 이다
	xhr.onreadystatechange = function() {
		// console.log(this); // this == xhr 객체
		if (this.status === 200 && this.readyState === 4 ) {
			console.log('통신 데이터 전송 성공! :)');
			// TEXT
			// result_view.textContent = '[' + this.statusText +  ']' + this.response;
			// HTML
			// result_view.innerHTML = this.responseText;
			// XML
			// var doc = this.responseXML;
			// var doc = this.response;
			// console.log(this.response);
			// var people = doc.querySelector('people');
			// var person_list = people.querySelectorAll('person');
			// var templete = '<ul>';
			// var person, name, tel, mail, i = person_list.length - 1;
			// for( ; person_list[i]; i--){
			// 	person = person_list[i];
			// 	name = person.querySelector('name').firstChild.nodeValue;
			// 	tel = person.querySelector('tel').firstChild.nodeValue;
			// 	mail = person.querySelector('mail').firstChild.nodeValue;
			// 	// console.log(name, tel, mail);
			// 	templete += [
			// 		'<li>',
			// 			'<span class="name"> '+name+ ' </span>',
			// 			'<span class="tel"> '+tel+ ' </span>',
			// 			'<span class="mail"> '+mail+ ' </span>',
			// 		'</li>'
			// 	].join(' ');

			// JSON
			var random_users = this.response; // text file json
			// console.log(typeof random_users); // string
			
			// [ text -> object ] - 이제 받아온 text를 json으로 바꾸자 
			// JSON 객체의 parse() 메소드를 사용
			// JSON.parse( JSON(문자열) )
			// [ text <- object ]
			// JSON 객체의 stringify() 메소드를 사용
			// JSON.stringify( JavaScript(JSON 형태)객체 )

			random_users = JSON.parse(random_users);
			// JSON 데이터에 results 프로퍼티 가져온거다.
			var people = random_users.results; 
			// people 반복 순환 처리.
			// for ( var person of people ) {
			// 	person.fullname = `${person.name.first} ${person.name.last}`;
			// 	person.
			// }

			var templete = [
				'<table>',
					'<thead>',
						// '<th>Name</th>',
						'<th>No.</th>',
						'<th>Gender</th>',
						'<th>Email</th>',
						// '<th>Nation</th>',
						// '<th>Pic_s</th>',
						// '<th>Pic_m</th>',
						// '<th>Pic_l</th>',
					'</thead>',
				'<tbody>'
			].join('');

			for (var i = 0; i < 5; i++) {
				// for문 시작	
				templete += [
						'<tr>',
							'<td>'+ i +'</td>',
							'<td>'+people[i].gender+'</td>',
							'<td>'+people[i].email+'</td>',
						'</tr>',
				].join(' ');
				// for문 끝
			}

			templete += '</tbody></table>';

			console.log(templete);




			} // if - end -

			// templete += '<ul>';
			result_view.innerHTML = templete;

		} // function - end -
		// else {
		// 	console.log('통신 데이터 전송 실패! :(');
		// 	result_view.textContent = '[' + this.statusText +  ']' + '데이터 로드에 실패했습니다.'
		// }
		// console.log(xhr);
	

	function updateViewPlace(){
		xhr.send();
		// 비동기 통신을 요청했을 경우,
		// 이벤트(readystateChange) 를 통해 비동기 데이터가 로드된 시점에
		// 아래 조건문이 수행되어야 한다.
		// if (xhr.status === 200 && xhr.readystate === 4 ) {
		// 	console.log('통신 데이터 전송 성공! :)');
		// 	result_view.textContent = '[' + xhr.statusText +  ']' + xhr.response;
		// } else {
		// 	console.log('통신 데이터 전송 실패! :(');
		// 	result_view.textContent = '[' + xhr.statusText +  ']' + '데이터 로드에 실패했습니다.'
		// }
		// console.log(xhr);
	}


	// 데이터 여러개 요청 하는 헬퍼함수 만들 수 있지만, json 자체가 객체데이터라 크게 쓸 필요 없다.
	// readystate: 4는 done 상태

	// 0: unini , 1, 2, 3, 4 :readystate 
})(this, this.XMLHttpRequest);
// })(this, this.XMLHttpRequest || ActiveXObject('Microsoft.XMLHTTP'));

// ------------------------------------------------------------------
// jQuery AJAX 방식
// ------------------------------------------------------------------
// (function(global, $){
// 	'use strict';

// 	// 유틸리티 메소드
// 	// $.ajax()
// 	// $.get()
// 	// $.post()
// 	// $.getJSON()
// 	// $.getScript()
	
// 	// var json = $.getJSON('http://api.randomuser.me/?results=50');

// 	// JS Promise 개념 사용
// 	// ECMAScript 2015 Promise 기본지원
// 	$.getJSON('http://api.randomuser.me/?results=50')
// 		.then(function(data, status, XHR) {
// 		console.log(data.results); // 객체(Object)화가 되어 있음.
// 	});

// 	// jQuery AJAX Low-level interface 메소드
// 	$.ajax({
// 		'url' : "http://api.randomuser.me/?results=50'",
// 		'dataType' : "json",
// 		'success' : function(data, status, XHR) {
// 			console.log(data.results);
// 		} 
// 	});

// 	// 참고
// 	// low level 이란
// 	// on(click, mousenter ) 처럼 한번에 묶어쓰는것.
// })(this, this.jQuery);