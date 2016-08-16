# 웹 접근성 (Web - Accessibility)
- 어떠한 사용자(장애인, 고령자 포함), 어떠한 기술 환경에서도 전문적인 능력 없이 웹 사이트에서 제공하는 모든 정보에 **비장애인과 동등하게 접근·이용**할 수 있도록 보장해 주는 것

### 대체 텍스트( non-text content )
1. '확인' 이라는 텍스트 이미지가 들어가면 alt에 해당 텍스트를 넣어야 한다.

2. 게시물 이미지의 경우 
게시물 이미지 제목을 이미지의 내용 or 간단한 묘사( 이미지의 주제, 목적 ) 

3. 좋은 예

```html
<div class="banner-list-img-last"> 
<a title="새창에서 링크 열림" target="_blank" href="링크 주소"> 
<img src="/html/imgs/pres/08236_recruit.jpg" alt="2012 대한민국취업박람회, 고용노동부주최 일시 : 2012년 10월30일(화)~31일(수) 10시~17시, 장소: aT센터(서초구 양재동)제1전시장 사이트 방문 바로가기" /> 
</a> 
</div>
```

- 단순히 제목만을 대체텍스트로 제공해서는 안된다.

4. 의미없는 이미지에도 대체텍스트를 제공해야한다.?

```html
<dl> 
<dt><img src="/images/txt01.gif" alt="종합민원안내" /></dt> 
<dd> 
<p><img src="/images/img02.gif" alt="" /><img src="/images/txt02.gif" alt="민원안내" /></p> 
<p><img src="/images/img03.gif" alt="" /><img src="/images/txt03.gif" alt="여권민원" /></p> 
</dd> 
</dl>
```

### 자막 제공 

### 명료성 

### 색에 무관한 콘텐츠 인식 use of color 


1. 웹 접근성 2.0 과 2.1의 차이

2. 웹접근성 준수 의무 있는 자가 의무를 지키지 않은 경우, 만사상 책임, 형사상처벌, 행정상 진정 또는 과태료 책임 부담.

- 차별행위를 당한 피해자는 민사상 가처분신청, 금지청구 또는 손해배상청구 가능.

[ KWCAG 2.0 가이드 라인 
13개 지침, 22개 검사항목 ]

[BBC 웹 접근성(색맹을 위한 적합 컨텐츠 제공 ui 만들자~](http://www.bbc.co.uk/accessibility/#)


- 다음 글꼴변경, 글자확대, 축소 기능 제공
[다음 글꼴 변경 UI제공](http://media.daum.net/entertain/newsview?newsid=20120406090144363)


