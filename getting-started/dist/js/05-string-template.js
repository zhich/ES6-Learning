'use strict';

/**
 * 04 字符串模版
 */

/**
 * 一、字符串模版
 */
var zch = '帅哥';
var tip = '\u6211\u662F' + zch + '\uFF0C\u975E\u5E38\u9AD8\u5174\u8BA4\u8BC6\u4F60\uFF01</br>';
document.write(tip);

tip = '\u6211\u662F<span style = \'color:red\'>' + zch + '</span>\uFF0C\u975E\u5E38\u9AD8\u5174\u8BA4\u8BC6\u4F60\uFF01</br>';
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
var name = '帅哥';
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