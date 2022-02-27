"use strict";
function getInfo(p) {
    console.log(p.name, p.age);
}
getInfo({ name: 'fjh', age: 18 });
let myPer = { name: 'zyy', age: 18, sex: 'nv' };
getInfo(myPer);
function createSquare(config) {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
console.log(createSquare({ color: 'red' }));
console.log(createSquare({ color: 'black', owner: 'fjh' }));
console.log(createSquare({ color: 'green', owner: 'fjh' }));
let myConfig = { color: 'pink', owner: 'fjh' };
console.log(createSquare(myConfig));
let p = { x: 100 };
let add = function (x1, x2) {
    return x1 + x2;
};
console.log(add(1, 2));
let arr = ['a', 'b', 'c'];
let myArray = ["Alice", "Bob"];
class mc {
    constructor(value) {
        this.name = value;
    }
    doSomething() {
        console.log(this.name, ' 类实现接口');
    }
}
let cp = new mc('zyy');
cp.doSomething();
function create(cor, hour) {
    return new cor(hour);
}
class clock {
    constructor(_h) { }
    tick() {
        console.log('跳');
    }
}
console.log(create(clock, 1));
let square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
function getMix() {
    let m = function (start) {
        console.log(start);
    };
    m.time = 1;
    m.reset = function () { };
    return m;
}
let mix1 = getMix();
mix1(1);
console.log(mix1.time);
