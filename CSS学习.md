# CSS 概述

- CSS 指层叠样式表 (*C*ascading *S*tyle *S*heets)  
- 样式定义*如何显示* HTML 元素  
- 样式通常存储在*样式表*中  
- 把样式添加到 HTML 4.0 中，是为了*解决内容与表现分离的问题*  
- *外部样式表*可以极大提高工作效率  
- 外部样式表通常存储在 *CSS 文件*中  
- 多个样式定义可*层叠*为一 

##### **CSS 语法由三部分构成：选择器、属性和值：**



## 1	选择器

### 1.1	标签选择器

​	-- 标签名 {

​		属性：属性值；

​		属性：属性值；

​		................

​		}

```html
<style>
    p {
        color: burlywood;
        font-style: italic;
    }

    div {
        color: darkgoldenrod;
        font-size: 20px;
    }
</style>
```

### 1.2	类选择器

​	.选择器类名 {

​		属性：属性值；

​		............

​	}

```html
<style>
    /*声明类样式*/
    .mingren {
        color: red;
    }
    .zuozhu{
        color: aquamarine;
    }
</style>
```

​	**在标签中引用样式**

```html
<body>
    <div class="mingren">旋涡鸣人</div>
    <div>日向雏田</div>
    <div class="zuozhu">宇智波佐助</div>
    <div>小樱</div>
</body>
```



### 1.3	多类名选择器

​	--在标签中引用类选择器可以选择多个，使用空格隔开

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>多类名选择器</title>
    <style>
        .font20 {
            font-size: 20px;
        }
        .font30 {
            font-size: 30px;
        }
        .red {
            color: red;
        }
        .fontweight {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="font20 red fontweight">安琪拉</div>
    <div class="font20 ">亚瑟</div>
    <div class="font30 red">琴女</div>
    <div class="font30 fontweight">刘邦</div>
</body>
</html>
```



### 1.4	id选择器

​	--定义规则

```html
<style>
	/*类选择器*/
    .guangtou{
        color: silver;
    }
	/*id选择器*/
    #big {
        color: pink;
    }
</style>
```

​	--引用格式

```html
<body>
    <div>
        <span id="big">熊大</span>
        <span class="guangtou">光头强</span>
        <span></span>
    </div>
</body>
```



### 1.5	类选择器和id选择器的区别

​	**-- /*类选择器是可以重复多次使用的 类似于人的名字是可以重复的*/**

​	**--/*id选择器只允许使用一次，类似身份证号*/**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>类选择器和id选择器的区别</title>
    <style>
        /*类选择器是可以重复多次使用的 类似于人的名字是可以重复的*/
        .red {
            color: red;
        }

        /*id选择器只允许使用一次，类似身份证号*/
        #setspan {
            color: green;
        }
    </style>
</head>
<body>
    <div>
        <span id="setspan">黎明</span><!-- 重复的id引用 Duplicate id reference-->
        <span id="setspan">张学友</span>
        <span class="red">毕福剑</span>
        <span class="red">光头强</span>
    </div>
</body>
</html>
```



### 1.6	通配符选择器

​	**选中所有元素**，即对html中所有元素生效

​	格式  *  {属性：属性值；属性：属性值；........}	

- **通常不建议使用通配选择符**，因为它会遍历并命中文档中所有的元素，出于性能考虑，需酌情使用 	

```html
 		* {
            color: silver;
        }
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>通配符选择器</title>
    <style>
        /*代表所有选择器*/
        * {
            color: silver;
        }
    </style>
</head>
<body>
    <span >黎明</span>
    <span >张学友</span>
    <span>毕福剑</span>
    <span >光头强</span>
</body>
</html>
```



### 1.7	伪类选择器

​	**伪类**：同一个标签，根据其**不同的种状态，有不同的样式**。这就叫做“伪类”。伪类用冒号来表示 

​	比如div是属于box类，这一点很明确，就是属于box类。但是a属于什么类？不明确。因为需要看用户点击前是什么状态，点击后是什么状态。所以，就叫做“伪类”。

##### 静态伪类和动态伪类

伪类选择器分为两种。

（1）**静态伪类**：只能用于**超链接**的样式。如下：

- `:link` 超链接点击之前
- `:visited` 链接被访问过之后

PS：以上两种样式，只能用于超链接。

（2）**动态伪类**：针对**所有标签**都适用的样式。如下：

- `:hover` “悬停”：鼠标放到标签上的时候
- `:active` “激活”： 鼠标点击标签，但是不松手时。
- `:focus` 是某个标签获得焦点时的样式（比如某个输入框获得焦点）

PS：以上三种样式，只能用于超链接。

​	对标签做伪类效果

​	***参考http://css.doyoe.com/selectors/pseudo-classes/index.htm***

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>伪类选择器</title>
    <style>
        a {
            /*a 是标签选择器 所有的链接*/
            font-weight: 700;
            font-size:20px;
            color: gray;
        }
        a:hover{
            /* ：hover  链接伪类选择器 鼠标悬停*/
            color: yellow;
        }
    </style>
</head>
<body>
    <a href="#">秒杀</a>
</body>
</html>
```



### 1.8 链接伪类选择器

​	--这四个状态必须按顺序写

​	**a:link 、a:visited 、a:hover 、a:active** 

```html
<style>
    /*!!!!注意 ： 这个顺序不要改变 lvha*/
    a:link {
        /*未访问的链接*/
        font-size: 20px;
        color: gray;
        font-weight: 700;
    }
    a:visited{
        /*访问过的链接*/
        font-size: 20px;
        color: orange;
        font-weight: 700;
    }
    a:hover{
        /*鼠标悬停时*/
        font-size: 20px;
        color: red;
        font-weight: 700;
    }
    a:active{
        /*鼠标选中的链接*/
        font-size: 20px;
        color: green;
        font-weight: 700;
    }

</style>
```

引用样式格式

```html
<body>
    <!--
        伪类选择器中的 链接伪类选择器
            主要正对于 a
    -->
    <span ><a href="#" >黎明</a> </span>
    <span ><a href="#">张学友</a></span>
    <span>毕福剑</span>
    <span >光头强</span>
</body>
```



### 1.9	结构伪类选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>结构伪类选择器</title>
    <style>
        li:first-child {
            color: red;
        }
        li:nth-child(4) {   /*选择第几个孩子*/
            color: yellow;
        }
        li:last-child {
            color: purple;
        }
    </style>
</head>
<body>
    <ol>
        <li>金刚葫芦娃</li>
        <li>千里眼葫芦娃</li>
        <li>喷水葫芦娃</li>
        <li>千里耳葫芦娃</li>
        <li>顺风耳葫芦娃</li>
    </ol>

</body>
</html>
```



### 1.10  目标伪类选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>目标伪类选择器</title>
    <style>
        :target{
            color: red;
            font-size: 50px;
        }
    </style>
</head>
<body>
<h1 align="center">四大名著</h1>
<ul>
    <li>
        <h3><img src="四大名著.png" width="200px" height="180px"/><a href="#">《水浒传》</a></h3>
        <p>
            天之道，损有余而补不足，是故虚胜实，不足胜有余。其意博，其理奥，其趣深，天地之象分，
            阴阳之候列，变化之由表，死生之兆彰，
            不谋而遗迹自同，勿约而幽明斯契，稽其言有微，验之事不忒，诚可谓至道之宗，奉生之始矣。
        </p>
    </li>
    <li>
        <h3> <img src="四大名著.png" width="200px" height="180px"/>《三国演义》</h3>
        <p>
            假若天机迅发，妙识玄通，成谋虽属乎生知，
            标格亦资于治训，未尝有行不由送，出不由产者亦。然刻意研精，探微索隐，或识契真要，则目牛无全，
            故动则有成，犹鬼神幽赞，而命世奇杰，时时间出焉。
        </p>
    </li>
    <li>
        <h3><img src="四大名著.png" width="200px" height="180px"/>《红楼梦》</h3>
        <p>
            五藏六府之精气，皆上注于目而为之精。精之案为眼，骨之精为瞳子，筋之精为黑眼，
            血之精力络，其案气之精为白眼，肌肉之精为约束，
            裹撷筋骨血气之精而与脉并为系，上属于脑，后出于项中。故校啃于项，
            因逢其身之虚，其人深，则随眼系以入于脑，入手腼则脑转，脑转则引目系急，
            目系急则目眩以转矣。
            邪其精，其精所中不相比亦则精散，精散则视岐，视岐见两物。
        </p>
    </li>
    <li>
        <h3><img src="四大名著.png" width="200px" height="180px"/>《西游记》</h3>
        <p>
            阴极在六，何以言九。太极生两仪，天地初刨判。六阴已极，逢七归元太素，
            太素西方金德，阴之清纯，寒之渊源。
        </p>
    </li>
</ul>

</body>
</html>
```



## 2	文本属性

### 2.1  行高和首行缩进

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>行高对其和首行缩进</title>
    <style>
        p {
            font-size: 18px;
            line-height: 26px;
            /*设置首行缩进 em 1em就是一个汉字的宽度*/
            text-indent: 2em;
        }
        h3 {
            text-align: center; /*文字水平对齐*/
        }
    </style>
</head>
<body>
<h3>海贼王的创作背景</h3>
<p>海贼王的大海贼时代其实是以当时欧洲的大航海时代为背景 海贼王的原形,
    基德船长(貌似全名里也含有一个D),在临刑前说了一句类似与罗杰的话,并向死刑台下撒满宝藏的地图,</p>
<p>许多人也因此投向了大海的怀抱,可惜基德船长的那50亿法郎现在依然沉睡在大西洋的某处.
白胡子+黑胡子原形:"黑胡子"爱德华.帝奇,他大口吃肉,大碗喝酒的性格和黑胡子很像.</p>
<p>鼎盛时期他的海盗船敢公然抢劫政府的船只,但海盗生涯后期因放走了一位俘虏而暴露了藏身地被抓走,
这善良的性格有些像白胡子,因为白胡子说过一句话:"只要上了我的船的人就像我的儿子一样!"</p>
<p>红发原形:加勒比海盗里的杰克船长,他们之间的潇洒性格很相近,并且红发香克斯在某版本可音译为杰克.</p>
</body>
</html>
```



### 2.2	单词间距

```html
<style>
    div {

        /*字间距*/
        letter-spacing: 15px;
    }

    span {
        /*单 词 间距*/
        /*letter-spacing 属性与 word-spacing 的区别在于，字母间隔修改的是字符或字母之间的间隔。*/
        word-spacing: 300px;
    }

    /*文字半透明*/
    h1 {
        /*color: green;*/
        /*
            rgb(red,green,blue,a)
            a:透明度 ：0 - 1
        */
        color: rgba(0,0,0, 0.1);
    }

    pre {
        /*设置文字阴影效果*/
        /*
            text-shadow:水平位置 垂直位置 模糊距离 阴影颜色
            水平位置（必须）:阴影往右偏移 可以为负值，往左
            垂直位置（必须）：阴影往下偏移 可以为负值
            模糊距离：可以简单认为模糊程度 0 1 2 3 4（到4就几乎糊成一团）
        */

        font-size: 30px;
        text-shadow: 7px 5px 2px rgba(0,0,0,0.2);
    }
</style>

<pre>
        CSS 文本属性
            属性 描述
            color 设置文本颜色
            direction 设置文本方向。
            line-height 设置行高。
            letter-spacing 设置字符间距。
            text-align 对齐元素中的文本。
            text-decoration 向文本添加修饰。
            text-indent 缩进元素中文本的首行。
            text-shadow 设置文本阴影。CSS2 包含该属性，但是 CSS2.1 没有保留该属性。
            text-transform 控制元素中的字母。
            unicode-bidi 设置文本方向。
            white-space 设置元素中空白的处理方式。
            word-spacing 设置字间距。
    </pre>
```



## 3 css样式

```html
<style>
    h1 {
        color: red;
    }
    h4 {
        /*必须按顺序来 font-style font-weight  font-size line-height font-family*/
        font:italic bold 14px "Microsoft YaHei UI";
    }

    p {
        font-style: italic;    /*让字体倾斜*/
        /*设置字体粗细  或者Integer ：100-900
            400 ; normal
            700 : bold;
        */
        font-weight: 700;
        /*设置字体*/
        font-family: "宋体";
        font-size: 18px;
        color: black;
        /**/
        background: beige;
    }
</style>
```



### 3.1 内部样式表

```html
<style>
    div {
        font-size: 30px;
        text-align: center;
        text-shadow: 2px 2px 1px rebeccapurple;
    }
    pre {
        color: #200eff;
        font-size: 18px;
        font-weight: normal;
    }
</style>
```



### 3.2	行内样式表

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>行内样式表</title>
</head>
<body>
    <div style="font-size: 20px; color: red; text-align: center">今日阳光明媚</div>
    <span>行内样式表</span>
    <!--span 不允许放div标签-->
    <!--文字类标签不允许放块级元素-->
    <div>今日阳光明媚</div>
    <div>今日阳光明媚</div>
    <div>今日阳光明媚</div>
    <div>今日阳光明媚</div>
</body>
</html>
```



### 3.3  外部样式表

​	--引用外部的css文件  href 可以是网络链接

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>外部样式表</title>
    <link rel="stylesheet" href="外部样式表.css" type="text/css" />
</head>
<body>
    <div>外部样式表</div>
    <div>外部样式表</div>
    <div>外部样式表</div>
    <div>外部样式表</div>
    <div>外部样式表</div>
</body>
</html>
```

​	--引用的css文件

```html
div {
    color: pink;
    font-size: 18px;
}
```



### 3.4	块级元素和行内元素的区别

```html
<pre>
    块级元素的特点：
        1、总是从新行开始
        2、高度、行高、外边距以及内边距都可以控制。
        3、宽度默认是容器的100%
        4、可以容纳内联元素和其他元素。

    行内元素的特点：
        1、和相邻行内元素在一行上。
        2、高宽无效，但水平方向的padding和margin都可以设置，垂直方向无效
        3、默认宽度就是它本身内容的宽度
        4、行内元素智能容纳文本或者其它行内元素。
</pre>
```



### 3.5	行内块元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>行内块元素</title>
    <style>
        input {
            width: 300px;
            height: 30px;
            border-color: red;
        }
    </style>
</head>
<body>
    <pre >
        在行内块元素中有几个特殊的标签--img、input、td，可以对他们设置宽高和对齐属性，
    有些资料可能会称他们为行内块元素。

        行内块元素的特点：
            1、和相邻行内元素（行内块）在一行上，但是之间会有空白缝隙。
            2、默认宽度就是它本身内容的宽度。
            3、高度、宽度、外边距以及内边距都可以控制。
    </pre>
    <input type="text"  />
</body>
</html>
```



### 3.6显示模式转换

```html
<style>
    div {
        width: 300px;
        height: 100px;
        background-color: pink;
        display: inline;/*块级标签转为行内标签*/
    }

    span {
        width: 300px;
        height: 100px;
        background-color: silver;
        display: block;/*行内标签转为块级标签*/
    }
</style>
```



### 3.7 css复合选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>css复合选择器</title>
    <style>
        /*交集选择器*/
        div {
            background-color: #cccccc;

        }
        .red {
            color: red;
        }
        p.red {
            font-size: 20px;
        }

        /*并集选择器*/

    </style>
</head>
<body>
    <div class="red">熊大</div>
    <div>熊二</div>
    <div>吉吉国王</div>
    <p>光头强</p>
    <p class="red">小肥羊</p>
    <p>大sao</p>
</body>
</html>
```



### 3.8	属性选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>属性选择器</title>
    <style>
        /*显示灰色 实际生效 class^=font 模糊匹配:前面相同*/
        div[class^=font] {
            color: silver;
        }
        /*显示灰色 实际生效 class^=font 模糊匹配：后面相同*/
        div[class$=footer]{
            color: olive;
        }
        /*显示灰色 实际生效 class^=font 模糊匹配：任意位置包含 =标识 */
        div[class*=tao]{
            color: greenyellow;
        }
    </style>
</head>
<body>
    <div class="font12">属性选择器</div>
    <div class="font14">属性选择器</div>
    <div class="font18">属性选择器</div>
    <div class="font20">属性选择器</div>
    <div class="font24">属性选择器</div>
    <div class="sub-footer">属性选择器</div>
    <div class="jd-footer">属性选择器</div>
    <div class="news-tao-nav">属性选择器</div>
    <div class="news-tao-header">属性选择器</div>
    <div class="tao-header">属性选择器</div>
</body>
</html>

```

​		--效果

​		![1562120837673](C:\Users\cnyangx\AppData\Local\Temp\1562120837673.png)

### 3.9	伪元素选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>伪元素选择器</title>
    <style>

        /*
            .div 类选择器
            :first-child 伪类选择器
            ::first-letter 伪元素选择器
        */
        /*选择段落的第一个字*/
        p::first-letter{
            color: red;
            font-size: 28px;
        }
        /*选择第一行*/
        P::first-line{
            color: green;
        }
        /*选中的文字*/
        p::selection{
            background: dimgray;
            color: #ffac2b;
        }
    </style>
</head>
<body>
<h1>九阴真经--口诀</h1>

<p>天之道，损有余而补不足，是故虚胜实，不足胜有余。其意博，其理奥，其趣深，天地之象分，
阴阳之候列，变化之由表，死生之兆彰，
不谋而遗迹自同，勿约而幽明斯契，稽其言有微，验之事不忒，诚可谓至道之宗，奉生之始矣。</p>

<p>假若天机迅发，妙识玄通，成谋虽属乎生知，
标格亦资于治训，未尝有行不由送，出不由产者亦。然刻意研精，探微索隐，或识契真要，则目牛无全，
故动则有成，犹鬼神幽赞，而命世奇杰，时时间出焉。</p>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>伪元素选择器</title>
    <style>
        /*在盒子内部的前面插入内容*/
        div::before {
            content: "俺";
        }
        /*在盒子内部的后面插入内容*/
        div::after {
            content: "18岁";
        }
    </style>
</head>
<body>
    <div>
        今年
    </div>
</body>
</html>
	
```

![1562120746715](C:\Users\cnyangx\AppData\Local\Temp\1562120746715.png)



### 3.10  背景

```html
<style>
    div {
        width: 2000px;
        height: 1200px;
        //background: dimgray;
        background-image: url(20180629_113623680_iOS.jpg);
        background-repeat: no-repeat;
        /*方位名词没有顺序
        如果只写一个 另一个默认center*/
        /*background-position: center center ;*/
        /*background-position: 220px 230px;!* x y 坐标*!*/
        background-position: 220px center;/* x 方位 坐标*/


    }
</style>
```



### 3.11  背景图片

```html
<style>
    body {
        background-color: #000;		/*黑色*/
        background-image: url(ms.jpg);
        background-repeat: no-repeat;
        /*背景图片位置 水平居中 垂直靠上就可以了 */
        background-position: center -50px;
        /*background-attachment: scroll;  !*默认scroll 背景图像随内容滚动*!*/
        background-attachment: fixed;  /*背景固定*/
    }

    p {
        color: white;
        font-size: 25px;
    }
</style>
```



### 3.12  背景简写

```html
<style>
    body {
        background: #000 url("ms.jpg") no-repeat fixed center -25px;

    }
    pre {
        font-size: 25px;
        margin-top: 600px;
        color: white;
    }
</style>
```



### 3.13  背景透明

```html
<style>
    div {

        height: 400px;
        background: rgba(0,0,0,0.5);
        color: rgba(0,0,0,0.2); //半透明效果
        
    }
    body {
        background: #000 url(king.jpg) no-repeat top center;
    }
</style>
```



### 3.14  背景缩放

```html
<style>
    body {
        background-color: #ccc;
    }
    div {
        width: 400px;
        height: 500px;
        /*background-color: hotpink;*/
        background: hotpink url("l.jpg") no-repeat ;
        /*插入的图片直接通过设置width 和 height 来设置缩放*/
        /*background-size: 100% !*尽量只改一个值，防止缩放失真*!*/
        /*
            cover  等比例缩放
            设置为cover时，会自动调整缩放比例，保证图片始终填充满背景区域，
            如有溢出部分则会被隐藏。我们平时用的cover 最多
        */
        /*background-size: cover;*/

        /*
            contain
            设置为contain会自动调整缩放比例，保证图片始终完整显示在背景区域。
        */
        background-size: contain;

    }
</style>
```



### 3.15 设置多背景图片

```html
<style>
    div {
        width: 500px;
        height: 500px;
        background: url("l.jpg") no-repeat left top,
                    url("3.jpg") no-repeat right bottom #ccc;

    }
</style>

    <pre >
        以逗号分隔可以设置多背景，可用于自适应布局  做法就是 用逗号隔开就好了。

        - 一个元素可以设置多重背景图像。
        - 每组属性间使用逗号分隔。
        - 如果设置的多重背景图之间存在着交集（即存在着重叠关系），前面的背景图会覆盖在后面的背景图之上。
        - 为了避免背景色将图像盖住，<strong>背景色通常都定义在最后一组上，</strong>

        background:url(test1.jpg) no-repeat scroll 10px 20px/50px 60px  ,
               url(test1.jpg) no-repeat scroll 10px 20px/70px 90px ,
               url(test1.jpg) no-repeat scroll 10px 20px/110px 130px c #aaa;

    </pre>
```



### 3.16  文字凹凸效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文字凹凸效果</title>
    <style>
        body {
            background-color: #ccc;
        }
        div {
            color: #cccccc;
            font: 700 60px "Microsoft YaHei UI";
        }
        div:first-child {
            /*水平 垂直 模糊距离 阴影颜色*/
            text-shadow: 1px 1px 1px #000,
                        -1px -1px 1px #fff;
        }
        div:last-child {
            /* text-shadow: 水平位置  垂直位置  模糊距离 阴影颜色; */
            text-shadow: -1px -1px 1px #000,
                        1px 1px 1px #fff;
        }
    </style>
</head>
<body>
    <div>我是凸起的文字</div>
    <div>我是凹下的文字</div>
</body>
</html>
```



### 案例：王者荣耀导航栏

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>王者不可阻挡</title>
    <style>
        body {
            background-color: #000;
            background-image: url(king.jpg);
        }
        a {

            width: 200px;
            height: 50px;
            //background-color: orange;
            display: inline-block;
            text-align: center;/*文字水平居中*/
            /*在一行内的盒子内，我们设定行高等于盒子的高度，就可以使文字垂直居中*/
            line-height: 50px;
            color: #000000;
            text-decoration: none;  /*取消下划线*/
            font-size: 24px;
        }
        /*链接伪类选择器*/
        a:hover {
            background: url("h.png") no-repeat;
        }
    </style>
</head>
<body>
    <a href="#">专区说明</a>
    <a href="#">申请资格</a>
    <a href="#">奖励兑换</a>
    <a href="#">下载游戏</a>
    <pre>
        text-decoration   通常我们用于给链接修改装饰效果
        值                    描述
        none                默认。定义标准的文本。
        underline           定义文本下的一条线。下划线 也是我们链接自带的
        overline            定义文本上的一条线。
        line-through        定义穿过文本下的一条线。

    </pre>
</body>
</html>
```



## 4 CSS的三大特性

### 4.1 层叠性

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>层叠性</title>
    <style>
        div {
            color: #ff0747;
            font-size: 18px;
        }
        div {
            color: blue;
        }
    </style>
</head>
<body>
    <div>王者不可阻挡</div>
<pre>
    1、样式冲突，遵循的原则是就近原则。哪个样式离结构近，就执行哪个样式。
    2、样式不冲突，不会层叠。
</pre>
</body>
</html>
```



### 4.2 CSS的继承性 

























