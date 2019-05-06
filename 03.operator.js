/**
 * 3.扩展运算符和rest运算符
 */
{
    /**
     * 3.1扩展运算符：用...表示对象或数组里面的每一个元素
     */
    {
        /**
         * 3.1.1用于不固定参数的函数传参
         */
        {
            function extend(...arg) {
                //arg即等同于[...arg]
                console.log(arg); //[1, 2, 3, 4, 5]
            }
            extend(1, 2, 3, 4, 5);
        }
        /**
         * 3.1.2用于对象或数组的深复制
         */
        {
            let extend1 = [1, 2, 3];
            //[...extend1]用于赋值时为深复制，extend1改变不会引起extend2改变
            let extend2 = [...extend1];
            extend1.push(4);
            console.log({ extend1: extend1, extend2: extend2 }); //{"extend1":[1,2,3,4],"extend2":[1,2,3]}
        }
    }
    /**
     * 3.2rest运算符：用...表示对象或数组里面剩余的每一个元素
     */
    {
        /**
         * 3.2.1用于不固定参数的函数传参
         */
        {
            function rest(first, second, ...arg) {
                //arg即等同于[...arg]
                console.log(arg); //[3, 4, 5]
            }
            rest(1, 2, 3, 4, 5);
        }
        /**
         * 3.2.2用于对象或数组的深复制
         */
        {
            let rest1 = [1, 2, 3];
            //[...rest1]用于赋值时为深复制，rest1改变不会引起rest2改变
            let rest2 = [0, ...rest1];
            rest1.push(4);
            console.log({ rest1: rest1, rest2: rest2 }); //{"rest1":[1,2,3,4],"rest2":[0,1,2,3]}
        }
    }
}