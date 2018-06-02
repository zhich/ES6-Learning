'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 10 ES6 中对象
 */

/**
 * 一、对象赋值
 * ES6 允许把声明的变量直接赋值给对象。
 */
var name = 'zch';
var skill = 'Android';
var obj = {
  name: name,
  skill: skill
};
console.log(obj); // {name: "zch", skill: "Android"}

/**
 * 二、对象 Key 值构建
 * 有时候我们会在后台取出 key 值，而不是我们前台定义好的，这时候我们如何构建我们的 key 值呢？
 * 可以用[ ] 的形式，进行对象的构建。
 */
var key = 'skill';
obj = _defineProperty({}, key, 'Android');
console.log(obj.skill); // Android

/**
 * 三、自定义对象方法
 * 对象方法就是把对象中的属性，用匿名函数的形式变成方法。这个在以前就有应用，这里只是简单的复习一下。
 */
obj = {
  add: function add(a, b) {
    return a + b;
  }
};
console.log(obj.add(1, 2)); // 3

/**
 * 四、Object.is() 对象比较
 */

/**
 * 1、对象的比较方法,以前进行对象值的比较，经常使用 === 来判断
 */
var obj1 = {
  name: 'zch',
  age: '26'
};
var obj2 = {
  name: 'zch',
  age: 26
};
console.log(obj1.name === obj2.name); // true
console.log(obj1.age === obj2.age); // false

/**
 * 2、ES6 为我们提供了 is 方法进行对比
 */
console.log(Object.is(obj1.name, obj2.name)); // true

/**
 * 3、=== 和 is方法的区别
 * === 为同值相等，is() 为严格相等。
 */
console.log('------------------------------');

console.log(+0 === -0); // true
console.log(NaN === NaN); // false
console.log(1 === '1'); // false
console.log(undefined === undefined); // true
console.log(undefined === 'undefined'); // false
console.log(Object.is(+0, -0)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(1, '1')); // false
console.log(Object.is(undefined, undefined)); // true
console.log(Object.is(undefined, 'undefined')); // false

/**
 * 五、Object.assign() 合并对象
 * 操作数组时我们经常使用数组合并，那对象也有合并方法，那就是 assgin()
 */
var a = {
  a: 'aaa'
};
var b = {
  b: 'bbb'
};
var c = {
  c: 'ccc'
};
var d = Object.assign(a, b, c);
console.log(d); // {a: "aaa", b: "bbb", c: "ccc"}