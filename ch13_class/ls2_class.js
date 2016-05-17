'use strict';
//ES6 Class Method
class Circle {
    constructor(radius){
        this.radius = radius;
        Circle.circleMade++;
    };
    static draw(circle,canvas) {};
    static get circleMade() {
        return !this._count ? 0 : this._count;
    };
    static set circleMade(val){
        this._count = val;
    }
    area(){
        return Math.pow(this.radius,2) * Math.PI;
    };
    get radius(){
        return this._radius;
    }
    set radius(r){
        if(!Number.isInteger(r)){
            throw new Error('radius must be an Integer');
        }
        this._radius = r
    };
}

var c1 = new Circle(5);
