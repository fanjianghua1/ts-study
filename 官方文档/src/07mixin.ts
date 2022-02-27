/*
 * @Author: your name
 * @Date: 2022-02-27 17:11:01
 * @LastEditTime: 2022-02-27 17:20:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\官方文档\src\mixin.ts
 */
class A{
    funcA(){console.log('a');
    }
}
class B{
    funcB(){console.log('b');
    }
}
// class AB implements A,B{
//     public a ='a';
//     public b ='b';
//     funcA(){}
//     funcB(){}
// }

class AB{}
function mixins(base:any,from:any[]) {
    from.forEach(fromItem=>{
        Object.getOwnPropertyNames(fromItem).forEach(key=>{
            base[key] = fromItem[key]
        })
    })
}
mixins(AB.prototype,[A.prototype,B.prototype])
console.dir(AB);



