/**
 * 04 字符串模版
 */

/**
 * 一、字符串模版
 */
let zch = '明年今日';
let tip = `${zch}，非常高兴认识你！</br>`;
document.write(tip);


tip = `<span style = 'color:red'>${zch}</span>，非常高兴认识你！</br>`;
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
let name = '明年';
tip = 'zch明年今日';
document.write(tip.includes(name)); // true

/**
 * 2、判断开头是否存在
 */
document.write(tip.startsWith('zch')); // true

/**
 * 3、判断结尾是否存在
 */
document.write(tip.endsWith('明年今日')); // true

/**
 * 四、复制字符串
 */

document.write('zch'.repeat(3));

// 还有很多 ...