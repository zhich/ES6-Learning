/**
 * 04 字符串模版
 */

/**
 * 一、字符串模版
 */
let zch = '帅哥';
let tip = `我是${zch}，非常高兴认识你！</br>`;
document.write(tip);


tip = `我是<span style = 'color:red'>${zch}</span>，非常高兴认识你！</br>`;
document.write(tip);

/**
 * 二、对运算的支持
 */
let a = 1;
let b = 2;
let result = `${a+b}</br>`;
document.write(result);

/**
 * 三、字符串查找
 */
/**
 * 1、查找是否存在
 */
let name = '帅哥';
tip = 'zch是帅哥一枚';
document.write(tip.includes(name)); // true

/**
 * 2、判断开头是否存在
 */
document.write(tip.startsWith('zch')); // true

/**
 * 3、判断结尾是否存在
 */
document.write(tip.endsWith('帅哥一枚')); // true

/**
 * 四、复制字符串
 */

document.write('zch'.repeat(3));

// 还有很多 ...