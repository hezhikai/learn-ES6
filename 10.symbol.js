/**
 * 10.Symbol类型在对象中的作用
 */
{
    /**
     * Symbol的声明：Symbol相当于全局的原始数据
     * 表示独一无二的值，常用于定义对象的唯一属性名
     */
    {
        var a = new String;
        var b = new Number;
        var c = new Boolean;
        var d = new Array;
        var e = new Object;
        var f = Symbol();
        console.log(typeof (f)); //symbol
        var g = Symbol('jspang');
        console.log(g); //Symbol(jspang)
        console.log(g.toString()); //Symbol(jspang)
    }
    /**
     * Symbol在对象中的应用：用Symbol构建对象的Key，并调用和赋值
     */
    {
        var jspang = Symbol();
        var obj = {
            [jspang]: '技术胖'
        }
        console.log(obj[jspang]); //技术胖
        obj[jspang] = 'web';
        console.log(obj[jspang]); //web
    }
    /**
     * Symbol对象元素的保护作用
     * 对对象中的值进行循环输出时，若不希望全部输出，则可以使用Symbol进行保护
     */
    {
        //未保护时
        let obj1 = { name: 'jspang', skill: 'web', age: 18 };
        for (let item in obj1) {
            console.log(obj1[item]); //jspang、web、18
        }
        //用Symbol进行保护
        let obj2 = { name: 'jspang', skill: 'web' };
        let age = Symbol();
        obj2[age] = 18;
        for (let item in obj2) {
            console.log(obj2[item]); //jspang、web
        }
        console.log(obj2); //{name: "jspang", skill: "web", Symbol(): 18}
        console.log(obj2[age]); //18
    }
}