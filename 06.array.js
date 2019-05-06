/**
 * 6.ES6中新增的数组知识
 */
{
	/**
	 * 6.1数组格式转换：ES6所有关于数组的方法均在Array对象里
	 */
	{
		//JSON的数组格式，跟普通JSON对比多一个length属性，该格式可以通过ES6语法转成数组（对象的key值必须从0开始依次递增）
		let json = {
			'0': 'a',
			'1': 'b',
			'2': 'c',
			length: 3
		};
		//Array.from()：将JSON数组转换为数组
		let from = Array.from(json);
		//Array.of()：将用逗号分隔的字符串转换为数组
		let of = Array.of('1', '2', '3', '4');
		//ES5中的eval()则是直接解析括号内的表达式
		let eval1 = eval("['1','2','3','4']");
		console.log(from); //["a", "b", "c"]
		console.log(of); //["1", "2", "3", "4"]
		console.log(eval1); //["1", "2", "3", "4"]
	}
	/**
	 * 6.2数组实例：ES6所有关于数组的实例均接在数组之后
	 */
	{
		//find()：在数组中查找符合条件的元素并返回结果（不改变原数组）
		//传入的匿名函数包含三个参数。value：当前查找的值；index：当前查找的数组索引；arr：当前数组
		//在函数中如果找到符合条件的数组元素就执行return，并停止查找，如果找不到会显示undefined。
		let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		let findArr = arr.find(function (value, index, arr) {
			return value > 5 && index > 6; //8
		});
		//fill()：将数组进行填充（改变原数组）
		//传入三个参数，1.填充的变量 2.开始填充的位置 3.填充到的位置
		let fillArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		fillArr.fill('插入值', 2, 5);
		console.log(findArr); //8
		console.log(fillArr); //[0, 1, "插入值", "插入值", "插入值", 5, 6, 7, 8, 9]
	}
	/**
	 * 6.3数组的遍历：使用for...of循环，比ES5的for循环要高效
	 */
	{
		let arr = ['a', 'b', 'c'];
		//输出arr中的每个元素item
		for (let item of arr) {
			//console.log(item); //a,b,c
		}
		//输出arr中的每个索引index，需要加上数组的keys()实例方法
		for (let index of arr.keys()) {
			//console.log(index); //0,1,2
		}
		//输出arr中的每个元素val和索引index，需要加上数组的entries()实例方法
		for (let [index, val] of arr.entries()) {
			//console.log(index+':'+val); //0：a,1:b,2:c
		}
		//单独调用keys()或entries()实例的next()方法的value值，可以进行手动循环
		let keyList = arr.keys();
		let entriesList = arr.entries();
		console.log(keyList.next().value); //0
		console.log(keyList.next().value); //1
		console.log(keyList.next().value); //2
		console.log(entriesList.next().value); //[0, "a"]
		console.log(entriesList.next().value); //[1, "b"]
		console.log(entriesList.next().value); //[2, "c"]
	}
}