###### Front-End Develop SCHOOL

# DAY 30

## DOM API

### 1. 선택

- `document.getElementById('id name')`
- `.getElementsByTagName('element node(tag) name')`
- `.getElementsByClassName('class attribute value name')`
- `.querySelector('css selector')`
- `.querySelectorAll('css selector')`

### 2. 탐색

```html
<div class="grandparent">
	<div class="pre-sibling"></div>
	<div class="parent">
		<h1 class="title"></h1>
		<img src="" alt="">
	</div>
	<div class="next-sibling"></div>
</div>
```
> .parent를 선택한 경우.

- `.firstChild` // #text
- `.firstElementChild` (IE 9+) // <h1></h1> 
- `.lastChild` // #text
- `.lastElementChild` (IE 9+) // <img />
- `.parentNode` // <div class="grandparent"></div>
- `.parentElement` (DOM Lv4) // <div class="grandparent"></div>
- `.childNodes` // [ #text 포함 <h1>,<img> 모든자식 ]
- `.children` // [ #text 미포함 <h1>,<img> 자식 요소 ]
- `.previousSibling` 해당요소 앞 #text
- `.previousElementSibling` (IE 9+)  // <div class="pre_sibling"></div>
- `.nextSibling` //  해당요소 뒤 #text
- `.nextElementSibling` (IE 9+) // <div class="next-sibling"></div>

### 3. 조작

- `parent_node.appendChild(child_node)`
- `target_node.parentNode.insertBefore(insert_node, target_node)`
- `parent_node.removeChild(child_node)`
- `target_node.parentNode.replaceChild(replace_node, target_node)`
- `node.cloneNode()`
- `node.hasChildNodes()` // 현재노드에게 자식노드가 있는지 Boolean으로 반환
- `node.isEqualNode()` (DOM Lv3, IE 호환 가능[#](https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode)) // node의 텍스트 컨텐트랑, isEqualNode()함수 안에 인자노드의 텍스트 컨텐트가 한글자도 빠짐없이 동일 시에만 true가 나온다.  
- `node.contains(other_node)` (DOM Lv4, IE 호환 가능[#](https://developer.mozilla.org/en/docs/Web/API/Node/contains)) // contains(node) 해당 노드의 자식또는 손자 노드가 존재하는지 파악 여부 boolean
- `node.normalize()` (DOM Lv2, IE 호환 가능[#](https://developer.mozilla.org/en-US/docs/Web/API/Node/normalize)) // 비어있는 textNode를 제거하고 가까운 textNode에 합쳐진다. 그리고 그게 자식요소라면 요소는 사라지고 그 전 자식에 합쳐진다.
