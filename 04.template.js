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