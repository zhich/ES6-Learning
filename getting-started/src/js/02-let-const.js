/**
 * 02 let const
 */

/**
 * var : 声明全局变量
 */
var name = "zch";
window.onload = function () {
    console.log(name);
}

/**
 * let : 声明局部变量
 */
{
    let name = "aaa";
}

console.log(name); // name 还是 "zch"

for (let i = 0; i < 10; i++) {
    console.log('循环体中：' + i);
}

// console.log('循环体外：' + i); // 控制台报错

/**
 * const : 声明常量
 */

const x = 1;
// x = 2; // 编译报错
// var x = 3; // 编译报错
console.log(x);