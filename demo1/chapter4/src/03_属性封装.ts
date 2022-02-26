/*
 * @Author: your name
 * @Date: 2022-02-09 18:35:55
 * @LastEditTime: 2022-02-09 20:24:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\demo1\chapter4\src\03_属性封装.ts
 */
(function(){
    // 定义一个人的类
    class Person{
        // ts 可以在属性前 添加属性的修饰符
        /**
         * public 修饰的属性 可以在任意位置访问( 修改 ) 默认值
         * protected 保护属性  只能在当前类 或 子类 中 使用
         * private 私有属性 只能在类内部进行修改
         * 通过类中的方法 间接的对属性的修改
         */
        private _name:string;
        private _age:number;
        constructor(name:string,age:number){
            this._name = name
            this._age =age
        }
        // getName(){
        //     return this._name;
        // }
        // setName(name:string){
        //     this._name = name
        // }
        get name(){
            console.log('get name 执行');
            return this._name;
        }
        set name(value:string){
            this._name = value
        }
        setAge(age:number){
            if(age>=0){
                this._age = age
            } 
        }
    }
    const p = new Person('zyy',18)
    
    /**
    *   现在属性是在对象中设置的  属性可以被任意的修改  会导致对象中的数据不安全
    *   通过get 和 set 方法控制类的属性的读写   这样会更安全 可以作 数据劫持 处理
    *   getter setter 成为属性存取器 
    */
    // p.name = 'fjh'
    // p.age = -18
    
    p.name = 'fjh'
    console.log(p.name);
})()