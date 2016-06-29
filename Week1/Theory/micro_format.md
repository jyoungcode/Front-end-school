### Micro Format
- 특정 마크업을 사용하여 "사람이 쉽게 이해 할 수 있는" 정보를 "device도 이해 할 수 있도록" 바꾸는 기술.
- 소프트웨어 or 검색 엔진에서 활용하여 사용 할 수 있는 방법 소개

- 마이크로포맷(microformat)은 웹 페이지 및 RSS와 같은 HTML 또는 XHTML 기반의 정보군에서 사용될 수 있는, 특정 마크업을 사용하여 정보를 메타데이터 형태로 가공하는 방식으로 구현되는 정보 포맷 방식을 뜻한다.

> class: 기본 속성으로 정보를 정의하는 역할
> rel: 현재문서 -(관계)-> 링크문서 (현재 문서가 링크로 연결되는 문서와 어떤 관계 인지 정의)
> rev: 현재문서 <-(관계)- 링크문서 (링크로 연결된 문서가 현재 문서와 어떤 관계 인지 정의).


```html
<address>
  <span>서울시</span>
  <span>강북구</span>
  <span>우이동</span>
</address>
```
- html에 집 주소를 뜻하는 요소는 없어요

```html
<address>
  <span class="region">서울시</span>
  <span class="locality">강북구</span>
  <span class="street-address">우이동</span>
  <a href="http://jyoungcode.github.io" rel="address">http://jyoungcode.github.io</a>
</address>
```

> 마이크로포맷으로 주소임을 파악
> rel 속성은 링크 문서와의 관계를 정의

Microformat : http://microformats.org/get-starteds

> HTML은 모든 것에 의미를 부여하기에 제한적이나 마이크로포맷 방법을 이용하여 스스로 의미를 부여하고 구조화 할 수 있다. 시멘틱 웹 구현 가능
