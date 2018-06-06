'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 11 Symbol 在对象中的作用
 */

/**
 * 一、声明 Symbol
 * 
 * 先回顾一下数据类型，在最后再看看 Symbol 如何声明，并进行一个数据类型的判断。
 */
var a = new String();
var b = new Number();
var c = new Boolean();
var d = new Array();
var e = new Object();
var f = Symbol();
console.log(typeof d === 'undefined' ? 'undefined' : _typeof(d)); // object
console.log(typeof f === 'undefined' ? 'undefined' : _typeof(f)); // symbol

/**
 * 二、Symbol 的打印
 */
var g = Symbol('zch');
console.log(g); // 打印红色字体 Symbol(zch) 
console.log(g.toString()); // 打印黑色字体 Symbol(zch)

/**
 * 三、Symbol 在对象中的应用
 * 
 * 用 Symbol 构建对象的 Key，并调用和赋值。
 */
var key = Symbol();
var obj = _defineProperty({}, key, 'zch');
console.log(obj[key]); // zch
obj[key] = 'Android';
console.log(obj[key]); // Android

/**
 * 四、Symbol 对象元素的保护作用
 * 
 * 在对象中有很多值，但是循环输出时，并不希望全部输出，那我们就可以使用 Symbol 进行保护。
 */
// 没有进行保护的写法：
obj = {
  name: 'zch',
  skill: 'Android',
  age: 26
};
for (var item in obj) {
  console.log(obj[item]);
}

// 现在我不想别人知道我的年龄，这时候我就可以使用 Symbol 来进行循环保护。
obj = {
  name: 'zch',
  skill: 'Android'
};
var age = Symbol();
obj[age] = 26;
for (var _item in obj) {
  console.log(obj[_item]);
}
console.log(obj); // {name: "zch", skill: "Android", Symbol(): 26}
console.log(obj[age]); // 26