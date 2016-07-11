###### Front-End Develop SCHOOL

# DAY 07

### CSS 선택자 Quiz

Q. id="parent"인 요소의 자식 중 class="child" 인 요소를 찾아, 그 중 1번째를 제외한 나머지 형제 요소들을 찾는 선택자.

A. 강사가 선택한 Good 답변
- `#parent > .child + .child`
- `#parent > .child ~ .child`

```css
/* 아래와 같이 답변한 사람은 문제를 바로 이해하고 풀이한 사람 */
#parent > .child + .child
#parent > .child ~ .child

/* 아래와 같이 답변한 사람은 결과는 같으나, 향후 오류를 발생할 가능성이 있는 코드를 작성한 사람 */
#parent > .child ~ *
#parent > div ~ .child

/* 아래와 같이 답변한 사람은 진도를 너무 앞서간 사람 */
#parent > div.child:first-child ~ div.child
#parent > .child:first-of-type ~ .child
#parent > .child:first-child ~ div
#parent > .child:nth-of-type(n+2)
```

---

### 진행 내용

- CSS 선택자
- CSS 선택자 우선 순위
- CSS 상속

---

### CSS 선택자

수업 중 정리 예정...

유형 | 선택자 | 설명
--- | --- | ---
**일반 선택자** | E | 요소 선택자
 | E(P) E(C) | 자손 선택자
**속성 선택자** | [attr^="value"] | 시작하는 속성 값이 일치하는 경우 선택
        | [attr$="value"] | 끝나는 속성 값이 일치하는 경우 선택
        | [attr*="value"] | 속성 값을 포함하는 경우 선택
        | [attr|="value"] | 하이픈(-)으로 구분되는 단어가 일치할 때 선택
        | [attr~="value"] | 공백으로 구분되는 단어가 일치할 때 선택
**가상 클래스** | :link | <a> 요소의 기본 상태
         | :visited | <a> 요소의 방문한 상태
         | :hover | 요소에 마우스 커서가 올라간 상태
         | :active | 요소를 마우스 커서로 누른 상태
         | :focus | 요소에 키보드 포커스가 적용된 상태
         | :nth-child(an + b) | 부모 요소의 자식 요소 중, 수학 표현식에 따른 계산 결과를 처리 후 선택
         | :first-child | 부모 요소의 첫번째 자식 요소일 경우 선택
         | :last-child | 부모 요소의 마지막 자식 요소일 경우 선택
         | :only-child | 부모 요소의 유일한 자식 요소일 경우 선택
         | :not(selector) | () 안의 선택자를 제외한 나머지 대상 요소 선택
         | :nth-last-child(an + b) | 부모 요소의 자식 요소 중, 수학 표현식에 따른 계산 결과를 처리 후 선택 (뒤로부터 색인)
         | :nth-of-type(an + b) | 동일한 유형 중, 수학 표현식에 따른 계산 결과를 처리 후 선택
         | :nth-last-of-type(an + b) | 동일한 유형 중, 수학 표현식에 따른 계산 결과를 처리 후 선택 (뒤로부터 색인)
**가상 요소** | :root | 루트 요소 선택
        | :empty | 요소 내 내용이 빈 경우 선택
        | :target | 문서의 URI의 조각 식별자(/#id)를 가진 요소 선택
        | :enabled | 폼 요소 컨트롤 중 활성화
        | :disabled |
        | :checked |
        | :invalid |
        | :read-only |
        | :read-write |
        | :optional |
        | :out-of-range |
         | :lang(language) | 요소에 lang 속성이 language인 것을 선택(속성 선택자가 더 직관적일 수 있다)
**가상 요소** | ::root | 루트 요소 선택
        | ::empty | 요소 내 내용이 빈 경우 선택
        | ::target | 문서의 URI의 조각 식별자(/#id)를 가진 요소 선택
        | ::enabled |
        | ::disabled |
        | ::checked |
        | ::invalid |
        | ::read-only |
        | ::read-write |
        | ::optional |
        | ::out-of-range |

####가상 클래스 선택자
```css
a:focus:hover {
    /* outline은 border와 달리 시각적으로만 표시될 뿐,
    주변 박스에 영향을 끼치지 않는다 */
    outline-offset: 10px;
}
```

```html
<!-- 띄어쓰고 붙었을 때 차이를 잘 알아야 한다 -->
<!-- .wrapper:last-child {} : .wrapper요소가 부모요소의 마지막 요소라면 선택-->
<!-- .wrapper :last-child {} : .wrapper요소 하위의 모든 마지막 요소-->
<div class="wrapper">
        <!-- .wrapper :last-child {} -->
        <div class="inner">
                <!-- .wrapper :last-child {} -->
                <ul>
                        <li>item-1</li>
                        <li>item-2</li>
                        <!-- .wrapper :last-child {} -->
                        <li>item-3</li>
                </ul>
        </div>
</div>
```

```css
/* :not(selector) */
/* 연결해서 사용가능 */
.parent :not(a):not(p) {
        border: 1px solid red;
}
/* a와 p요소 빼고 보더스타일이 들어간다 */
```

####가상 요소 선택자

 - 가상으로 요소를 만들어 준다.
 - 하위호환을 위해 콜론(:)을 하나만 붙일 수도 있다

**Dropcap Design**

```html
<h2>Dropcap design</h2>
<p class="dropcap">Lorem ipsum dolor ...</p>
<p class="dropcap">Lorem ipsum dolor ...</p>
<p class="dropcap">Lorem ipsum dolor ...</p>
```
```css
.dropcap::first-letter {
        font-size: 300%
        color: red;
}
```

**::before와 ::after**

```html
<div class="msg">
        <p>Lorem ipsum dolor sit amet, <a href="...">consectetur</a> adipisicing elit. <abbr title="Placeat...">Placeat</abbr> quaerat quasi animi tempore eveniet eos dolore laudantium officia, eligendi quo!</p>
</div>
```
```css
/* 가상요소이며 이미지로써 보여지기 때문에 스크린리더에 읽히지 않는다. 가상 클래스 선택자[:first-child]로 선택되지 않는다 */
.msg::before {
        color: #605887;
        content: 'hey!!';
}

.msg ::after {
        color: #605887;
        content: 'hands up';
}

/* 접근성 관점에서 링크의 주소, 축약어를 출력하는 스타일 */
@media print {
        a::after {
                content: '(' attr(href) ')';
                color: red;
        }

        abbr::after {
                content: '(' attr(title) ')';
        }
}

/* 사용자가 커서로 클릭 후, 텍스트 블록을 선택할 경우 가상으로 요소를 만들어 디자인 */
/* 그룹핑이 되지 않아 코드를 두번 써주어야하는 불편함이 있다 */
/* 반드시 콜론(:)을 두개 붙여야 한다 */
::-moz-selection {
        background: red;
        color: #fff;
}
::selection {
        background: red;
        color: #fff;
}
```

---

###CSS 상속

 - CSS는 상위요소로부터 하위요소로 속성에 따라 상속되기도 한다.(서체, 자간, 어간, 행간, 색상 등)
 - 공간 관련 속성은 상속되지 않는다.(마진, 패딩, 디스플레이 등)

---

###CSS RESET

 - [Eric Meyer Rese CSS](http://meyerweb.com/eric/tools/css/reset/)

이후 수업에서는 Normalize CSS를 사용할 계획

---

#### 선택자 참고 자료

- [W3C, Selectors Level 3](https://www.w3.org/TR/selectors/#selectors)
- [MDN, Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

---

### 기타/참고

- [ISO Language Codes](http://www.w3schools.com/tags/ref_language_codes.asp)
- [CSS 레이아웃을 배웁시다](http://ko.learnlayout.com/toc.html)
