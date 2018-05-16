/**
 * 06 ES6 数字操作
 */

/**
 * 二进制声明
 */
let binary = 0b010101;
console.log(binary); // 21

/**
 * 八进制声明
 */
let b = 0o66;
console.log(b); // 54

/**
 *一、数字判断和转换
 */
/**
 * 1、数字验证 Number.isFinite(xx) . 只要是数字，不论是浮点型还是整形都会返回 true，其他时候会返回 false
 */
let a = 11 / 4;
console.log(Number.isFinite(a)); // true
console.log(Number.isFinite('zch')); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(undefined)); // false

/**
 * 2、NaN 验证
 * NaN 是特殊的非数字，可以使用 Number.isNaN() 来进行验证。下边的代码控制台返回了 true
 */
console.log(Number.isNaN(NaN)); // true

/**
 * 3、判断是否为整数 Number.isInteger(xx)
 */
let x = 123.1;
console.log(Number.isInteger(x)); // false

/**
 * 4、整数转换 Number.parseInt(xxx) 和浮点型转换 Number.parseFloat(xxx)
 */
let y = '12.3';
console.log(Number.parseInt(y)); // 12
console.log(Number.parseFloat(y)); // 12.3

/**
 * 二、整数取值范围操作
 */
// 整数的操作是有一个取值范围的，它的取值范围就是2的53次方。我们先用程序来看一下这个数字是什么
let num = Math.pow(2, 53) - 1;
console.log(num); // 9007199254740991
// 在我们计算时会经常超出这个值，所以我们要进行判断，ES6 提供了一个常数，叫做最大安全整数，以后就不需要我们计算了。

/**
 * 1、最大安全整数
 */
console.log(Number.MAX_SAFE_INTEGER);

/**
 * 2、最小安全整数
 */
console.log(Number.MIN_SAFE_INTEGER);

/**
 * 3、安全整数判断isSafeInteger(num)
 */
num = Math.pow(2, 53);
console.log(Number.isSafeInteger(num)); // false