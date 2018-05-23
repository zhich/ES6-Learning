/**
 * 07 ES6 中新增的数组知识
 */

/**
 * 一、JSON 数组格式转换
 */
// JSON 的数组格式
let json = {
    '0': 'zch',
    '1': '明年',
    '2': '今日',
    length: 3
}

// 这就是一个标准的 JSON 数组格式，跟普通的 JSON 对比是在最后多了一个 length 属性。
// 只要是这种特殊的 JSON 格式都可以轻松使用 ES6 的语法转变成数组。在 ES6 中绝大部分的 Array 操作都存在于 Array 对象里。
// 我们就用 Array.from(xxx) 来进行转换。我们把上边的 JSON 代码转换成数组
let arr = Array.from(json);
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
for (let item of arr) {
    console.log(item);
}

/**
 * 2、for…of 数组索引
 * 有时候开发中是需要数组的索引的，那我们可以使用下面的代码输出数组索引
 */
for (let index of arr.keys()) {
    console.log(index);
}

// 同时输出数组的内容和索引：我们用 entries() 这个实例方法，配合我们的 for…of 循环就可以同时输出内容和索引了。
for (let [index, val] of arr.entries()) {
    console.log(index + "-->" + val);
}

/**
 * 六、entries() 实例方法
 * entries() 实例方式生成的是 Iterator 形式的数组，那这种形式的好处就是可以让我们在需要时用 next() 手动跳转到下一个值
 */
let list = arr.entries();
console.log(list.next().value); // [0, "z"]
console.log(list.next().value); // [1, "c"]
console.log(list.next().value); // [2, "h"]