1. top/bottom padding/margin의 %는 부모 블럭의 ​*width*​ 기준이다.
2. height의 %는 부모 블럭의 ​*height*​ 기준이다
3. 포지션의 top/bottom의 %는 부모 블럭의 ​*width*​ 기준이다.
4.  border에는 % 값을 사용할 수 없다.

5. 컨텐츠 크기가 늘어나는데 제한을 두는 법 

### box-sizing
- box-sizing: content-box|border-box|initial|inherit;

- content-box (기본값): padding이 있으면 그 영역까지 취급
( width= width속성+2*(margin+border+padding) 
height= height속성+2*(margin+border+padding))

- border-box: padding이 있어도 취급안함 딱 원래 border 자리까지만 지킴 그래서 크기가 늘어나지 않는다.
( width= width속성+2*(margin)
height= height속성+2*(margin) )

- 그러나 content-box, border-box 둘 다 width와 height값에는 영향을 받는다.

[box-sizing](http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-sizing)

[css-tricks](https://css-tricks.com/box-sizing/) 


### border-radius
- border-radius: 왼쪽위 오른쪽위 오른쪽아래 왼쪽아래
(border-radius: 50px 40px 20px 10px)
