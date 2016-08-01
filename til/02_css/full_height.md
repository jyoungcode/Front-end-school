### height: 100%를 적용 시키고 싶을때는.

```html
	* { margin: 0; padding: 0;}
	html, body { height: 100%; }
	#background { height: 100%, background: url(); }
```

- ※ 스마트 폰에서 모바일 지도의 경우 '위치정보동의' 창이 아래에서 나오게 되면 웹브라우저 높이가 변경이 된다.
이때, 지도는 전체높이를 가지지 못하게 되는데 JS resize 이벤트를 사용해서 해결해야 한다. 

 