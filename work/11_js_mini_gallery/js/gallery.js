/*! gallery @jyoungcode */

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

///////////////////////////////////////////////////

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


// 'images/content-img-thumbnail.jpg'.replace('-thumbnail', ' ');로
// 이미지 바꿔치기.

function myFn() {
	// var box_wrap_img = getStyle(box_wrap,'backgroud');
	// var click_img = this;
	// console.log(getStyle(this, 'background'));
	var box_item_img = getStyle(this, 'background');
	var box_input = box_item_img.toString();
	console.log(box_input);
	if( box_item_img !== null) {
		box_wrap["background"] = box_input;
	}
}

var obj = {
	background: #fff,
	
}

	// var item_all=[item_0,item_1,item_2];
	// var box_item = ['box_item_0', 'box_item_1', 'box_item_2'];
	// for(var i=0; i<3; i++){
	// 	var item = item_all[i].classList.add(box_item[i]);
	// }
	// box_wrap.setAttribute('class', item);

	// box_wrap.style.backgroundImage = "url('images/img1.jpg')";
	// box_wrap.style.backgroundSize = "100% 100%";
	// box_wrap.style.backgroundPosition = "center";
	// box_wrap.style.backgroudRepeat = "no-repeat";
	// box_wrap.style.transition ="all 2s";


// `backgroud: url('bg.png') center / 100% no-repeat fixed, url('bg2.png') bottom / 100% no-repeat fixed #E7E7E8;


