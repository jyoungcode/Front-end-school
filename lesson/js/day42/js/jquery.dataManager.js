/*! jquery.dataManager.js @jyoungcode */
// 자바스크립트 모듈 패턴

(function(global, $){
	'use strict';

	// jQuery 네임스페이스 객체(함수)
	// 함수 객체의 속성으로 dataManger 객체를 설정
	// jQuery 유틸리티 메소드라 명한다.
	// dataManager에서 두개의 기능(feature)를 감지할때 json, localstorage
	$.dataManager = {
		// 'support': function([feature]) { 로컬스토리지 또는 JSON 지원하는지 유무를 객체로 반환 },
		'support': (function(){
			var json = !!global.JSON , localStorage = !!global.localStorage;
			return function(feature) {
				if ( !feature ) {
					return {
						'json': json,
						'localstorage': localstorage
					};
				}
				feature = feature.toLowerCase();
				if ( feature === 'json' ) { return json; }
				if ( feature === 'localstorage' ) { return localstorage; }
			}
		})(),
		// 'get' : function(key) { return 로컬스토리지로부터데이터를 반환(문자->객체)},
		'get': function(key) {
			if (!key || $.type(key) !== 'string' || !this.support().json || this.support('localstorage')) {}
			return global.JSON.parse( global.localStorage.getItem(key) );
		},
		// 'set': function(key, value) { 전달된 value를 문자화 해서 로컬스토리지 객체의 key 값으로 저장 },
		'set': function(key, value) {
			if ( !key || !value || $.type(key) !== 'string' || !this.support().json || this.support('localstorage') ) {}
				global.localStorage.setItem(  key, global.JSON.stringify(value));
		},
		// 'del': function(key) { key에 해당하는 데이터를 로컬스토리지로부터 제거한다. },
		'del': function(key) { global.localStorage.removeItem(key); },
		// 'clear': function() { 로컬스토리지 데이터가 존재할 경우, 모든 데이터를 제거한다. }
		'clear': function() { global.localStorage.clear(); }
		};

		$.dataManager = dataManager;

})(this, this.jQuery);
// })(this, (this.jyoungcode = this.jyoungcode || {})) 

// 위에꺼 json parse, stringify 를 따로 쓰지 않게 객체 형태 메서드를 만들자!는 목적
// jQuery로 하는 이유?

// jQuery position 쓰면 top left를 반환한다. 이걸 이용해서 localStorage에 연결할 수 있다.

// 이렇게 단일 일때는 위에 처럼 싱글톤 인데, 여러개면 생성자를 이용하자.
// 동일 인스턴스를 사용하게끔 하는 것이 기본 전략이다. 프로그램상에서 동일한 커넥션 객체를 만든다던지, 하나만 사용되야하는 객체를 만들때 매우 유
