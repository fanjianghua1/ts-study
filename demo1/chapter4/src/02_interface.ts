/*
 * @Author: your name
 * @Date: 2022-02-09 18:15:38
 * @LastEditTime: 2022-02-09 18:34:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\demo1\chapter4\src\02_interface.ts
 */

(function(){
    // 描述一个对象的类型
    type myType ={
        name:string,
        age:number
    };

    // 接口用来定义一个类结构 : 用来 定义一个类中应该包含哪些属性 和 方法
    // 也可以当成类型声明去使用 并且同名可以重复声明
    interface myInterface{
        name:string;
        age:number;
    }
    interface myInterface{
        gender:string;
    }

    const obj:myType ={
        name:'ss',
        age:28
    }
    const obj1:myInterface={
        name:'mww',
        age:25,
        gender:'nv'
    }
    console.log(obj,obj1);

    // 接口可以在定义类的时候 限制类的结构  ( 类似于抽象类 )
    // 接口中的所有属性都不能有实际的值  只定义结构 而不考虑实际值
    // 不同点： 抽象类中可以有实际的属性赋值 方法也可以是实际方法
    interface myInter{
        name:string;
        sayHello():void;
    }
    class myClass implements myInter{
        name:string;
        constructor(name:string){
            this.name = name
        }
        sayHello(){
            console.log('hello');
        }
    }
})()