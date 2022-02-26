"use strict";
/*
 * @Author: your name
 * @Date: 2022-02-10 22:01:35
 * @LastEditTime: 2022-02-12 23:12:08
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
let x = 3;
// 最佳通用类型x1的类型为：( number | null )[] 给出一个兼容所有候选类型的类型
let x1 = [0, 1, null];
class Animal {
    constructor(value) {
        this.name = value;
    }
}
class Dog extends Animal {
    constructor(val) {
        super(val);
    }
}
class Cat extends Animal {
    constructor(val) {
        super(val);
    }
}
//Dog Cat 就属于共享 Animal的候选类型 但是它们并不属于Animal类型 （ 也就是说Animal 不会作为最佳通用类型 ）
// x2的类型是 (Dog | Cat)[]
let x2 = [new Dog('wang'), new Cat('miao')];
// 最佳通用类型有4个候选者：Animal，Rhino，Elephant和Snake。 当然， Animal会被做为最佳通用类型。
// 此时上下文类型 为 最佳通用类型
function createZoo() {
    return [new Dog('fjh'), new Cat('zyy')];
}
let named;
let source = { name: 'fjh', age: 18 };
named = source;
