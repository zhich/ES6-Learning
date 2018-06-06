'use strict';

/**
 * 08 ES6 中的箭头函数和扩展
 */

/**
 * 一、默认值
 */
function add1(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  return a + b;
}
console.log(add1(1));

/**
 * 二、主动抛出错误
 */
function add2(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  if (a < 0) {
    throw new Error('This is error');
  }
  return a + b;
}
// console.log(add2(-1));

/**
 * 三、函数中的严谨模式
 * 
 * 使用严谨模式，就不能使用默认值，否则会冲突，编译不过
 */
function add3(a, b) {
  'use strict';

  if (a < 0) {
    throw new Error('This is error');
  }
  return a + b;
}
console.log(add3(1, 2));

/**
 * 四、获得需要传递的参数个数
 * 
 * 这时控制台打印出了 2，但是如果我们去掉严谨模式，并给第二个参数加上默认值的话，这时候 add.length 的值就变成了 1，也就是说它得到的是必须传入的参数。
 */
function add4(a, b) {
  'use strict';

  if (a == 0) {
    throw new Error('This is error');
  }
  return a + b;
}
console.log(add4.length);

/**
 * 五、箭头函数
 * 
 * 箭头函数中不可加 new，也就是说箭头函数不能当构造函数进行使用
 */
/**
 * 1、简单使用
 */
var add5 = function add5(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a + b;
};
console.log(add5(1));

/**
 * 2、{} 的使用
 * 
 * 在箭头函数中，方法体内如果是两句话，那就需要在方法体外边加上 {} 括号
 */
var add6 = function add6(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  console.log('zch');
  return a + b;
};
console.log(add6(1));