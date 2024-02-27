/*
eval()是一个常用的sink，用户可以依靠这个函数注入恶意字符串，从而污染原型链
*/
eval("Object.prototype.isAdmin = true")

/*
定义一个用户类，包括姓名、年龄等基础信息以及管理员权限
*/
class user{
    constructor(name, age, isAdmin){
        this.name = name;
        this.age = age;
        if(isAdmin)
            this.isAdmin = true;
    }
}

/*
定义用户组，按照定义，只有用户B是管理员
但是由于已经在一开始的时候将Object.prototype.isAdmin设置为true
所以无论isAdmin的参数如何，最终都有this.Admin === true
*/
var users = [
    new user("A", 20, false),
    new user("B", 25, true),
    new user("C", 30, false),
    new user("D", 35, false)
];

/*
输出每一个用户是否为管理员
*/
users.forEach(element => {
    if(element.isAdmin)
        console.log(element.name + " is an admin");
});

//预计输出：
/*
"B is an admin"
*/
//实际输出：
/*
A is an admin
B is an admin
C is an admin
D is an admin
*/

/*
由此可见，每一个用户都拥有了管理员权限，这是十分危险的
*/