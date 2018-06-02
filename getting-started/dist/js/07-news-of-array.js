'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * 07 ES6 中新增的数组知识
 */

/**
 * 一、JSON 数组格式转换
 */
// JSON 的数组格式
var json = {
  '0': 'zch',
  '1': '明年',
  '2': '今日',
  length: 3

  // 这就是一个标准的 JSON 数组格式，跟普通的 JSON 对比是在最后多了一个 length 属性。
  // 只要是这种特殊的 JSON 格式都可以轻松使用 ES6 的语法转变成数组。在 ES6 中绝大部分的 Array 操作都存在于 Array 对象里。
  // 我们就用 Array.from(xxx) 来进行转换。我们把上边的 JSON 代码转换成数组
};var arr = Array.from(json);
console.log(arr);

/**
 * 二、Array.of() 方法
 */
// 把一堆数字转换成数组
arr = Array.of(1, 2, 3, 4);
console.log(arr);

// 字符串也是可以转换
arr = Array.of('z', 'c', 'h');
console.log(arr);

/**
 * 三、find() 实例方法
 */
/**
 * 在 find 方法中我们需要传入一个匿名函数，函数需要传入三个参数：
 * value：表示当前查找的值。
 * index：表示当前查找的数组索引。
 * arr：表示当前数组。
 */
// 在函数中如果找到符合条件的数组元素就进行 return，并停止查找。如果找不到会显示 undefined
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.find(function (value, index, arr) {
  // return value > 5; // 6
  return index == 1; // 2
}));

/**
 * 四、fill() 实例方法
 * fill() 也是一个实例方法，它的作用是把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。
 */
arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 把数组从第二位到第五位用 zch 进行填充。
arr.fill('zch', 2, 5);
console.log(arr);

/**
 * 五、数组的遍历
 */
/**
 * 1、for…of 循环
 * 这种形式比 ES5 的 for 循环要简单而且高效
 */
arr = ['z', 'c', 'h'];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    console.log(item);
  }

  /**
   * 2、for…of 数组索引
   * 有时候开发中是需要数组的索引的，那我们可以使用下面的代码输出数组索引
   */
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

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = arr.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var index = _step2.value;

    console.log(index);
  }

  // 同时输出数组的内容和索引：我们用 entries() 这个实例方法，配合我们的 for…of 循环就可以同时输出内容和索引了。
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = arr.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var _step3$value = _slicedToArray(_step3.value, 2),
        _index = _step3$value[0],
        val = _step3$value[1];

    console.log(_index + "-->" + val);
  }

  /**
   * 六、entries() 实例方法
   * entries() 实例方式生成的是 Iterator 形式的数组，那这种形式的好处就是可以让我们在需要时用 next() 手动跳转到下一个值
   */
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

var list = arr.entries();
console.log(list.next().value); // [0, "z"]
console.log(list.next().value); // [1, "c"]
console.log(list.next().value); // [2, "h"]