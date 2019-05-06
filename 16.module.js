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