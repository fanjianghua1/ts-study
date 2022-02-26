/*
 * @Author: your name
 * @Date: 2022-02-08 15:36:43
 * @LastEditTime: 2022-02-08 16:00:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\demo1\chapter1\02_basic.ts
 */
// 超集 ：在js基础上新增了类型检测 。 因此对于不同版本的js，都可以转译设置（兼容性强）
// ts可以运行在js的环境下  其本身就是由js所编写的
let num:number = 123
num = 456

let str:string
str = 'abc'

// 如果变量的声明和赋值是同时进行的     ts可以自动对变量进行类型检测
// 
let bool = true
// bool =1
bool = false

// 但是如果只有声明( 隐式 )：   没有显示类型 或 赋值   那么它的类型就是 any
let bool1
bool1 = true

// 实际上 类型检测的好处 体现在js的函数 ( 往往不考虑参数的类型和个数 )
// 但ts中不仅仅对类型的检测     但是还有参数的个数的要求
function sum(a:number,b:number):number{
    return a+b;
}
sum(1,2)



