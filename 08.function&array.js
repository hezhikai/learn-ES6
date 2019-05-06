/**
 * 8.ES6中的函数和数组补漏
 */
{
    /**
     * 8.1对象的函数解构
     */
    {
        let json = {
            a: 'jspang',
            b: '技术胖'
        }
        function fun({ a, b = 'jspang' }) {
            console.log(a, b); //jspang 技术胖
        }
        fun(json);
    }
    /**
     * 8.2数组的函数解构
     */
    {
        let arr = ['jspang', '技术胖', '免费教程'];
        function fun(a, b, c) {
            console.log(a, b, c); //jspang 技术胖 免费教程
        }
        fun(...arr);
    }
    /**
     * 8.3 in的用法：用于判断对象或者数组中是否存在某个值的
     */
    {
        let obj = {
            a: 'jspang',
            b: '技术胖'
        }
        console.log('a' in obj);  //true
        //ES5中用length判断数组的弊端，即便length不为0，数组中也可能全是空值
        let arr = [, , , , ,];
        console.log(arr.length); //5
        //in前面的值为数组的下标
        let arr1 = [, , , , ,];
        console.log(0 in arr1); //false
        let arr2 = ['jspang', '技术胖'];
        console.log(0 in arr2);  // true
    }
    /**
     * 8.4数组的遍历方法
     */
    {
        let arr = ['jspang', '技术胖', '前端教程'];
        //forEach：会自动省略为空的数组元素
        arr.forEach((val, index) => console.log(index, val));
        //filter：会输出遍历中返回true的元素组成的新数组（不改变原数组）
        arr.filter(x => console.log(x));
        //every：对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true
        let every = arr.every(x => console.log(x));
        //some：对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true
        let some = arr.some(x => console.log(x));
        //map：在遍历中处理每个元素的值，并用return输出新数组（不改变原数组）
        console.log(arr.map(x => 'web'));
    }
}