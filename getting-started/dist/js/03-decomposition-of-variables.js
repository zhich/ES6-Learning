'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * 03 变量的解构赋值
 */

/**
 * 一、数组的解构赋值
 */
/**
 * 1、简单的数组解构
 */
var a = 1,
    b = 2,
    c = 3;

console.log(a);
console.log(b);
console.log(c);

/**
 * 2、数组模式和赋值模式统一
 */
var x = 'z',
    y = 'c',
    z = 'h',
    t = 112134;

console.log(x);
console.log(y);
console.log(z);
console.log(t);

/**
 * 3、解构的默认值
 */
var _ref = [],
    _ref$ = _ref[0],
    xx = _ref$ === undefined ? true : _ref$;

console.log(xx); // true

var _ref2 = ['zch'],
    n = _ref2[0],
    _ref2$ = _ref2[1],
    m = _ref2$ === undefined ? '明年今日' : _ref2$;

console.log(n + m); // zch明年今日

// undefined 相当于什么都没有，mm 是默认值。
var nn = 'zch',
    _undefined = undefined,
    mm = _undefined === undefined ? '明年今日' : _undefined;

console.log(nn + mm); // zch明年今日

// null 相当于有值，但值为 null，所以 mmm 并没有取默认值，而是解构成了 null .
var nnn = 'zch',
    _ref3 = null,
    mmm = _ref3 === undefined ? '明年今日' : _ref3;

console.log(nnn + mmm); // zchnull

/**
 * 二、对象的解构赋值
 */
/**
 *  1、简单的对象解构
 */
var _foo$bar = {
  foo: 'zch',
  bar: '明年今日~~'
},
    foo = _foo$bar.foo,
    bar = _foo$bar.bar;

console.log(foo + bar);

/**
 * 2、圆括号的使用
 * 如果在解构之前就定义了变量，需要在解构的语句外边加一个圆括号
 */
var ff = void 0;
var _ff = {
  ff: 'hello'
};
ff = _ff.ff;

console.log(ff);

/**
 * 三、字符串解构
 * 字符串被转换成了一个类似数组的对象
 */

var _zch = 'zch',
    _zch2 = _slicedToArray(_zch, 3),
    aa = _zch2[0],
    bb = _zch2[1],
    cc = _zch2[2];

console.log(aa);
console.log(bb);
console.log(cc);