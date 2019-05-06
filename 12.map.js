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