/*
 * @Author: your name
 * @Date: 2022-02-09 20:25:22
 * @LastEditTime: 2022-02-27 14:36:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\demo1\chapter4\src\04-泛型.ts
 */

// function fn(a:number):number{
//     return a;
// }

/**
 * 在定义函数 或 类时 ， 如果遇到类型不确定 就可以使用泛型
 * 只有在函数执行时 才能确定 
 * 可以同时指定多个 
 */

function fn<K>(a:K):K{
    return a 
}
// 可以直接调用具有泛型的函数 但这种是自动的类型检测 ( 不一定都能正确检测 )
let result = fn(10)

// 可以手动指定
let result1 = fn<string>('abc')

function fn1<K,T>(a:K,b:T):T{
    return b
}
fn1<number,string>(1,'a')

interface Inter{
    length:number;
}

// T extends Inter ： 表示泛型T 必须是 Inter实现类 （子类）
function fn2<T extends Inter> (a:T):number{
    return a.length
}

class myClass<T>{
    name:T;
    constructor(name:T){
        this.name =name
    }
}
const mc=new myClass<string>('fjh')

