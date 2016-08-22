# Method Chaining
#### 배열의 경우 for~in 문을 사용하면 method chaining을 거치기 때문에 느려진다.
 
####메서드가 객체를 반환하게 되면, 메서드의 반환 값인 객체를 통해 또 다른 함수를 호출할 수 있다. 이러한 프로그래밍 패턴을 메서드 체이닝 (Method Chaining) 이라 부릅니다.

```javascript
var MySquare = function () {
    this._width = 0;
    this._height = 0;
    this._x = 0;
    this._y = 0;
    this._color = "";
};

MySquare.prototype.setWidth = function (_w) {
    this._width = _w;
    return this;
};

MySquare.prototype.setHeight = function (_h) {
    this._height = _h;
    return this;
};
 
MySquare.prototype.setX = function (_x) {
    this._x = _x;
    return this;
};
 
MySquare.prototype.setY = function (_y) {
    this._y = _y;
    return this;
};
 
MySquare.prototype.setColor = function (_c) {
    this._color = _c;
    return this;
};
 
MySquare.prototype.getInfo = function () {
    console.log(this._width);
    console.log(this._height);
    console.log(this._x);
    console.log(this._y);
    console.log(this._color);
};
 
//객체 값 지정 및 호출
var _square = new MySquare();
_square.setWidth(100).setHeight(100).setX(100).setY(100).setColor("BLUE").getInfo();
```

- return 으로 this를 반환하고 메서드를 순서대로 호출하면서 메서드에 대한 객체는 계속 return 된 this가 된다.