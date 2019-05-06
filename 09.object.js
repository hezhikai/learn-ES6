/**
 * 9.ES6中对象
 */
{
    /**
     * 9.1对象赋值：ES6允许把声明的变量直接赋值给对象
     */
    {
        let name = "jspang";
        let skill = 'web';
        var obj = { name, skill };
        console.log(obj); //{name: "jspang", skill: "web"}
    }
    /**
     * 9.2对象Key值构建：在对象中用[]来对对象的key值进行构建
     * 常用于非前台定义key值，如从后台取出对象的key值
     */
    {
        let key = 'skill';
        var obj = {
            [key]: 'web'
        }
        console.log(obj.skill); //"web"
    }
    /**
     * 9.3 Object.is()对象比较：比较两个值是否全等（不局限于对象的值）
     */
    {
        var obj1 = { name: 'jspang' };
        var obj2 = { name: 'jspang' };
        console.log(obj1.name === obj2.name); //true
        console.log(Object.is(obj1.name, obj2.name));  //true
        //===与Object.is()的区别：===为同值相等，is()为严格相等
        console.log(+0 === -0);  //true
        console.log(NaN === NaN); //false
        console.log(Object.is(+0, -0)); //false
        console.log(Object.is(NaN, NaN)); //true
    }
    /**
     * 9.4 Object.assign()对象合并：会改变第一个参数对象的值
     */
    {
        var a={a:'jspang'};
        var b={b:'技术胖'};
        var c={c:'web'};
        let d=Object.assign(a,b,c)
        console.log(d); //{a: "jspang", b: "技术胖", c: "web"}
        console.log(a); //{a: "jspang", b: "技术胖", c: "web"}
    }
}