/**
 * 17 模块化操作
 * 
 * 在 ES5 中我们要进行模块化操作需要引入第三方类库，随着前后端分离，前端的业务日渐复杂，ES6 为我们增加了模块化操作。模块化操作主要包括两个方面。
 *     export : 负责模块的输出。
 *     import : 负责模块的引入。
 */

/**
 * 一、export 的用法：
 * 
 * export 可以让我们把变量，函数，对象进行模块话，提供外部调用接口，让外部进行引用。
 * 先来看个最简单的例子，把一个变量模块化。我们新建一个 temp.js 文件，然后在文件中输出一个模块变量。
 */

export var a = 'zch';

/**
 * 然后可以在 index.js 中以 import 的形式引入。
 */

import {
    a
} from './temp.js';

console.log(a);

// 这就是一个最简单的模块的输出和引入。

/**
 * 二、多变量的输出
 * 
 * 这里声明了 3 个变量，需要把这 3 个变量都进行模块化输出，这时候我们给他们包装成对象就可以了。
 */

var aa = 'zch';
var bb = '明年今日';
var cc = 'Android';

export {
    aa,
    bb,
    cc
}

/**
 * 三、函数的模块化输出
 */

export function add(a, b) {
    return a + b;
}

/**
 * 四、as 的用法
 * 
 * 有些时候我们并不想暴露模块里边的变量名称，而给模块起一个更语义化的名称，这时候我们就可以使用 as 来操作。
 */

var aaa = 'zch';
var bbb = '明年今日';
var ccc = 'Android';

export {
    x as aaa,
    y as bbb,
    z as ccc
}

/**
 * 五、export default 的使用
 * 
 * 加上 default 相当是一个默认的入口。在一个文件里 export default 只能有一个。
 * 我们来对比一下 export 和 export default 的区别
 */

/**
 * 1、export
 */
export var a1 = 'zch';

export function add(a, b) {
    return a + b;
}

// 对应的导入方式
import {
    a,
    add
} from './temp'; // 也可以分开写

/**
 * 2、export defalut
 */
export default var a3 = 'zch';

// 对应的引入方式
import str from './temp';

// 注意： ES6 的模块化不能直接在浏览器中预览，必须要使用 Babel 进行编译之后正常看到结果。