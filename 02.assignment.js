/**
 * 2.变量的解构赋值：即从数组和对象中提取值，对变量进行赋值
 */
{
    /**
     * 2.1数组的解构赋值：按顺序匹配，且左右结构必须一致
     * 可以给数组中的变量设默认值，且默认值+''为''，+undefined为默认值，+null为null
     */
    {
        let [a, [b, c], d, e = 4, f = 5, g = 6] = [0, [1, 2], 3, '', undefined, null];
        console.log({ a: a, b: b, c: c, d: d, e: e, f: f, g: g }); //{"a":0,"b":1,"c":2,"d":3,"e":"","f":5,"g":null}
    }
    /**
     * 2.2对象的解构赋值：根据对象名匹配
     */
    {
        let { aa, bb } = { bb: 22, aa: 11 };
        console.log({ aa: aa, bb: bb }); //{aa: 11, bb: 22}
    }
    /**
     * 2.3字符串的解构赋值：拆分字符串，依次匹配单一字符串
     */
    {
        let [aaa, bbb, ccc, ddd, eee] = 'apples';
        console.log({ aaa: aaa, bbb: bbb, ccc: ccc, ddd: ddd, eee: eee }); //{aaa: "a", bbb: "p", ccc: "p", ddd: "l", eee: "e"}
    }
    //2.4若先定义(var/let/const)后解构赋值，则必须在解构赋值的表达式外加上圆括号
    {
        let aaaa, bbbb;
        ({ aaaa, bbbb } = { aaaa: 111, bbbb: 222 });
        console.log({ aaaa: aaaa, bbbb: bbbb }); //{aaaa: 111, bbbb: 222}
    }
}