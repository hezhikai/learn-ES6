/**
 * 1.新的声明方式：var(全局变量);let(局部变量);const(局部常量)
 * 当一个变量只在一个内部作用域(function、for循环等)里使用，建议使用let
 */
{
    var stateV = 'var1';
    let stateL = 'let1';
    const stateC = 'const1';
    /**
     * 外部作用域赋值
     */
    console.log({ 'var': stateV, 'let': stateL, 'const': stateC }); //{var: "var1", let: "let1", const: "const1"}
    {
        var stateV = 'var2';
        let stateL = 'let2';
        //若直接stateC = 'const2';则会报错，因为该常量不可变
        //但在局部作用域下重新用const声明则不会报错，相当于该作用域下新声明的常量
        const stateC = 'const2';
        /**
         * 内部作用域赋值
         */
        console.log({ 'var': stateV, 'let': stateL, 'const': stateC }); //{var: "var2", let: "let2", const: "const2"}
    }
    //在同一个作用域下用let/const再次声明同一个变量/常量，则会报错，如let stateV/stateL/stateC='const3';
    //在同一个作用域下用var再次声明同一个局部变量/常量，则会报错，如var stateL/stateC='const3';
    /**
     * 外部作用域再次获取值
     */
    console.log({ 'var': stateV, 'let': stateL, 'const': stateC }); //{var: "var2", let: "let1", const: "const1"}
}
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
/**
 * 4.字符串模版
 */
{
    /**
     * 4.1字符串拼接：使用连接号`（tab键上方的键)代替引号，引用变量时须使用${变量名}的形式。
     */
    {
        let variable = '这是一个变量';
        let text = `下面插入一个变量：${variable}`;
        //字符串模板也支持HTML标签，连接号内也可以换行（表示空格）
        let htmlContent = `这是带HTML标签的字符串模板：<b>加粗的字</b><p style='color:red;'>红色的字</p>接下来通过br换行<br>这是换行后的内容。
                           连接号内的回车换行相当于空格`;
        //${}结构中可以进行任何js表达式的运算
        let num = 1;
        let stringNum = '2';
        let tatol = `这是数字1和字符串'2'的合计运算：${num + parseInt(stringNum)}`;
        console.log(text); //"下面插入一个变量：这是一个变量"
        document.getElementsByClassName('withHtmlString')[0].innerHTML = htmlContent;
        console.log(tatol); //"这是数字1和字符串'2'的合计运算：3"
    }
    /**
     * 4.2字符串查找：判断字符串中是否含有目标字符串，并返回true或false。
     */
    {
        //includes方法用于判断字符串中是否含有目标字符串，并返回true或false。
        let includesTarget = 'includes目标字符串';
        let includesString = 'this is a includes目标字符串';
        let includesResult = includesString.includes(includesTarget);
        //startsWith方法用于判断字符串中是否以目标字符串开头，并返回true或false。
        let startsWithTarget = 'startsWith目标字符串';
        let startsWithString = 'startsWith目标字符串只有在开头才被识别';
        let startsWithResult = startsWithString.startsWith(startsWithTarget);
        //endsWith方法用于判断字符串中是否以目标字符串结尾，并返回true或false。
        let endsWithTarget = 'endsWith目标字符串';
        let endsWithString = '只有在结尾才被识别endsWith目标字符串';
        let endsWithResult = endsWithString.endsWith(endsWithTarget);
        console.log('includes:' + includesResult); //includes:true
        console.log('startsWith:' + startsWithResult); //startsWith:true
        console.log('endsWith:' + endsWithResult); //endsWith:true
    }
    /**
     * 4.3字符串复制：用repeat方法让目标字符串多倍复制
     */
    {
        let target = '目标字符串|';
        let targetRepeat = target.repeat(5);
        console.log(targetRepeat); //"目标字符串|目标字符串|目标字符串|目标字符串|目标字符串|"
    }
}
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
/**
 * 11.Set和WeakSet数据结构：Set的数据结构是以类似于数组的形式构建的
 */
{
    /**
     * Set的声明：Set不允许内部有重复的值，如果有只显示一个，相当于去重
     */
    {
        let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
        console.log(setArr); //Set {"jspang", "技术胖", "web"}
    }
    /**
     * Set值的增删查
     */
    {
        let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
        console.log(setArr); //Set {"jspang", "技术胖", "web"}
        //使用add进行单个元素追加
        setArr.add('前端职场');
        console.log(setArr); //{"jspang", "技术胖", "web", "前端职场"}
        //使用delete进行单个元素删除
        setArr.delete('前端职场');
        console.log(setArr); //Set {"jspang", "技术胖", "web"}
        //使用has进行匹配单个元素，并返回true/false
        console.log(setArr.has('jspang')); //true
        //使用clear进行清空整个数据
        setArr.clear();
        console.log(setArr); //{}
    }
    /**
     * set的循环和size属性
     */
    {
        let setArr = new Set(['jspang', '技术胖', 'web', 'jspang']);
        //for…of…循环
        for (let item of setArr) {
            console.log(item); //jspang、技术胖、web
        }
        //forEach循环
        setArr.forEach((value) => console.log(value)); //jspang、技术胖、web
        //size属性：可以获得Set值的数量
        console.log(setArr.size); //3
    }
    /**
     * WeakSet的声明
     */
    {
        //若直接在new的时候就放入值，将报错
        let weakObj = new WeakSet();
        let obj = { a: 'jspang', b: '技术胖' }
        weakObj.add(obj);
        console.log(weakObj); //{Object { a: 'jspang', b: '技术胖' }}
        //WeakSet里边的值也是不允许重复的
        //但只针对于同一个栈（引用的内存空间），不同栈即使值相同也视为不同的
        let obj1 = { a: 'jspang', b: '技术胖' };
        let obj2 = obj;
        weakObj.add(obj1);
        weakObj.add(obj2);
        console.log(weakObj); //{Object { a: 'jspang', b: '技术胖' }, Object { a: 'jspang', b: '技术胖' }}
    }
}
/**
 * 12.map数据结构：map的效率和灵活性比json更好
 */
{
    /**
     * 12.1 map的声明：可以看成一种特殊的键值对
     * key可以设置成数组，值也可以设置成字符串，让它不规律对应起来
     */
    {
        let json = {
            name: 'jspang',
            skill: 'web'
        }
        console.log(json); //jspang
        var map = new Map();
        map.set(json, 'iam'); //{{key:{name:"jspang",skill:"web"},value:"iam"}}
        console.log(map);
        map.set('jspang', json);
        console.log(map); //{{key:{name:"jspang",skill:"web"},value:"iam"},{key:"jspang",value:{name:"jspang",skill:"web"}}}
    }
    /**
     * 12.2 map的增删查
     */
    {
        let json = {
            name: 'jspang',
            skill: 'web'
        }
        var map = new Map();
        //set增加键值对
        map.set(json, 'iam');
        //get获取键值对
        console.log(map.get(json)); //iam
        //size属性获取键值对数量
        console.log(map.size); //1
        //has查找是否存在
        console .log(map.has(json)); //true
        //delete删除键值对
        map.delete(json);
        console.log(map); //{}
        //clear清除所有键值对
        map.clear();
        console.log(map); //{}
    }
}
/**
 * 13.用Proxy进行预处理
 */
{
    /**
     * 13.1声明Proxy
     * 第一部分为方法的主体，第二部分为Proxy预处理区域，相当于钩子函数的地方
     */
    {
        var pro = new Proxy(
            {
                add: function (val) {
                    return val + 10;
                },
                name: 'I am Jspang'
            }, {
                /**
                 * get属性是在获取某对象属性值时，预处理的方法
                 * @param {*} target 目标对象（函数主体）
                 * @param {*} key 目标的key值，相当于对象的属性
                 * @param {*} property proxy本身，包含了Target（主体部分）、Handler（预处理部分）
                 */
                get: function (target, key, property) {
                    console.log('come in Get');
                    //必须要返回目标值
                    return target[key];
                },
                /**
                 * set属性是在改变Proxy属性值时，预处理的方法
                 * @param {*} target 目标对象（函数主体）
                 * @param {*} key 目标的Key值
                 * @param {*} value 要改变的value值
                 * @param {*} receiver proxy本身，包含了Target（主体部分）、Handler（预处理部分）
                 */
                set: function (target, key, value, receiver) {
                    console.log(`    setting ${key} = ${value}`);
                    //必须要返回对目标值的修改
                    return target[key] = value;
                }
            }
        );
        //在方法调用前先调用了钩子函数
        console.log(pro.name); //"come in Get"、"I am Jspang"
        pro.name = '技术胖'; //    setting name = 技术胖
        console.log(pro.name); //"come in Get"、"技术胖"
        let a = pro.name; //"come in Get"
    }
    /**
     * 13.2 apply的使用
     */
    {
        let target = function () {
            return 'I am JSPang';
        };
        var handler = {
            apply(target, ctx, args) {
                console.log('do apply');
                //固定写法（待了解）
                return Reflect.apply(...arguments);
            }
        }
        var pro = new Proxy(target, handler);
        console.log(pro()); //"do apply"、"I am JSPang"
    }
}
/**
 * 14.promise对象的使用
 */
{
    let state = 1;

    function step1(resolve, reject) {
        console.log('1.开始-洗菜做饭');
        if (state == 1) {
            resolve('洗菜做饭--完成');
        } else {
            reject('洗菜做饭--出错');
        }
    }

    function step2(resolve, reject) {
        console.log('2.开始-坐下来吃饭');
        if (state == 1) {
            resolve('坐下来吃饭--完成');
        } else {
            reject('坐下来吃饭--出错');
        }
    }

    function step3(resolve, reject) {
        console.log('3.开始-收拾桌子洗完');
        if (state == 1) {
            resolve('收拾桌子洗完--完成');
        } else {
            reject('收拾桌子洗完--出错');
        }
    }
    new Promise(step1).then(function(val) {
        console.log(val);
        return new Promise(step2);
    }).then(function(val) {
        console.log(val);
        return new Promise(step3);
    }).then(function(val) {
        console.log(val);
        return val;
    });
}
/**
 * 15.class类的使用
 */
{
    /**
     * 15.1.类的声明和使用
     */
    {
        //类的两个方法中不需要逗号
        //这里的this指类本身
        class Coder {
            name(val) {
                console.log(val);
                return val;
            }
            skill(val) {
                console.log(this.name('jspang') + ':' + 'Skill:' + val);
            }
        }
        let jspang = new Coder;
        jspang.name('jspang'); //jspang
        jspang.skill('web'); //jspang:Skill:web
    }
    /**
     * 15.2.类的传参
     */
    {
        class Coder {
            name(val) {
                console.log(val);
                return val;
            }
            skill(val) {
                console.log(this.name('jspang') + ':' + 'Skill:' + val);
            }
            //用constructor来约定传递参数
            constructor(a, b) {
                this.a = a;
                this.b = b;
            }
            add() {
                return this.a + this.b;
            }
        }
        let jspang = new Coder(1, 2);
        console.log(jspang.add()); //3
    }
    /**
     * 15.3.类的继承
     */
    {
        class Coder {
            name(val) {
                console.log(val);
                return val;
            }
        }
        class htmler extends Coder {}
        let pang = new htmler;
        pang.name('技术胖'); //技术胖
    }
}
/**
 * 16.模块化操作
 * export :负责进行模块化，也是模块的输出。
 * import : 负责把模块引入
 */
{
    /**
     * 16.1.export的用法
     */
    {
        //单一变量的输出
        export var a = 'jspang';
        //函数的模块化输出
        export function add(a, b) {
            return a + b;
        }
        /*import {a, add} from './temp.js';*/
        //多变量的输出
        var a = 'jspang';
        var b = '技术胖';
        var c = 'web';
        export { a, b, c }
        //as：给模块起一个更语义话的名称
        var a = 'jspang';
        var b = '技术胖';
        var c = 'web';
        export {
            x as a,
            y as b,
            z as c
        }
    }
    /**
     * 16.2.export default的用法
     * 相当于一个默认的入口，一个文件里只能有一个，import时不带大括号
     */
    {
        export default
        var a = 'jspang';
        /*import str from './temp';*/
    }
}