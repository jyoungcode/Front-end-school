/*! gallery @jyoungcode */

var body = document.body;
var box = document.createElement('div');
box.setAttribute('class','box_wrap');

var box_item_0 = document.createElement('div');
box_item_0.setAttribute('class','box_item_0');
box.appendChild(box_item_0);

var box_item_1 = document.createElement('div');
box_item_1.setAttribute('class','box_item_1');
box.appendChild(box_item_1);

var box_item_2 = document.createElement('div');
box_item_2.setAttribute('class','box_item_2');
box.appendChild(box_item_2);

body.appendChild(box);

///////////////////////////////////////////////////

var box_wrap = document.querySelector('.box_wrap');
var item_0 = document.querySelector('.box_item_0');
var item_1 = document.querySelector('.box_item_1');
var item_2 = document.querySelector('.box_item_2');

item_0.addEventListener("click", myFn);
item_1.addEventListener("click", myFn);
item_2.addEventListener("click", myFn);


function myFn() {
	var item_all=[item_0,item_1,item_2];
	var box_item = ['box_item_0', 'box_item_1', 'box_item_2'];
	for(var i=0; i<3; i++){
		var item = item_all[i].classList.add(box_item[i]);
	}
	box_wrap.setAttribute('class', item);

	// box_wrap.style.backgroundImage = "url('images/img1.jpg')";
	// box_wrap.style.backgroundSize = "100% 100%";
	// box_wrap.style.backgroundPosition = "center";
	// box_wrap.style.backgroudRepeat = "no-repeat";
	// box_wrap.style.transition ="all 2s";
}

// `backgroud: url('bg.png') center / 100% no-repeat fixed, url('bg2.png') bottom / 100% no-repeat fixed #E7E7E8;


