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