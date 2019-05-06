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