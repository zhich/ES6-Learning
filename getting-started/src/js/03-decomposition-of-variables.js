/**
 * 03 变量的解构赋值
 */

/**
 * 一、数组的解构赋值
 */
/**
 * 1、简单的数组解构
 */
let [a, b, c] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);

/**
 * 2、数组模式和赋值模式统一
 */
let [x, [y, z], t] = ['z', ['c', 'h'], 112134];
console.log(x);
console.log(y);
console.log(z);
console.log(t);

/**
 * 3、解构的默认值
 */
let [xx = true] = [];
console.log(xx); // true

let [n, m = '帅逼'] = ['zch'];
console.log(n + m); // zch帅逼

// undefined 相当于什么都没有，mm 是默认值。
let [nn, mm = '帅逼'] = ['zch', undefined];
console.log(nn + mm); // zch帅逼

// null 相当于有值，但值为 null，所以 mmm 并没有取默认值，而是解构成了 null .
let [nnn, mmm = '帅逼'] = ['zch', null];
console.log(nnn + mmm); // zchnull

/**
 * 二、对象的解构赋值
 */
/**
 *  1、简单的对象解构
 */
let {
    foo,
    bar
} = {
    foo: 'zch',
    bar: '帅逼~~'
};
console.log(foo + bar);

/**
 * 2、圆括号的使用
 * 如果在解构之前就定义了变量，需要在解构的语句外边加一个圆括号
 */
let ff;
({
    ff
} = {
    ff: 'hello'
});
console.log(ff);

/**
 * 三、字符串解构
 * 字符串被转换成了一个类似数组的对象
 */
const [aa, bb, cc] = 'zch';
console.log(aa);
console.log(bb);
console.log(cc);