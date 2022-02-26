/*
 * @Author: your name
 * @Date: 2022-02-08 15:55:18
 * @LastEditTime: 2022-02-08 16:17:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\demo1\chapter1\03_types.ts
 */
// 可以直接使用 字面量 进行类型声明
// 但是这样类型就为10 也就说不能将其他不是10的值赋给它
let a:10
// a=3

// 常用字面量的是 通过联合类型 ( | )  这样对于几种取值 一目了然
let b:'male'|'female'
b='male'
b='female' 

// any表示任意类型 ， 一个变量设置类型为any 相当于js ( 关闭了ts的类型检测)
// 不建议使用：   显式any 与 隐式any
let c:any
c=123
c='abc'
c=true

// unknown 表示未知类型的值
let d:unknown
d=123
d='abc'
d=true

// 类型是any 可以赋值给任意变量  但是unknown 则会报错
// 估计对于不是string类型的 都会作类型的隐式转换 ( toString() )
let str:string 
str = c
// str =d

// unknown 相当于较安全的 any 。 因此像要赋值操作
// 要么作类型判断       要么作类型断言 ( 指定类型 )
if(typeof d === 'string'){
    str = d
}

// 类型断言 : 两种方式 . 告诉解析器 变量的类型 
str = d as string
str = <string> d

// void   与   never
// void 表示空 表示没有设置返回值的函数  或者返回空的值 
// 但是在null 或 undefined 作为返回值  且 函数没有指定类型 那么隐式认为：返回是 any值
function fn(){
    return null
} 
function fn1():void{
    return null
}

// never 表示永远没有返回值  : 报错  或  死循环 
function fn2():never{
    throw new Error('错误')
}




