'use strict';

/**
 * 05 字符串模版
 */

/**
 * 一、字符串模版
 */
var zch = '明年今日';
var tip = zch + '\uFF0C\u975E\u5E38\u9AD8\u5174\u8BA4\u8BC6\u4F60\uFF01</br>';
document.write(tip);

tip = '<span style = \'color:red\'>' + zch + '</span>\uFF0C\u975E\u5E38\u9AD8\u5174\u8BA4\u8BC6\u4F60\uFF01</br>';
document.write(tip);

/**
 * 二、对运算的支持
 */
var a = 1;
var b = 2;
var result = a + b + '</br>';
document.write(result);

/**
 * 三、字符串查找
 */
/**
 * 1、查找是否存在
 */
var name = '明年';
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