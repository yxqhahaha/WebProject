# HTML 

​	HTML：Hyper Text Markup Language (超文本标记语言)

## 		！！！！常查阅W3C

## HTML网页结构

```
<!DOCTYPE html>  --文本类型为 HTML

<html lang="en">		--语言

<head>					--HTML的头部 包含html的一些信息  成对出现

    <meta charset="UTF-8">		--meta标签 说明网页的编码格式，给浏览器看的

    <title>初识HTML</title>			--网页的标题，在浏览器上面显示

</head>

<body>

	..........网页的内容主体

</body>

</html>

```



### 特殊字符

<!--显示特殊字符 <html>这是html的开始  需要对特殊字符进行转义

```html
   < :  &lt;  less than 

   > :  &gt;  greater than
```

```html
  <p>---&nbsp; 空格 &-nbsp; ----</p>
  <p>---&nbsp; p标签 &lt;p&gt;段落标签&lt;/p&gt;----</p>
  <p>---&nbsp; &lt; &-lt;<  &gt; &-gt; > ---</p>
  <p>--------版权符号&copy;&-copy;------</p>
```



```html
   space :  &nbsp;

    & ：&amp;
```
### 文本格式化标签--段落标签

<p>&lt;HTML&nbsp;&nbsp;&nbsp;&nbsp;的开始&gt;</p>

#### 文字标签 ：已过时

```html
 <font size="5" color="#8a2be2">初识HTML size范围：1-7</font><br/>
    <font color="#00008b">HTML代码不区分大小写</font>   <!--HTML注释格式1-->
```

### HTML的注释格式

```html
 <!--HTML注释格式1-->
```

### 标题标签

```html
 <h1>标题标签1</h1><!-- h1-h6  h1>h2....>h6 -->
    <h2>标题标签2</h2>
    <h3>标题标签3</h3>
    <h4>标题标签4</h4>
    <h5>标题标签5</h5>
    <h6>标题标签6</h6>
    <h7>标题标签7</h7>
    <!--水平线标签 size:水平线的粗细 color:颜色-->
    <hr size="4" color="blue"/>
```

### 图片标签

​	img

​		--src ：设置图片的地址（可以是绝对路径，也可以是相对路径）

​		--注意：一般不会在html中去设置图片的样式，以后会用css来设置图片的样式。

​		--width :设置图片的宽度

​		--height : 设置图片的高度

```html
<img width="1300px" src="res\div+span.jpg"/>
```

### div和span标签

```html
 <div>
    我是张大仙
</div>
<span>
    我是林小力
</span>
```

### 删除线

​	<del></del>

​	<s> </s>

### 链接标签

​	--双标签 ：在中间写文字  如<a>百度</a>

​	--href:设置链接地址

​	--target：设置打开网页的方式

​		--_blank：在新的窗口打开网页

​		--_self ：在当前窗口打开新的网页

```html
<a href="https://www.baidu.com" target="_blank"><!--在新窗口打开-->百度：</a><br />
```

### 格式（原样）输出标签

```html
<pre>
	这里面的内容会在网页上原样输出，包括文本的样式，换行也会原样在网页上显示
</pre>
```

### 锚点定位

​	--在<pre>标签中使用 id来定义锚点位置

​	--在链接标签中使用 href="#linkName"  来标记跳转位置

```html
<h3><a href="#jiuyinzhenjing">九阴真经1</a></h3>
<h3><a href="#jiuyangshengong">九阳神功2</a></h3>

 <pre id="jiuyangshengong">
                    九阳神功--口诀
    他强由他强，清风抚山冈。
　　他横由他横，明月照大江。
　　他自狠来他自恶，我自一口真气足。

    </pre>
 <pre id="jiuyinzhenjing">

         九阴真经--口诀
      天之道，损有余而补不足，是故虚胜实，不足胜有余。其意博，其理奥，其趣深，天地之象分，
      阴阳之候列，变化之由表，死生之兆彰，
      不谋而遗迹自同，勿约而幽明斯契，稽其言有微，验之事不忒，诚可谓至道之宗，奉生之始矣。

    </pre>
```

### base标签

​	--base 标签的定义写在 <head>网页的头部，用来定义所有的<a>链接标签的样式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>base标签</title>
    <base target="_blank"/>
</head>
<body>
    <a href="http://www.baidu.com" >百度</a>
    <a href="http://www.sina.com">新浪</a>
    <a href="http://www.sohu.com">搜狐网</a>
    <a href="http://www.alibaba.com" target="_self">阿里巴巴</a>

</body>
</html>
```

### 列表标签

​	--无序列表	

​	--有序列表

​	--type属性可以设置列表属性

```html
<body>
    <h2>无序列表</h2>
    <h3>你喜欢的水果</h3>
      <!--    无序列表 ul
         想要在页面上显示这样的效果
         特殊符号（方框） 数信学院
         特殊符号（原点） 商学院
      -->
    <ul><!--自动换行 unordered List--->
        <li>荔枝</li>
        <li>苹果</li>
        <li>葡萄</li>
        <li>芒果</li>
        <li>榴莲</li>
        <li>圣女果</li>
    </ul>
    
    
    <!--    有序列表
          想要在页面上显示这样的效果
          1、商学院
          2、数信学院
          3、体育学院
          或者
          a、商学院
          b、数信学院
          c、体育学院

         <ol></ol> 有序列表的范围
            属性type：设置排序方式（默认123） a 1 i
            在ol里面的内容： <li></li>
    --->
    <h2>有序列表</h2>
    <h3>数码</h3>
    <ol type="i">
        <li>笔记本</li>
        <li>机械键盘</li>
        <li>CPU</li>
        <li>显卡</li>
        <li>机箱</li>
        <li>显示器</li>
        <li>主板</li>
    </ol>
</body>
```

### 自定义标签

​	--使用效果，参见小米商城网页的最下部分

​	--dd是对dt的说明或者补充

```html
<!--
    自定义列表
    <dl></dl>：表示列表的范围
    在dl里面： <dt></dt> 上层内容
    在dl里面： <dd></dd> 下层内容
-->
<dl>
    <dt>GZMU</dt>
    <dd>商学院</dd>
    <dd>数信学院</dd>
    <dd>体育学院</dd>
    <dd>文学院</dd>
</dl>
```

### 表格标签--表格的合并（合并行、合并列）

​	--table

​		--border：设置表格的边框宽度

​		--cellspacing 属性-定义表格单元格之间的空间<br />
		--cellpadding 属性-表示单元格边框与单元格内容之间的距离<br />

​	--tr 行

​	--td 列

 	--如果要将两个或多个列合并为一个列，将使用colspan属性<br />
    	--如果要合并两行或更多行，则将使用rowspan属性。<br />

​	--合并行列注意事项：如果要合并行，如合并三行，则删除后两行，合并语句写在第一条

​									如合并三列，则删除后两列，合并语句写在第一条

```html
cellspacing属性-定义表格单元格之间的空间<br />
cellpadding属性-表示单元格边框与单元格内容之间的距离<br />

<table border = "1" cellpadding = "5" cellspacing = "5">
    <tr>
        <th>Name</th>
        <th>Salary</th>
    </tr>
    <tr>
        <td>其琛</td>
        <td>5000</td>
    </tr>
    <tr>
        <td>曼迪</td>
        <td>7000</td>
    </tr>
</table>
	如果要合并两行或更多行，则将使用rowspan属性。<br />
 	如果要将两个或多个列合并为一个列，将使用colspan属性<br />
    <table border = "1" cellpadding = "5" cellspacing = "5">
        <tr>
            <th>Name</th>
            <th>Salary</th>
        </tr>
        <tr>
            <td>其琛</td>
            <td>5000</td>
        </tr>
        <tr>
            <td>曼迪</td>
            <td>7000</td>
        </tr>
    </table>
```

### 表格标签的结构--表格的标题标签

​	--<thead> 表格的头部

​	--<body>表格的主体部分

```html
<table align="center" border="1" width="240" height="300">
  <caption><h5>商城</h5></caption><!--表格标题标签--->
    <thead>
        <tr>
            <td>数码</td>
            <td>家电</td>
            <td>生鲜</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>笔记本</td>
            <td>手机</td>
            <td>游戏机</td>
        </tr>
        <tr>
            <td>电视</td>
            <td>冰箱</td>
            <td>洗衣机</td>
        </tr>
        <tr>
            <td>XBOX</td>
            <td>PS4</td>
            <td>STEAM</td>
        </tr>
    </tbody>
</table>
```

### label标签

```html
<pre>
    label标签为input元素定义标注（标签）
    作用：用于绑定一个表单元素，当点击label标签的时候，被绑定的表单元素就会获得输入焦点
</pre>
<h3>label 标签的使用</h3>

<label>输入账号：<input type="text"/></label><br />
<label for="two">输入账号：<input id="one" type="text"/>
    输入密码：<input id="two" type="text"/></label><br />
<pre>
    1、用label直接进行包裹input即可
    2、如果label里面有多个表单，想定位到其中一个，可以通过 for id 来定位
</pre>
```

### 文本域

​	--实现在网页中的文本输入

```html
<body>
    留言板：<br />
    <!--cols=“每行中的字符数” rows=“显示的行数”-->
    <!--通过css来控制-->
    <textarea cols="50" rows="20">留言内容</textarea>
</body>
```

### 下拉菜单--select标签

​	--select的组合后面用js来实现

```html
<body>
    <select>
        <option selected="selected">点击选择你的籍贯</option>
        <option>山东</option>
        <option>河北</option>
        <option>辽宁</option>
        <option>四川</option>
        <option>贵州</option>
    </select>
    <!--如果选择了四川-->
    <select>
        <option selected="selected">点击选择县市</option>
        <option>成都市</option>
        <option>达州</option>
        <option>遂宁市</option>
        <option>广元</option>
        <option>射洪县</option>
    </select>
</body>
```

### form表单

```html
<body>
    <form action="接收表单.hmtl" method="post" name="userInformation">
        <!--input 单标签-->
        <!--maxlength="15" 属性：正整数 空间允许输入的最多字符数-->
        用户名 ： <input type="text" maxlength="15"/><br />  <!--这是文本框-->
        <!--size 属性：正整数 input控件在页面中显示的宽度-->
        密　码 ： <input type="password" size="50"/><br />  <!--这是密码框-->
        <!--checked="checked" 默认选中-->
        　　性　别 ： <input type="radio" name="sex" checked="checked"/>男  <!--单选框-->
        <input type="radio"  name="sex"/>女 <br /> <!--单选框-->
        爱　好 ： <input type="checkbox" name="hobby"/>电玩<!--复选框-->
        <input type="checkbox" name="hobby"/>篮球
        <input type="checkbox" name="hobby"/>登山
        <input type="checkbox" name="hobby" checked="checked"/>游泳<br />
        <!--type="button" 普通按钮-->
        照　片 ： <input type="button" value="提交照片"/><input type="file" value="选择文件"/><br />
        <!--type="image" 图形形式提交的按钮-->
        图片按钮 ： <input type="image" src="images\HTML5新标签.JPG" width="80px" height="40px" value="图像提交按钮"/><br />
        <!--submit 提交按钮-->
        提　交 ： <input type="submit" value="提交资料"/><br />
        重　置 ： <input type="reset" value="重置表单"/><br />


        <img src="images\inputType属性.jpg"  width="900px"/><br />
        <img src="images\HTML5新标签.jpg"  width="900px"/>
    </form>
</body>
```

### HTML5的新标签

```html
<body>
    <header>
        定义页面的头部--页眉
    </header>

    <nav>
        定义导航栏
    </nav>

    <aticle>
        语义：定义文章
    </aticle>

    <section>
        语义：定义区域
    </section>

    <aside>
        定义所处内容之外的内容--侧边
    </aside>

    <footer>
        页面的底部--页脚
    </footer>
</body>
```

### datalist标签

```html
<body>
    <!--与input搭配使用-->
    <input type="text" value="明星搜索" list="star" />
    <datalist id="star"> datalist 里面用id 来和input--list连接
        <option>刘德华</option>
        <option>张学友</option>
        <option>周星驰</option>
        <option>海明威</option>
    </datalist><br /><br /><br />

    <!--fieldset元素可将表单内的相关元素分组、打包-->
    <!--和legend搭配使用-->
    <fieldset >
        <legend>用户登录：</legend>
        用户名：<input type="text" /><br />
        密 码：<input type="password" />
    </fieldset>
    <br /><br /><br />

    <fieldset >
        <legend>HTML5新增的input type类型 表单</legend>
        <form action="zhanbudao.nn">
            邮箱：<input type="email" /><br/>
            tel ：<input type="tel" />

            <input type="submit" value="提交" />
        </form>
    </fieldset>
</body>
```

### HTML5 input新增的属性

```html
<body>
   <fieldset>
      <legend>HTML新增的 input type类型 的那些表单</legend>
      <form action="#null.html">
         邮箱：<input type="email" /><br />
         手机：<input type="tel" /><br />
         数字：<input type="number" /><br />
         url：<input type="url" /><br />
         搜索：<input type="search"><br />
         自由拖动：<input type="range"><br />
         小时分钟：<input type="time" /><br />
         时间：<input type="date" /><br />
         月年：<input type="month" /><br />
         星期 年：<input type="week" /><br />
         时间<input type="date" />时间<input type="time" />
      </form>
   </fieldset>
</body>
```

### HTML5新增的表单属性

```html
<body>
    <img src="images\HTML5常用的新属性.jpg" width="500px"/><br />
    <!--placeholder 占位符 灰色的提示-->
    用户名：<input type="text" placeholder="请输入用户名"/><br />
    <!--自动获得焦点-->
    搜 索：<input type="text" autofocus="autofocus" /><br />
    <!--多文件上传-->
    上传头像：<input type="file" multiple="multiple" /><br />
    <!--自动记录完成-->
    <!--autocomplete 默认 = on  规定表单是否应该启用自动完成功能
        1、首先需要提交按钮
        2、这个表单必须给名字
        -->
    <form action="#">
        <!--accesskey = "keyValue"  按下alt+keyVale获得焦点-->
        姓名：<input type="text" autocomplete="on" accesskey="a" name="userName"/>
        <!--required 不能为空-->
        昵称：<input type="text" required="required" />
        <input type="submit" value="提交" />
    </form>

</body>
```

### HTML5多媒体标签

```html
<body>
    <!--
        --embed ：标签定义嵌入的内容
        --audio：播放音频
        --video：播放视频
    -->
    <!--使用flash播放-->
    <!--  
    	没有加载到资源
    	<embed src="url" />
    -->
    <!--
            autoplay 自动播放
            controls 显示播放控件：可以控制音量和播放进度条
            loop：循环次数  -1为无限循环
    -->
    <audio src="许镜清%20-%20无底船歌.mp3" autoplay="autoplay" controls loop="-1"></audio>
    <!--为了浏览器兼容 音频文件会准备两种或三种格式-->
    <audio controls autoplay="autoplay">
        <source src="许镜清%20-%20无底船歌.mp3"/>
        <source src="许镜清%20-%20无底船歌.ogg"/>
        你的浏览器不支持播放音频文件。
    </audio>
    <!--
        video元素支持三种视频格式
            ogg
            mpeg4
            webm
    -->
    <video src="movie.mp4" autoplay="autoplay" controls></video>
    <!--兼容性写法-->
    <video controls autoplay="autoplay">
        <source src="movie.mp4"/>
        <source src="movie.ogg"/>
        你的浏览器不支持播放视频！
    </video>
</body>
```