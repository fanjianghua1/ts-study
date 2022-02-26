"use strict";
/*
 * @Author: your name
 * @Date: 2022-02-09 18:15:38
 * @LastEditTime: 2022-02-09 18:34:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\demo1\chapter4\src\02_interface.ts
 */
(function () {
    const obj = {
        name: 'ss',
        age: 28
    };
    const obj1 = {
        name: 'mww',
        age: 25,
        gender: 'nv'
    };
    console.log(obj, obj1);
    class myClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('hello');
        }
    }
})();
