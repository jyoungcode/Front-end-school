### media
`<link media="screen" />`
스크린으로 볼때 
`<link media="print" />`
프린터 뽑을 때 적용시킬 css
( tv, aural(음성장치), braille(점자)도 있다.)

### 미디어 쿼리
`<meta name="viewport" content="width=device-width, initial-scale=1.0" />` 
그외 (orientation, device-aspect-ratio, color, color-index, resolution) 
- meta를 꼭 선언 해야 웹페이지에게 화면 너비와 관련된 정보를 전달 할 수 있다. 꼭 넣자!

`@media screen and (orientation: portrait)