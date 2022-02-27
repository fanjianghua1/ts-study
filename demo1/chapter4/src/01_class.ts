/*
 * @Author: your name
 * @Date: 2022-02-09 17:39:56
 * @LastEditTime: 2022-02-27 14:28:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\demo1\chapter4\src\01_class.ts
 */
// 注意除抽象类外  类中的属性需要进行初始化赋值 或  加上赋值断言 ( ! )
// 使用class 关键字
class Person{
    // 可以定义 只读属性 ( readonly ) 只可以读取 不能访问

    // 定义实例属性 实例对象才可以访问
    // readonly name:string = "孙悟空";
    name = '孙悟空';

    // 静态属性  通过类本身访问
    // static readonly age:number =18;
    static age=18;

    // 定义方法 同样有静态方法
    sayHello(){
        console.log('hello',this.name);
    }
}

const p =new Person()
console.log(Person.age,p.name);
p.sayHello();

(function(){
    // 抽象类 ：不能用于创建对象 本身目的就是为了实现 继承
    abstract class Animal{
        name:string;

        constructor(name:string){
            this.name =name
        }

        // 定义抽象方法 没有方法体 且 子类必须重写
        abstract sayHello():void;
        
        doSomething():void{
            console.log('抽象类中的实际方法');
        };
    }
    class Dog extends Animal{
        name!: string;
        age:number;
        
        constructor(name:string,age:number){
            super(name)
            this.age= age
        }
        sayHello(){
            console.log('汪汪');
        }
    }
    let d = new Dog('fjh',16)
    d.sayHello()
    d.doSomething()
})()
