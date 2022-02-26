"use strict";
/*
 * @Author: your name
 * @Date: 2022-02-10 15:57:58
 * @LastEditTime: 2022-02-10 21:40:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\官方文档\src\01.ts
 */
/**
 * 枚举 : 一组数值有语义化的名字 关键是数值表示一定的含义
 * 就是对象 Color[Color['Green']=0] = 'Green'
 * 猜测：在浏览器中  赋值操作返回用来赋值的值  所以最终是两个属性
 * Color { 0:'Green','Green':0 }
 */
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["pink"] = 1] = "pink";
    Color[Color["black"] = 2] = "black";
})(Color || (Color = {}));
let c = Color.Green;
let cStr = Color[0];
console.log(c, cStr, Color);
/**
 * Object类型是： 接口 可以给它定义任意类型的值
 * any类型是： 关闭了类型检测 ，动态的确定 因此对于不存在的方法不会报错
 * 上述两种都是可以定义任何类型 但是any可以任意调用各种存在、或不存在的方法 ( 因为它是动态决定的 )
 * 而Object类型则不能任意调用方法 即使是其本身存在的
 *
 * object类型是： 所有非引用类型  除 string | number | null | undefined | boolean | symbol
 */
let a = 4;
let o1 = 4;
let number = 4;
let o2 = { name: 'fjh' };
// a.isNotExisted()
// o1.isNotExisted()
// o1.toFixed()
number.toFixed();
// create({name:'fjh'})
// create('abc') //报错
/**
 * void     null    undefined   never
 * void 表示没有任何类型 常用于函数没有返回值 只能赋null、undefined 没有什么意义
 * 在严格模式下 不允许将null赋给void的 同样null 与 undefined 也没有意义
 * 它两作为所有类型的子类型 也就是可以赋值给任何类型的变量 ( 在非严格模式下 ！！！ )
 *
 * never 表示抛出错误 或者 永远没有返回类型  其也作为所有类型的子类型  但是其不能作为any类型的辅助
*/
let v;
// v= null
v = undefined;
let n;
let u;
/**
 * 类型断言： 表示告诉编译器 不需要你做类型检测 我明确知道是什么类型
 * 但只在编译阶段起作用 在jsx语法中 只支持 as 的语法  ( 还有种 <> 的语法)
 * 像其他语言的类型转换 但是不进行数据检查和解构
 */
let someValue = "this is a string";
let strLength = someValue.length;
