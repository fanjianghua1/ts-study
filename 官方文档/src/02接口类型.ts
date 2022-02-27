/*
 * @Author: your name
 * @Date: 2022-02-10 17:16:35
 * @LastEditTime: 2022-02-27 14:58:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\官方文档\src\02接口类型.ts
 */
/**
 * 接口就好比一个名字： 描述特定结构的对象  好比说充电器接口：有type-c 和 苹果两种 它们的外形结构则不同
 * 
 * 并不像其他语言： 会说某个类实现了接口  在ts中， 接口的作用只是用来检测值是否满足 该对象中对于类型声明的条件 ( 只要满足必要条件即可 ！！！) 
 * 可以通过两种函数的调用发现： 第一种 不能加sex属性，虽然其达到了必要条件，但是由于这种形式参数类型是 接口obj 类型 而接口中并没有sex属性
 * 第二种 能加sex属性 因为其本身作为另一类型 但匹配 接口obj 类型时 ，其达到了必要条件 
 */
interface obj{
    name:string;
    age:number;
}
function getInfo(p:obj) {
    console.log(p.name,p.age);
}
getInfo({name:'fjh',age:18})
let myPer = {name:'zyy',age:18,sex:'nv'}
getInfo(myPer)

/**
 * 可选属性 与 只读属性
 * 可选属性：部分参数不知道有没有  ( ? ) 虽然是可选的 ， 但作为不存在该类型中的属性被使用时 会报错 
 * 不报错有三种解决方案：
 * 一种是：     类型断言  告诉编译器不用检测，我知道它类型
 * 一种是：     字符串索引签名 . [任意名字:string]:想要标识属性的类型 
 * 一种是：     新创建一个变量类型  可只要满足接口条件即可   
 * 只读属性：一旦声明、赋值后，就不能在修改 ( readonly )
 */
interface SquareConfig {
    color?:string;
    width?:number;
    [anyProps:string]:any
}
function createSquare(config:SquareConfig):{color:string,area:number} {
    let newSquare = {color:'white',area:100}
    if(config.color){
        newSquare.color = config.color
    }
    if(config.width){
        newSquare.area = config.width * config.width
    }    
    return newSquare
}
console.log(createSquare({color:'red'}));

console.log(createSquare({color:'black',owner:'fjh'} as SquareConfig));
console.log(createSquare({color:'green',owner:'fjh'}));
let myConfig = {color:'pink',owner:'fjh'}
console.log(createSquare(myConfig))

interface point{
    readonly x:number
}
let p:point ={x:100}
// p.x=1

/**
 * 其他接口类型：
 *      函数类型。定义一个  调用签名  . 是一个只有参数列表和返回值类型的函数 定义
 * 但在实际赋值时，缺省了函数参数也是可以的
 *      
 *      可索引类型。定义一个    索引签名 . 是索引类型 及 相应索引返回值类型 定义
 * 两种索引签名：字符串 或 数字  可以同时使用两种类型的索引 
 * 但是数字索引的返回值必须是字符串索引返回值类型的子类型  因为数字索引 会转为 字符串索引的形式 ( [0] => ['0'] )
 * 还可以对索引签名设置只读属性 
 */
interface fn{
    (a:number,b:number):number;
}
let add:fn = function(x1:number,x2:number) {
    return x1+x2
}
console.log(add(1,2))

//  这种索引签名表示 通过数字索引访问 得到字符串类型的返回值
interface index{
    [index:number]:string
}
let arr:index = ['a','b','c']

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; 

/**
 * 类类型 。 Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。
 * 接口描述了类的公共部分，而不是公共和私有两部分。
 * 同上述签名 ： 构造器签名： 构造函数的参数 描述
 * 一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内
 * 解决方法：将构造函数 与 实现接口中的内容分成两个接口 。 实现要实现的接口 ，而对于构造函数签名所在的接口 则是通过函数类型哪种形式 ( 这样就避免了实现类 )
 * 
 * 
 * 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 
 * 接口同样会继承到类的private和protected成员。
 * 
 * 可以在允许使用接口的地方使用类 ！！！
 */
interface myClass {
    name:string;
    doSomething():void;
}
class mc implements myClass{
    name:string;
    constructor(value:string){
        this.name = value
    }
    doSomething(){
        console.log(this.name,' 类实现接口');
    }
}
let cp = new mc('zyy')
cp.doSomething()


// interface Clock {
//     new (hour:number):void;
//     tick():void;
// }
// class clock implements Clock{
//     constructor(h:number){}
//     tick(){
//         console.log('跳');
//     }
// }

interface ClockConstructor{
    new (hour:number):Clock;
}
interface Clock{
    tick():void;
}
function create(cor:ClockConstructor,hour:number):Clock{
    return new cor(hour)
}   
class clock implements Clock{
    constructor(_h:number){}
    tick(){
        console.log('跳');
    }
}
console.log(create(clock,1))

// 类的接口的继承 （ 提高了复用性 ）
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

// 混合类型 ： 一个对象既作函数 又 作为对象 使用
interface mix {
    (start:number):void;
    time:number;
    reset():void;
}

function getMix():mix {
    let m = <mix>function(start:number) {console.log(start);
    };
    m.time = 1;
    m.reset = function (){};
    return m
}
let mix1 = getMix()
mix1(1)
console.log(mix1.time);
