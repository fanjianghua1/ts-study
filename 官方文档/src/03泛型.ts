/*
 * @Author: your name
 * @Date: 2022-02-10 20:48:24
 * @LastEditTime: 2022-02-10 21:38:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\官方文档\src\03泛型.ts
 */
/**
 * 泛型：广泛的类型 。 目的是为了组件的复用性 使得组件不仅仅只接受一种数据类型 
 * 而是可以在未来的使用中可以接受不同的类型
 * 
 * 需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了：
 * 类型变量，它是一种特殊的变量，只用于表示类型而不是值。
 * 
 * 第二种方法更普遍。利用了 类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
 * 但第二种 在复杂情况下 编译器可能无法正确的推论出类型
 * 
 * 注意，无法创建泛型枚举和泛型命名空间
 * 
 * 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
*/
function identity(arg:number):any {
    return arg
}
function identify1<T>(arg:T):T{
    return arg
}
function identify2<T>(arg:T[]):T[] {
    console.log(arg.length)
    return arg
}
console.log(identify1<string>('abc'))
console.log(identify1<number>(123))
console.log(identify1(true));
console.log(identify2([1,2,3,'a']));


// 第一种使用箭头函数的形式使用
function identify3<T>(arg:T):T{
    return arg
}
let myIdentify:<U>(args:U)=>U= identify3

//第二种使用带有   调用签名  的对象使用
let myIdentify1:{<U>(args:U):U} = identify3

// 因此引出接口的创建 （ 使用泛型 ）
interface Identify{
    <T>(arg:T):T
}
let myIdentify2:Identify = identify3

interface Identify1<T>{
    (arg:T):T
}
let myIdentify3:Identify1<number> = identify3

// 照着官方文档的写法 但是官方文档应该是非严格模式 也就是说在严格模式下
// 类的属性 必须要有默认值 或 在构造器中完成初始化 ( 注意这里的类型T : unknown !!!)
class Identify_class<T>{
    value!:T;
    add!:(a:T,b:T)=>T;
}
let ic = new Identify_class()
ic.value = 1
// console.log(ic.add(ic.value,2))

ic.value = '!!!'
// console.log(ic.add(ic.value,'???'))

/**
 * 类型变量继承了接口 因此泛型不在是所有类型 而是符合约束的类型
 * 又因为在使用接口的地方都能使用类 所以可以用类来实现
 */
interface Lengthwise {
    length: number;
}
class Lengthwise1 implements Lengthwise{
    length!:number;
    age!:number;
}
function loggingIdentity<T extends Lengthwise1>(arg: T): T {
    console.log(arg.length,arg.age);  // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity({length:3,age:18})