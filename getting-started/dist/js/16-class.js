'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Coder = function () {
    function Coder() {
        _classCallCheck(this, Coder);
    }

    _createClass(Coder, [{
        key: 'name',
        value: function name(val) {
            console.log(val);
        }
    }]);

    return Coder;
}();

/**
 * 二、类的使用
 * 
 * 我们已经声明了一个类，并在类里声明了 name 方法，现在要实例化类，并使用类中的方法。
 */

var obj = new Coder();
obj.name('zch'); // zch

/**
 * 三、类的多方法声明
 * 
 * 这里需要注意的是两个方法中间不要写逗号了，还有这里的 this 指类本身，还有要注意 return 的用法。
 */

var Coder2 = function () {
    function Coder2() {
        _classCallCheck(this, Coder2);
    }

    _createClass(Coder2, [{
        key: 'name',
        value: function name(val) {
            console.log(val);
            return val;
        }
    }, {
        key: 'skill',
        value: function skill(val) {
            console.log("name:" + this.name('zch') + ", skill:" + val);
        }
    }]);

    return Coder2;
}();

var obj2 = new Coder2();
obj2.name('zch'); // zch
obj2.skill('Android'); // name:zch, skill:Android

/**
 * 四、类的传参
 * 
 * 在类的参数传递中我们用 constructor() 进行传参。传递参数后可以直接使用 this.xxx 进行调用。
 */

var Coder3 = function () {
    _createClass(Coder3, [{
        key: 'name',
        value: function name(val) {
            console.log(val);
            return val;
        }
    }, {
        key: 'skill',
        value: function skill(val) {
            console.log("name:" + this.name('zch') + ", skill:" + val);
        }
    }]);

    function Coder3(a, b) {
        _classCallCheck(this, Coder3);

        this.a = a;
        this.b = b;
    }

    _createClass(Coder3, [{
        key: 'add',
        value: function add() {
            return this.a + this.b;
        }
    }, {
        key: 'multi',
        value: function multi(x, y) {
            return x * y;
        }
    }]);

    return Coder3;
}();

var obj3 = new Coder3(1, 2);
console.log(obj3.add()); // 3
console.log(obj3.multi(2, 3)); // 6

/**
 * 五、class 的继承
 */

var Htmler = function (_Coder) {
    _inherits(Htmler, _Coder);

    function Htmler() {
        _classCallCheck(this, Htmler);

        return _possibleConstructorReturn(this, (Htmler.__proto__ || Object.getPrototypeOf(Htmler)).apply(this, arguments));
    }

    return Htmler;
}(Coder);

var htmler = new Htmler();
htmler.name('htmler'); // htmler