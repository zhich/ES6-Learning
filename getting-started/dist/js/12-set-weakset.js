'use strict';

/**
 * 12 Set 和 WeakSet 数据结构
 * Set 的数据结构是以数组的形式构建的。
 */

/**
 * 一、Set 的声明
 * Set 和 Array 的区别是 Set 不允许内部有重复的值，如果有只显示一个，相当于去重。虽然 Set 很像数组，但是他不是数组。
 */
var setArr = new Set(['zch', 'Android', '安卓', 'zch', 1, '1']);
console.log(setArr); // {"zch", "Android", "安卓", 1, "1"}

/**
 * 二、Set 值的增删查
 */
/**
 * 1、追加 add：
 * 在使用 Array 的时候，可以用 push 进行追加值，Set 稍有不同，它用更语义化的 add 进行追加
 */
var set1 = new Set(['z', 'c', 'h']);
set1.add('明年今日');
console.log(set1); // {"z", "c", "h", "明年今日"}

/**
 * 2、删除 delete：
 * 用 has 进行值的查找，返回的是 true 或者 false
 */
var set2 = new Set(['z', 'c', 'h']);
set2.delete('c');
console.log(set2); // {"z", "h"}

/**
 * 3、查找 has：
 * 用 has 进行值的查找，返回的是 true 或者 false
 */
var set3 = new Set(['z', 'c', 1, '2', 'h']);
console.log(set3.has('c')); // true
console.log(set3.has('1')); // false
console.log(set3.has('2')); // true

/**
 * 4、删除 clear
 */
var set4 = new Set(['z', 'c', 1, '2', 'h']);
set4.clear();
console.log(set4.size); // 0
console.log(set4); // { }

/**
 * 三、set 的循环
 */
/**
 * 1、for…of… 循环：
 */
var set5 = new Set(['z', 'c', 'h']);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = set5[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    console.log(item);
  }

  /**
   * 2、size 属性
   * size 属性可以获得 Set 值的数量
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

var set6 = new Set(['z', 'c', 'h', 1, '1', 1]);
console.log(set6.size); // 5

/**
 * 3、forEach 循环
 */
var set7 = new Set(['z', 'c', 'h']);
set7.forEach(function (val) {
  return console.log(val);
});

/**
 * 4、WeakSet 的声明
 * 这里需要注意的是，如果你直接在 new 的时候就放入值，将报错。
 */
var weakObj = new WeakSet();
var obj = {
  a: 'zch',
  b: '明年今日'
};
weakObj.add(obj);
console.log(weakObj);

// WeakSet 里边的值也是不允许重复的
var weakObj1 = new WeakSet();
var obj1 = {
  a: 'zch',
  b: '明年今日'
};
var obj2 = obj1;

weakObj1.add(obj1);
weakObj1.add(obj2);

console.log(weakObj1);

// 总结：在实际开发中 Set 用的比较多，WeakSet 用的并不多，但是他对传入值必须是对象作了很好的判断，我们灵活应用还是有一定的用处的。