/*! gallery @jyoungcode */

// create Node 
var box = createNode('div');
box.setAttribute('class','box_wrap');

var box_item0 = createNode('div');
box_item0.setAttribute('class','box_item0');
box.appendChild(box_item0);

var box_item1 = createNode('div');
box_item1.setAttribute('class','box_item1');
box.appendChild(box_item1);

var box_item2 = createNode('div');
box_item2.setAttribute('class','box_item2');
box.appendChild(box_item2);

body.appendChild(box);


// DOM select 
var box_wrap = document.querySelector('.box_wrap');

// var item = box_wrap.children;
// for(var i=0; i<item.length; i++){
// 	item[i] = document.querySelector('.box_'+item[i]);
// }

var item0 = document.querySelector('.box_item0');
var item1 = document.querySelector('.box_item1');
var item2 = document.querySelector('.box_item2');

item0.addEventListener("click", myFn);
item1.addEventListener("click", myFn);
item2.addEventListener("click", myFn);

function myFn() {
	var box_item_img = getStyle(this, 'background-image');
	var image_path = 'images';
	var bg_img_path = box_item_img.split(image_path)[1].slice(0,-2);
	var path = image_path + bg_img_path;
	if( box_item_img !== null) {
		box_wrap.style["background"] = "url(" + path + ')';
		box_wrap.style["background-size"]="cover";
		// box_wrap.style[""]
	}
}

// 정규 표현식을 이용한 이미지 문자열 가져오기 
// var myRe = /\".+\"/g;
// var box_input = box_item_img.match(myRe);




