### 스마트폰 처럼 작은 기계에서 글자가 자릴 경우

- `text-overflow: ellipsis;` 를 통해 줄임말 표시가 가능하다.
 
```html
	.ellipsis {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
```	