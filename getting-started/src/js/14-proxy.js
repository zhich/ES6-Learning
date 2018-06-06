/**
 * 14 用 Proxy 进行预处理
 * 
 * Proxy 的存在可以让我们给函数加上类似钩子函数的代码，也可以理解为在执行方法前预处理一些代码。可以简单的理解为它是函数或者对象的生命周期
 */

/**
 * 一、先来回顾一下定义对象的方法
 */
var obj = {
    add: function (a, b) {
        return a + b;
    },
    name: 'zch'
};
console.log(obj.add(1, 2)); // 3
console.log(obj.name); // zch

/**
 * 二、声明 Proxy
 */
/**
 * 1、声明 Proxy 的基本形式
 * 
 * 需要注意的是这里是两个花括号，第一个花括号就相当于我们方法的主体，
 * 后边的花括号就是 Proxy 代理处理区域，相当于我们写钩子函数的地方。
 */
new Proxy({}, {});

/**
 * 2、把上边的 obj 对象改成我们的 Proxy 形式
 */
var pro = new Proxy({
    add: function (a, b) {
        return a + b;
    },
    name: 'zch'
}, {
    get: function (target, key, property) {
        console.log('come in get');
        return target[key];
    }
});

// 可以在控制台看到结果，先输出了 come in get , 相当于在方法调用前的钩子函数
console.log(pro.add(1, 7)); // come in get  -->  8
console.log(pro.name); // come in get  -->  zch

/**
 * 3、get 属性
 * 
 * get 属性是在你得到某对象属性值时预处理的方法，他接受三个参数
 *     target：得到的目标值
 *     key：目标的 key 值，相当于对象的属性
 *     property：这个不太常用，用法还在研究中，还请大神指教。
 */

/**
 * 4、set 属性
 * 
 * set 属性是指你要改变 Proxy 属性值时，进行的预先处理。它接收四个参数。
 *     target：目标值。
 *     key：目标的 key 值。
 *     value：要改变的值。
 *     receiver：改变前的原始值。
 */

var myPro = new Proxy({
    add: function (a, b) {
        return a + b;
    },
    name: 'zch'
}, {
    get: function (target, key) {
        console.log('come in get');
        return target[key];
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key} = ${value}`);
        return target[key] = value;
    }
});

console.log('---------------------');

console.log(myPro.name); // come in get  -->  zch
myPro.name = '明年今日'; // setting name = 明年今日
console.log(myPro.name); // come in get  -->  明年今日

/**
 * 三、apply 的使用
 * 
 * apply 的作用是调用内部的方法，它使用在方法体是一个匿名函数时。看下边的代码。
 */
let target = function () {
    return 'zch';
};
var handler = {
    apply(target, ctx, args) {
        console.log('do apply');
        return Reflect.apply(...arguments);
    }
}

console.log('---------------------');
var myPro1 = new Proxy(target, handler);
console.log(myPro1()); // do apply  -->  zch