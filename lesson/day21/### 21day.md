### 21day

#### normaliaze.css 에서 처리 가능
ie, ios portrate landscape 하는 경우 글자 크기 커짐.
```html
html {
    /* 박스 크기 설정 */
    box-sizing: border-box;
    /* 텍스트 크기 조정 설정 */
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
}
```
isolate 방식 , float 방식
: 레이아웃을 잡기 위한 여러가지 기법이다.
상황에 따라서 맞는 방식을 적용시키면 된다.

왜 isolate는 margin-right: -100px을 줬다고
float를 적용한 요소의 margin-left: 양수 와 차이가 있는가?
( width를 적용 시킬때 )
- float  적용 된 거는 width를 주면 normalflow 상태에서 밀어내지만. 
- isolate는 영향을 받지않고 밀어내지않고 크기를 갖는다.
( 이현 상은 브라우저에서 margin:음수 + float:left 의 조합이 갖는 처리 방식을 알아봐야 할텐데.. 어렵다.)

### flex 
flex-wrap: wrap-reverse는 무엇을 wrap-reverse 하겠다는 건지 명확하지 않다. 연구가 더 필요한 부분.

[w3 flex](https://www.w3.org/TR/css-flexbox-1/#flex-wrap-property)

### flexbox를 IE 10부터 지원인데 하위 브라우저까지 지원하기 위한 방법 .
-  flexbox를 기준으로 작업을하고 javascript로 된 소스를 통해서 하위버전 지원 가능
- float로 기준으로 작업을 하고 flexbox 상위버전을 한번더 구현.
- 중요한점: 보여줄 컨텐츠를 지원하는 것에 따라 어떻게 할 것인지 고려. 
- caniuse, flex ie 8~9 까지 지원 가능한 깃헙 소스

[기존방법을 flex 변환법 ](https://philipwalton.github.io/solved-by-flexbox/)