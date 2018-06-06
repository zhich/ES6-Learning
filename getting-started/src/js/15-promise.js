/**
 * 15 promise 对象的使用
 * 
 * ES6 中的 promise 的出现给我们很好的解决了回调地狱的问题，在使用 ES5 的时候，
 * 在多层嵌套回调时，写完的代码层次过多，很难进行维护和二次开发，ES6 认识到了这点问题，
 * 现在 promise 的使用，完美解决了这个问题。那我们如何理解 promise 这个单词在 ES5 的作用那，
 * 你可以想象它是一种承诺，当它成功时执行一些代码，当它失败时执行一些代码。
 * 它更符合人类的行为思考习惯，而不再是晦涩难懂的冰冷语言。
 */

/**
 * 一、promise 的基本用法
 * 
 * promise 执行多步操作非常好用，那我们就来模仿一个多步操作的过程，那就以吃饭为例吧。要想在家吃顿饭，是要经过三个步骤的。
 * 
 * 1. 洗菜做饭。
 * 2. 坐下来吃饭。
 * 3. 收拾桌子洗碗。
 */

 /**
  * 这个过程是有一定的顺序的，你必须保证上一步完成，才能顺利进行下一步。
  * 我们可以在脑海里先想想这样一个简单的过程在 ES5 写起来就要有多层的嵌套。
  * 那我们现在用 promise 来实现。
  */

let state = 1;

function step1(resolve, reject) {
    console.log('1.开始-洗菜做饭');
    if (state == 1) {
        resolve('洗菜做饭--完成');
    } else {
        reject('洗菜做饭--出错');
    }
}

function step2(resolve, reject) {
    console.log('2.开始-坐下来吃饭');
    if (state == 1) {
        resolve('坐下来吃饭--完成');
    } else {
        reject('坐下来吃饭--出错');
    }
}

function step3(resolve, reject) {
    console.log('3.开始-收拾桌子洗碗');
    if (state == 1) {
        resolve('收拾桌子洗碗--完成');
    } else {
        reject('收拾桌子洗碗--出错');
    }
}

new Promise(step1).then(function (val) {
    console.log(val + "----1");
    return new Promise(step2);
}).then(function (val) {
    console.log(val + "----2");
    return new Promise(step3);
}).then(function (val) {
    console.log(val + "----3");
    return val;
});

/**
 * 1.开始-洗菜做饭
 * 洗菜做饭--完成----1
 * 2.开始-坐下来吃饭
 * 坐下来吃饭--完成----2
 * 3.开始-收拾桌子洗碗
 * 收拾桌子洗碗--完成----3
 */

// Promise 在现在的开发中使用率算是最高的，而且面试前端都会考这个对象，大家一定要掌握好。