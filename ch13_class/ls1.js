'use strict';
//ES5 method
function Circle(radius) {
    this.radius = radius;
    console.log(Circle.circleMade);
    Circle.circleMade++;

}

Circle.draw = function draw(circle, canvas) {
};
Object.defineProperty(Circle, 'circleMade', {
    get: function () {
        return this._count ? 0 : this._count;
    },
    set: function (val) {
        this._count = val;
    }
});
Circle.prototype = {
    area: function area() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
};
Object.defineProperty(Circle.prototype, 'radius', {
    get: function () {
        return this._radius;
    },
    set: function (radius) {
        if (!Number.isInteger(radius)) {
            throw new Error('radius must be an Integer');
        }
        this._radius = radius;
    }
});

var c1 = new Circle(10);
var c3 = new Circle(12);
//var c2 = new Circle(10.5);
//var c2 = {};
//c2.__proto__ = Circle.prototype;
//c2.radius = 6.6;
console.log(Circle.circleMade);
