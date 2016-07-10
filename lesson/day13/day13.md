그리드 시스템
- https://www.w3.org/TR/css3-grid-layout/
- 그리드 book 안그라픽스 그리드  pdf

< 7/7 포토샵 >
[ 960 grid, custom grid를 css로 옮기는 작업 배우기 ]
1024 -> 1366 이 평균이 되었다.
한국 1920 평균치.

- 실행 : new web , most common 1366 768
높이는 관계없다. srgb

[grid 방법]
unit(column) 12 개면 gutter 11개
하지만 split: gutter를 1/2로 하면

[960px grid gutter 있는것/ 없는것 ]
gutter 없이: unit(column)당 80px 80*12 = 960px
3:1 이면 3*4/80 = 60/20
= 이렇게 하면 오른쪽 끝이 20이 남아서 다시 왼쪽 오른쪽 10으로 나눠 서 배분해야함. 거터를
(Canvas size에서 수정)
이렇게 나누고 나서 해도 되지만
그냥 처음부터 거터를 10으로 잡고 하는거 추천


4:1로 잡으면 4/5*80 =

[사용법]
옆에 rular로 가이드 라인 뽑자


[ 시스템을 쓰지 않고 하는 방법 ]

color file 나누는법?
save swatches
스와치 파일은 브라켓만 됨
파일은 sass로 먼저 불러와서 해야함

브라켓
import color pallete
aco 파일 불러오고
컬러 불러오기

normalize 적용 https://necolas.github.io/normalize.css/
ress 적용 https://gist.github.com/joshuapowell/1680540
