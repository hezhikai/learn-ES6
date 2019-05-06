/**
 * 5.数字操作
 */
{
	/**
     * 5.1二进制和八进制的声明（非ES6新特性）
     */
    {
        //二进制：Binary，前缀为0B或者0b
        let binary = 0B010101;
        //八进制：Octal，前缀为0O或者0o
        let octal = 0O666;
        console.log('二进制：' + binary); //二进制：21
        console.log('八进制：' + octal); //八进制：438
    }
	/**
     * 5.2数字判断和转换：ES6所有关于数字的方法均在Number对象里
     */
    {
        //Number.isFinite()：验证数字，整型或浮点型均返回true，其他时候返回false
        let isFinite = Number.isFinite(11 / 4);
        //Number.isNaN()：验证特殊的非数字NaN
        let isNaN = Number.isNaN(NaN);
        //Number.isInteger()：判断是否为整数
        let isInteger = Number.isInteger(123.1);
        //Number.parseInt()：转换为整数
        let parseInt = Number.parseInt(15.3);
        //Number.parseFloat()：转换为浮点型
        let parseFloat = Number.parseFloat(12.30);
        console.log("Number.isFinite()判断是否为数字：" + isFinite); //true
        console.log("Number.isNaN()判断是否为NaN：" + isNaN); //true
        console.log("Number.isInteger()判断是否为整数：" + isInteger); //false
        console.log("Number.parseInt()转换为整数：" + parseInt); //15
        console.log("Number.parseFloat()转换为浮点型：" + parseFloat); //12.3
    }
	/**
     * 5.3整数取值范围操作
     */
    {
        //最大安全整数：Number.MAX_SAFE_INTEGER，ES5为Math.pow(2,53)-1
        //最小安全整数：Number.MIN_SAFE_INTEGER，ES5为-(Math.pow(2,53)-1)
        //安全整数判断：Number.isSafeInteger，判断该值是否为安全整数
        let isSafeInteger = Number.isSafeInteger(Math.pow(2, 53));
        console.log('最大安全整数Number.MAX_SAFE_INTEGER：' + Number.MAX_SAFE_INTEGER); //9007199254740991
        console.log('最小安全整数Number.MIN_SAFE_INTEGER：' + Number.MIN_SAFE_INTEGER); //-9007199254740991
        console.log('安全整数判断Number.isSafeInteger：' + isSafeInteger); //false
    }
}