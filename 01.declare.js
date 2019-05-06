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