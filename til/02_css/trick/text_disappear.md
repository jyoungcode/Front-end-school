# text를 보이지 않게 처리 하는 기법.

### 4가지 속성, 속성값에 대한 비교 
|     | text-indent: -9999px | visibility: hidden | display: none| opacity: 0|
| :----------- | :------------: | :-----------: | :----------------: | --------------: |
|스크린리더 | O          | X         |  X          | O               |
| 적용 후 기존 영역여부 | O     | O               | X               | O               |
| 적용 후 다른 속성적용여부  | O     | X               | X               | X               |

- IR 기법을 사용 할때는 text-indent로 처리하자. 그래야 기존 스타일링을

### etc
- readable-hidden
	- `<table><caption>`에도 적용한다.
	- `overflow: hidden`과 1px, -1px 이라는 속성값을 이용해서 처리

```css
	/* 
	.readable-hidden {
	  overflow: hidden;
	  /* position: absolute; */
	  width:    1px;
	  height:   1px;
	  margin:   -1px;
	  border:   0;
	  padding:  0;
	}
	.readable-hidden.focusable:focus {
	  overflow: visible;
	  position: static;
	  clip:     auto;
	  width:    auto;
	  height:   auto;
	  margin:   0;
	}
```

[테스트](http://jsbin.com/sixodufeqi/edit?html,output)

