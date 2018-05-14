'use strict';

/**
 * 04 扩展运算符和rest运算符
 */

/**
 * 一、对象扩展运算符（...）
 */
/**
 * 1、简单使用
 */
function test() {
  console.log(arguments.length <= 0 ? undefined : arguments[0]);
  console.log(arguments.length <= 1 ? undefined : arguments[1]);
  console.log(arguments.length <= 2 ? undefined : arguments[2]);
  console.log(arguments.length <= 3 ? undefined : arguments[3]); // 多了也不会报错，输出 undefined
}

test(1, 2, 3);

/**
 * 2、扩展运算符的用处
 */
var arr1 = ['z', 'c', 'h'];
var arr2 = arr1; // arr2 直接指向 arr1 的内存堆
console.log(arr2); //  ["z", "c", "h"]
arr2.push('g');
console.log(arr2); // ["z", "c", "h", "g"]
console.log(arr1); // ["z", "c", "h", "g"]

var arr3 = ['z', 'c', 'h'];
var arr4 = [].concat(arr3); // 把 arr3 的所有元素赋值给 arr4
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
function demo(first) {
  console.log(arguments.length <= 1 ? 0 : arguments.length - 1); // 3
}

demo(1, 2, 3, 4);

/**
 * 2、如何循环输出rest运算符
 */
function demo2(first) {
  for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arg[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var val = _step.value;
      // for…of 的循环可以避免我们开拓内存空间，增加代码运行效率
      console.log(val);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

demo2(1, 2, 3, 4);