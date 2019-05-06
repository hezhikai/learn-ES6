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