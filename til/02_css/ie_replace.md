# IE 하위 버전에서 CSS를 대체하는 기법.
- CSS 스타일링을 image로 대체하고 텍스트를 -9999px로 처리한다.

```css
/* 구형 브라우저 IE6, IE7, IE8 */
/* `<a class="banner">`에 CSS가 적용된 텍스트를 이미지로 대체한다. */

.old a.banner,
.ie9 a.banner {
	background: url(../images/banner-for-ie.png) no-repeat;
}

/* 실제 `<P>`, `<string>`은 -9999px로 대체한다.*/
.old a.banner *,
.ie9 a.banner * {
	position: absolute;
	top: -9999px;
}
```