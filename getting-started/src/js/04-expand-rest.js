/**
 * 04 扩展运算符和 rest 运算符
 */

/**
 * 一、对象扩展运算符（...）
 */
/**
 * 1、简单使用
 */
function test(...arg) {
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]); // 多了也不会报错，输出 undefined
}

test(1, 2, 3);

/**
 * 2、扩展运算符的用处
 */
let arr1 = ['z', 'c', 'h'];
let arr2 = arr1; // arr2 直接指向 arr1 的内存堆
console.log(arr2); //  ["z", "c", "h"]
arr2.push('g');
console.log(arr2); // ["z", "c", "h", "g"]
console.log(arr1); // ["z", "c", "h", "g"]

let arr3 = ['z', 'c', 'h'];
let arr4 = [...arr3]; // 把 arr3 的所有元素赋值给 arr4
console.log(arr4); //  ["z", "c", "h"]
arr4.push('g');
console.log(arr4); // ["z", "c", "h", "g"]
console.log(arr3); //  ["z", "c", "h"]

/**
 * 二、rest运算符
 */
/**
 * 1、简单使用
 */
function demo(first, ...arg) {
    console.log(arg.length); // 3
}

demo(1, 2, 3, 4);

/**
 * 2、如何循环输出rest运算符
 */
function demo2(first, ...arg) {
    for (let val of arg) { // for…of 的循环可以避免我们开拓内存空间，增加代码运行效率
        console.log(val);
    }
}

demo2(1, 2, 3, 4);