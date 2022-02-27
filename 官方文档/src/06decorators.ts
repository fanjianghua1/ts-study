/*
 * @Author: your name
 * @Date: 2022-02-27 16:37:15
 * @LastEditTime: 2022-02-27 16:46:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ts\官方文档\src\decorators.ts
 */
function setName(){
    console.log('get name');
    return function(target:any) {
        console.log('set name'); 
    }
}
function setAge() {
    console.log('get age');
    return function(target:any) {
        console.log('set age'); 
    }
}
@setName()
@setAge()
class classDec{
    
}