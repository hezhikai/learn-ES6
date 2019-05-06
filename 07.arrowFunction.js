/**
 * 7.ES6中的箭头函数和扩展
 */
{
	/**
     * 7.1函数的扩展
     */
    {
        //函数参数默认值：用=符号设置，这样函数可以不传（或者传undefined）设置了默认值的参数
        function add(a, b = 1, c) {
            if (a == 0) {
                //用throw new Error()可以抛出错误，并不再执行下面语句
                throw new Error('a传0时主动抛出异常')
            }
            return a + b + c;
        }
        //函数中的严格模式：在函数内部最上边使用'use strict'，相当于针对函数整体使用
        //但严格模式下的函数不能使用默认值
        function strictAdd(a, b) {
            return a + b + c;
        }
        console.log('函数参数设置默认值：' + add(1, undefined, 2)); //4
        // console.log('主动抛出异常：'+add(0,undefined,2));
        //函数需要传递的参数个数，用函数名.length获取
        //在非严格模式且参数设置的默认值，则设置默认值之后的参数均不计入总数
        console.log('获得需要传递的参数个数：' + add.length); //1
        console.log('获得需要传递的参数个数（严格模式下）：' + strictAdd.length); //2
    }
	/**
     * 7.2箭头函数
     */
    {
        //箭头函数的传参包含在()中，=>后面表示调用时执行的语句。
        //若只有一条语句且return该语句的结果，则直接接上该语句
        var add = (a, b = 1) => a + b;
        //有多条语句时需要加上{}，且return不能省略
        var add1 = (a, b = 1) => {
            console.log('多条语句');
            return a + b;
        }
        //箭头函数中不可加new，也就是说箭头函数不能当构造函数进行使用
        console.log('替换成箭头函数：' + add(1)); //2
    }
}