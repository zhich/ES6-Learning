'use strict';

/**
 * 13 map 数据结构
 */

/**
 * 一、Json 和 map 格式的对比
 * map 的效率和灵活性更好
 */

/**
 * 先来写一个 JSON，这里我们用对象进行模拟操作。
 */
var json = {
  name: 'zch',
  skill: 'Android'
};
console.log(json.name);

/**
 * 但是这种反应的速度要低于数组和 map 结构。而且 map 的灵活性要更好，你可以把它看成一种特殊的键值对，
 * 但你的 key 可以设置成数组，值也可以设置成字符串，让它不规律对应起来。
 */
var map = new Map();
map.set(json, 'abc');
console.log(map);
console.log(map.get(json)); // abc

/**
 * 当然也可 key 是字符串，value 是对象。
 */
map.set('name', json);
console.log(map);
console.log(map.get('name')); // {name: "zch", skill: "Android"}

/**
 * 二、map 的增删查
 */
/**
 * 1、设值 & 取值
 */
map.set('key', 123);
console.log(map.get('key')); // 123

/**
 * 2、删除 delete
 */
map.delete('key');
map.delete(json);
console.log(map);

/**
 * 3、size 属性
 */
console.log(map.size); // 1

/**
 * 4、查找是否存在 has
 */
console.log(map.has(json)); // false
console.log(map.has('name')); // true
console.log(map.has('key')); // false

/**
 * 5、清除所有元素 clear
 */
map.clear();
console.log(map); // { }

// 总结：map 在现在开发中已经经常使用，它的灵活性和高效性是我们喜欢的