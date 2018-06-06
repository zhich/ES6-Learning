/**
 * 16 class 类的使用
 * 
 * 我们在 ES5 中经常使用方法或者对象去模拟类的使用，虽然可以实现功能，但是代码并不优雅，
 * ES6 为我们提供了类的使用。需要注意的是我们在写类的时候和 ES5 中的对象和构造函数要区分开来，不要学混了。
 */

/**
 * 一、类的声明
 * 
 * 先声明一个最简单的 Coder 类，类里只有一个 name 方法，方法中打印出传递的参数。
 */

class Coder {
    name(val) {
        console.log(val);
    }
}

/**
 * 二、类的使用
 * 
 * 我们已经声明了一个类，并在类里声明了 name 方法，现在要实例化类，并使用类中的方法。
 */

let obj = new Coder;
obj.name('zch'); // zch

/**
 * 三、类的多方法声明
 * 
 * 这里需要注意的是两个方法中间不要写逗号了，还有这里的 this 指类本身，还有要注意 return 的用法。
 */

class Coder2 {
    name(val) {
        console.log(val);
        return val;
    }
    skill(val) {
        console.log("name:" + this.name('zch') + ", skill:" + val);
    }
}

let obj2 = new Coder2;
obj2.name('zch'); // zch
obj2.skill('Android'); // name:zch, skill:Android

/**
 * 四、类的传参
 * 
 * 在类的参数传递中我们用 constructor() 进行传参。传递参数后可以直接使用 this.xxx 进行调用。
 */

class Coder3 {
    name(val) {
        console.log(val);
        return val;
    }
    skill(val) {
        console.log("name:" + this.name('zch') + ", skill:" + val);
    }
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
    multi(x, y) {
        return x * y;
    }
}

let obj3 = new Coder3(1, 2);
console.log(obj3.add()); // 3
console.log(obj3.multi(2, 3)); // 6

/**
 * 五、class 的继承
 * 
 * 声明一个 htmler 的新类并继承 Coder 类，htmler 新类里边为空，这时候我们实例化新类，
 * 并调用里边的 name 方法。结果也是可以调用到的。
 */

class Htmler extends Coder {

}

let htmler = new Htmler;
htmler.name('htmler'); // htmler