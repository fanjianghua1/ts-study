/*
 * @Author: your name
 * @Date: 2022-02-08 16:18:39
 * @LastEditTime: 2022-02-08 16:51:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\demo1\chapter1\04_types.ts
 */

// 对象. 但是js中对象概念很普遍  ( 这种object声明不常用 ) 所以更关注的是对象中属性的类型
let a:object;
a ={name:'fjh'}
a=[1,2]
a=function(){}

// 用来指定对象中可以包含哪些属性 ： 类型   个数
// 可选属性 : 有 或 没有  
let b:{name:string,age?:number}
b={name:'fjh'}

// 任意属性 : [] 表示除string是必须要求的 你可以任意增添属性名 且类型不作检测
let c:{name:string,[propName:string]:unknown}
c={name:'fjh',age:18,sex:'nan'}

// 类型声明  函数声明：参数 和 返回值 的声明
// 设置 函数结构 的类型声明  
// 语法： (形参：类型 ，形参：类型 ... ) => 返回值:类型
let d:(a:number,b:number)=>number;
d = function(a,b){
    return a+b
}

// 数组 。同上述 ：关注数组中存储的类型
let e:(string|number|boolean)[]
e= ['a','b','c',1,true]

let f:Array<number|string>
f=[1,2,3,'a']

// 元组 tuple 就是固定长度的数组
// 语法： [类型 ，类型 ]
let g:[string,number]
g=['a',1]

// 枚举  所以可能的类型一一列举出来
enum Gender{
    male=0,
    female=1
}
let h:{name:string,gender:Gender}
h={
    name:'fjh',
    gender:Gender.male   
}

// & 表示同时
let i:{name:string} & {age:number}
i={
    name:'fjh',
    age:18
}

// 适用于对象的属性的用法  下述写法类型与never 也就是永远都没有对应类型的值 赋
// let j:string & number

// 类型的别名  简化类型的使用 
type myType =  1|2|3|4|5
let j:myType


