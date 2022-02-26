/*
 * @Author: your name
 * @Date: 2022-02-12 23:39:52
 * @LastEditTime: 2022-02-13 00:26:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\官方文档\src\05高级类型.ts
 */
/**
 * 交叉类型：多个类型合并为一个类型 包含了所需的所有类型的特性
 * Person & Serializable & Log同时是 Person 和 Serializable 和 Log 这个类型的对象可以同时拥有了这三种类型的成员
 * 使用场景：Mixins、不适合用类来定义。
 */
interface Foo {
    foo: string;
    name: string;
}
interface Bar {
    bar: string;
    name: string;
}
const sayHello = (obj: Foo & Bar) => { };
sayHello({ foo: "foo", bar: "bar",name:'zyy'})

/**
 * 联合类型表示一个值可以是几种类型之一。 
 * 我们用竖线（ |）分隔每个类型，所以 number | string | boolean表示一个值可以是 number， string，或 boolean
 */
interface Bird {
    fly():void;
    layEggs():void;
}

interface Fish {
    swim():void;
    layEggs():void;
}

function getSmallPet():Fish|Bird{
    let fish:Fish={swim(){},layEggs(){}};
    return fish
}

let pet = getSmallPet();
pet.layEggs(); // okay
// pet.swim();    // errors

/**
 * 联合类型适合于那些值可以为不同类型的情况。 但当我们想确切地了解是否为 Fish时怎么办？ 采用类型保护
 * 
 * 类型保护与区分类型
 * 类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型
 * 要定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个 类型谓词：
 * 每次都写一个函数会麻烦 
 * 
 * 但ts可以以将      typeof v === "typename"   或   typeof v ！== "typename"  识别为一个类型保护
 * "typename"必须是 "number"， "string"， "boolean"或 "symbol"。 但是TypeScript并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。
 * 
 * instanceof类型保护 ：
 * 1. 右侧要求是一个构造函数 且 此构造函数的 prototype属性的类型不为 any
 * 2. 构造签名所返回的类型的联合（没看懂）
 */
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}


/**
 * 配置了   --strictNullCheck:
 * 可选参数会被自动地加上 | undefined
 * 当你声明一个变量时，它不会自动地包含 null或 undefined
 * JavaScript的语义，TypeScript会把 null和 undefined区别对待
 */
function f(x: number, y?: number) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
// f(1, null); // error, 'null' is not assignable to 'number | undefined'

/**
 * 类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型
 * 同：接口一样，类型别名也可以是泛型 
 * 不同：接口创建了一个新的名字，可以在其它任何地方使用。 类型别名并不创建新名字
 */
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

/**
 * 合并单例类型，联合类型，类型保护和类型别名来创建一个叫做 可辨识联合
 * 可辨识联合 :也称做 标签联合或 代数数据类型。 可辨识联合在函数式编程很有用处 :
 * 1. 具有普通的单例类型属性— 可辨识的特征。
 * 2. 一个类型别名包含了那些类型的联合— 联合
 * 3. 此属性上的类型保护
 */
//kind属性称做 可辨识的特征或 标签。 其它的属性则特定于各个接口 ( 单例类型 ： 可辨识的类型 )
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

// 联合到一起：
type Shape1 = Square | Rectangle | Circle;

// 使用类型保护 最终为可辨识联合
function area(s: Shape1) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}

/**
 * 索引类型: ，编译器就能够检查使用了动态属性名的代码
 * keyof T， 索引类型查询操作符。 对于任何类型 T， keyof T的结果为 T上已知的公共属性名的联合 会自动随属性的添加 而 改变！！！
 * T[K]， 索引访问操作符. person['name'] 具有类型 Person['name'] 对于泛型使用:  T[K] 匹配 person['name']  T:Person K:string （ 该操作符作用 ）
 */
interface Person {
    name: string;
    age: number;
}
let personProps: keyof Person; // 'name' | 'age'

/**
 * 映射类型 ：一个常见的任务是将一个已知的类型每个属性都变为可选的：
 * 内部使用了 for .. in：
 * 1. 类型变量 K，它会依次绑定到每个属性
 * 2. 字符串字面量联合的 Keys，它包含了要迭代的属性名的集合
 * 3. 属性的结果类型
 */
type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };