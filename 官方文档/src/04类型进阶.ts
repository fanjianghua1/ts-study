/*
 * @Author: your name
 * @Date: 2022-02-10 22:01:35
 * @LastEditTime: 2022-02-12 23:32:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\官方文档\src\04类型进阶.ts
 */
/**
 * 类型推论：类型在哪里被确定的
 * 
 * 没有明确指定类型的地方 类型推论会帮助提供类型 
 * 
 * 几个表达式中推断类型 会使用这些表达式的类型推断出最合适的类型 ( 从候选类型中 选出 ) ： 最佳通用类型
 * 最终的通用类型取自候选类型，有些时候候选类型共享相同的通用类型，但是却没有一个类型能做为所有候选类型的类型
 * 
 * 类型推论也可能按照相反的方向进行。 这被叫做 “  按上下文归类  ”
 * 按上下文归类会发生在表达式的类型与所处的位置相关时
 */
// x 的类型 为 number
let x= 3

// 最佳通用类型x1的类型为：( number | null )[] 给出一个兼容所有候选类型的类型
let x1= [0,1,null]

class Animal{
    name:string;
    constructor(value:string){
        this.name = value
    }
}
class Dog extends Animal{
    constructor(val:string){
        super(val)
    }
}
class Cat extends Animal{
    constructor(val:string){
        super(val)
    }
}
//Dog Cat 就属于共享 Animal的候选类型 但是它们并不属于Animal类型 （ 也就是说Animal 不会作为最佳通用类型 ）
// x2的类型是 (Dog | Cat)[]
let x2 = [new Dog('wang'),new Cat('miao')]


// 最佳通用类型有4个候选者：Animal，Rhino，Elephant和Snake。 当然， Animal会被做为最佳通用类型。
// 此时上下文类型 为 最佳通用类型
function createZoo(): Animal[] {
    return [new Dog('fjh'), new Cat('zyy')];
}


/**
 * 类型兼容性 ： 结构性 而 不是名义性 。 这里理解只要长得像 且 满足条件 即可
 * 鸭式辩型法（结构子类型） 自己接口是什么，是一种约定。所以，所谓的“鸭式辩型法”就是去检测这种约定是否遵守而已。
 * 递归的比较子元素 只有目标类型的成员属性会一一检查
 */
// let named:Named ={name:'fjh',age:18} 是错误的因为多一个属性 之前采用类型断言的方式去解决 
//而这里使用的方式之前也用过。现在知道叫做类型兼容性
// 从兼容性去考虑 source 具有 name属性 （ 就像一个动物有和鸭子一样的行为 ） 则可以赋值
interface Named{
    name:string;
}
let named:Named={name:'zyy'};
let source = {name:'fjh',age:18}
named = source

// 这里 f1 虽然缺了一个参数 但是对于一个函数功能而言：缺省参数的例子是常见的 
// 但反过来 f1 
let f1 = (a:number)=>0
let f2 =(b:number,c:string)=>0
// f1=f2  // error
f2=f1

//枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的
enum Status { Ready, Waiting };
enum Color1 { Red, Blue, Green };

let sta = Status.Ready;
// sta = Color1.Green;  // Error



//类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。
//比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内

// 泛型：
// x和y是兼容的，因为它们的结构使用类型参数时并没有什么不同
interface Empty<T> {
}
let em1: Empty<number>;
let em2: Empty<string>;

// em1 = em2;  // OK, because y matches structure of x 但在严格模式下是错误的