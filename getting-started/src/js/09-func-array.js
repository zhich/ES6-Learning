/**
 * 09 ES6 中的函数和数组补漏
 */

/**
 * 一、对象的函数解构
 * 
 * 我们在前后端分离时，后端经常返回来 JSON 格式的数据，前端的美好愿望是直接把这个 JSON 格式数据当作参数，
 * 传递到函数内部进行处理。ES6 就为我们提供了这样的解构赋值。
 */
let json = {
    a: 'zch',
    b: '明年今日'
}

function fun({
    a,
    b = 'hhh'
}) {
    console.log(a, b);
}
fun(json);

/**
 * 二、数组的函数解构
 */
let arr = ['z', 'c', 'h'];

function fun2(a, b, c) {
    console.log(a, b, c);
}
fun2(...arr);

/**
 * 三、in 的用法
 * 
 * in 是用来判断对象或者数组中是否存在某个值的
 */
/**
 * 1、对象判断
 */
let obj = {
    a: 'zch',
    b: '明年今日'
}
console.log('a' in obj); // true
console.log('c' in obj); // false

/**
 * 2、数组判断
 */
// 如 ES5 用 length 属性判断数组是否为有元素，为 0 表示没有数组元素。但是这并不准确，或者说真实开发中有弊端。
let arr2 = [, , , , , ];
console.log(arr2.length); // 输出 5 ,但是数组中其实全是空值

// 用 ES6 的 in 就可以解决这个问题
console.log(0 in arr2); // 输出 false，0 指的是数组下标位置是否为空

arr2 = ['zch', , , , , ];
console.log(0 in arr2); // 输出 true
console.log(1 in arr2); // 输出 false

/**
 * 四、数组的遍历方法
 */
/**
 * 1、forEach
 */
let arr3 = ['z', 'c', , 'h'];
arr3.forEach((val, index) => console.log(index, val)); // 自动省略为空的数组元素，输出 0 "z" , 1 "c" , 3 "h"

/**
 * 2、filter
 */
arr3.filter(x => console.log(x)); // 输出 z c h

/**
 * 3、some
 */
arr3.some(x => console.log(x)); // 输出 z c h

/**
 * 4、map
 */
// map 在这里起到一个替换的作用
console.log(arr3.map(x => 'web')); // 输出 ["web", "web", empty, "web"]

/**
 * 五、数组转换字符串
 * 
 * 在开发中我们经常会碰到把数组输出成字符串的形式，我们今天学两种方法，要注意两种方法的区别
 */
/**
 * 1、join() 方法
 * 
 * join() 方法就是在数组元素中间，加了一些间隔
 */
let arr4 = ['z', 'c', 'h'];
console.log(arr4.join('|')); // 输出 z|c|h

/**
 * 2、toString() 方法
 * 
 * 转换时只是是用逗号隔开了
 */
console.log(arr4.toString()); // 输出 z,c,h