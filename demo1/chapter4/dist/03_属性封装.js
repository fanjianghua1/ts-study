"use strict";
/*
 * @Author: your name
 * @Date: 2022-02-09 18:35:55
 * @LastEditTime: 2022-02-09 20:24:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\demo1\chapter4\src\03_属性封装.ts
 */
(function () {
    // 定义一个人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // getName(){
        //     return this._name;
        // }
        // setName(name:string){
        //     this._name = name
        // }
        get name() {
            console.log('get name 执行');
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        setAge(age) {
            if (age >= 0) {
                this._age = age;
            }
        }
    }
    const p = new Person('zyy', 18);
    /**
    *   现在属性是在对象中设置的  属性可以被任意的修改  会导致对象中的数据不安全
    *   通过get 和 set 方法控制类的属性的读写   这样会更安全 可以作 数据劫持 处理
    *   getter setter 成为属性存取器
    */
    // p.name = 'fjh'
    // p.age = -18
    p.name = 'fjh';
    console.log(p.name);
})();
