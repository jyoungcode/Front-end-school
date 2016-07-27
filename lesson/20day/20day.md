### 반응형 웹 디자인
- 과거의 것을 답습하지 말자.
- 멀티 디바이스 그 안에 컨텐츠, 콘텍스트가 중요
- 1. 모바일 first 인데 들어갈 컨텐츠가 1,2,3 이라면
데스크탑은 1,2,3+4,5,6이 된다. 이때 1,2,3은 필수 정보가 되어야 하고 4,5,6은 이를 뒷바침할 연계가 있는 컨텐츠를 추가한다. 그렇지만 이건 선택이다.
- [ETHAN MARCOTTE: RWD](https://abookapart.com/products/responsive-web-design)
- [iropke](http://iropke.com/proposal/HiSeoul)

#### 반응형 웹디자인을 만들때 알아야할 것 
- 사람들이 90%이상 사용 screen 디바이스
- 다양한 디바이스 사용

- [The new multiscreen world](http://www.ipsos.fr/sites/default/files/attachments/multiscreenworld_final2.pdf)

#### 반응형 웹 프로젝트를 시작하기 위해 알아야 할 것?
- 콘텐츠 중심
- 가급적 네이티브 기능 사용 ( 커스텀도 좋지만.)
- Form 2.0 사용 (placeholder 같은거)
- 화면에 바로 보이지 않는 lazyloading 고려
( img경우 RWB에서 2000px img를 줄이는 방식이 아닌
자동화를 통한 이미지 슬라이싱 방식이 적용되서 성능을 고려한다. )
- svg 그래픽, 아이콘 폰트 적극 활용
- 네트워크 데이터 커넥션 불안정 고려 
다음의 경우 css를 html 내부에 / 네이버는 외부css다. 이때는 서로 속도상 미비하기때문에 느리더라도 css를 내부에 넣는게 사용자 경험상 좋은 방식
- 성능 고려 (http요청회수 줄임) 
- 모바일 퍼스트 디자인
- 디자인 패턴 uikit 제작
- 웹 리소스 압축배포 (gZip 백엔드 쪽)
- 프레임워크 도입 검토는 용량이 커지고 획일화. 방법 이지만 필요한 부분은 만들어쓰는게 좋을 거다.
( 부트스트랩 몇개만 쓸건데 다 용량을 가지고 올 필요가 없다.)
- 고해상도 디스플레이 대응
- 마우스 에벤트 핸들러에서 벗어나야 함
- 구형 IE는 우아한 기능 저하로 대처
- 애자일(민첩한) 팀웍이 요구. 프로젝트 초기부터 협업 고려
(빠르고 러프하게 프로토타입을 먼저 만들고 병렬식으로 작업을 진행)

- RWB에서 전략수립. min-height를 통해서 보여줄것과 감출것을 정한다.

#### Fluid grid layout
- target: context= results
24: 16 = 1.5em font-size
700px: 988px = 0.7085 ( *100 = 70.85 width값 )
```javascript
function percent(target, context) {
return target/(context||960)*1000+'%';
}
undefined
percent(340)
"354.1666666666667%"
percent(621)
"646.875%"
```

### 유동 이미지 / 미디어

### clipping images , media
- 아까 img 반응형일때 사이즈를 축소가 아니라 클리핑 기법을 쓴다.
(이때 백엔드쪽에서 이미지 인물이든 뭐든 인식해서 클리핑한다는 알고리즘을 만드는게 좋을 것.)
( background-size : cover )

#### 유동이미지 / 클리핑 이미지
- img , width가 있으면 height:auto를 권장.
- img, width가 있으면 height를 고정값 960px 등 둔다.
- masking 기법 : 쇼핑몰처럼 사진이 중요한 경우에 원본을 그대로 넣고 
부모의 자식으로 사진을 두고 부모에 overflow:hidden으로 처리


#### video 차이
video 4:3 -> 16:9 , 21:9
- video태그: width:100% height:auto max-width 지정시 문제가 없다.
- youtube, vimeo는 iframe 방식
- RWD 시에 문제가 된다.
- 

[RWD google](https://material.google.com/layout/principles.html#)

<link media="screen and (max-width: 480px)"
인라인 media쿼리 다운로드는 받지만
적용은 안된다.

media screen and () 괄호 묶어야함.
[MDN mediaQueries](https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Media_queries)

dpi, ppi 차이
dppx (인쇄쪽 cmyk의 점을 의미 ) 

