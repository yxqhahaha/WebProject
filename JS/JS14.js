function Person(name) { //带参数的构造函数
    this.name = name;   //定义并初始化name属性
    this.sayHello = function () {//定义对象方法sayHello
        alert("hello, I'm " + this.name);
    };
};

