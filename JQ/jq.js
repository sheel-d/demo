/**
 * Created by Administrator on 2016/4/29.
 */
/*
*  获取元素的代码
*    $('#id');
*    $('.class'); 得到的是一个集合
*    $('标签名'); 得到的也是一个集合
*    $('#id .class 标签名')
*
*  css() ：添加css样式的方法
*    用法：
*      $('#id').css('background','red');
*      $('.class').css('background','red'); 同一个class名字的标签背景颜色变红
*      $('#id').css('background','red') 这是设置样式
*      $('#id').css('background');这个是得到属性值，red
*   $与jQuery是一样的： $ == jQuery
*
*   click():点击事件的方法
*   html()：获取标签内容的方法相当于原生的innerHTML
*     $('#id').click(function(){
*       alert( $('#id').html() ); 【1】
*       alert( document.getElementById('id').innerHTML )；【2】
*       alert( $('#id').innerHTML );【3】
*       alert( document.getElementById('id').html() );【4】
*     });
*
*   在书写代码时，可以写成纯JQ写法：【1】，也可以纯JS写法：【2】，不能混写：【3】【4】
*   函数中返回的this都是原生的，在JQ中要是要用的话，需要变成JQ的，写成这样$(this);
*
*   取值和赋值
*     取值：
*       $('#id').html();
*     赋值：
*       $('#id').html('bbbb');
*
*   attr() ：设置属性的方法，这个方法也可以获取和设置自定义属性
*     $('#id').attr('class','div');//设置class属性为div
*     $('#id').attr('class');得到class属性的属性值
*
*   val() ：获取和设置value值
*     $('input').val();获取input的value值
*     $('input').val('123');设置input的value值
*     如果是多个input的话，在写下面这句话时：
*       $('input').val('123321');改变的是多个input的值
*     但是：在多个input下，用val()取得的值是第一个input的value值
*        $('input').val();得到的是第一个input的value值
*   像上面所提到的css()、html()、attr()等方法都有类似的特点
*
*   $():
*     加载：$(function(){});相当于原生中的window.onload = function(){};
*     属性选择：
*       - [=]
*       - [^=]
*       - [$=]
*       - [*=]
*       - 引号的问题
*
*   //有三个input的情况下
*   <input type='text' value="123">  <input class="in im ip" type='text' value="123_233">
*   <input type='text' value="456">  <input type='text' value="123_444">
*   <input type='text'>              <input type='text' value="777_772">
*   $(function(){
*     $('input').css('background','red');//三个input的背景颜色都变红
*     //想让有value值的背景变红，而没有value值的背景颜色不变红
*       $('input[value]').css('background','red');//这个表示属性中必须有value的
*     //想让有value值为123的背景变红
*       $('input[value=123]').css('background','red');
*     //想找到以123为起始的元素
*       $('input[value^=123]').css('background','red');
*     //想找到以444为起始的元素
*       $('input[value$=444]').css('background','red');
*     //想找到带3的元素
*       $('input[value*=3]').css('background','red');
*
*     如果是选的值有多个的情况下，需要加“”。
*       $('input[class="in im ip"]').css('color'.'red');这个可以得到想要的结果
*       $('input[class=in im ip]').css('color'.'red');这个得不到想要的结果
*   });
*
*  链式操作
*    <div id="div1" calss="box box2">aaaaa</div>
*    $(function(){
*      var oDiv = $('#div1');
*      oDiv.html('bbbb');
*      oDiv.css('color','red');
*      oDiv.click(function(){
*        alert(123);
*      });
*      可以写成这样：
*      $('#div1').html('bbbbb').css('color','red').click(function(){ alert(123); });
*      链式操作都是指的设置，或取是没有作用的。
*    });
*    一般来说，用jq获取的元素都应该在前面+ $
*    像当面的oDiv就是通过JQ来得到的，一般是用$div来表示oDiv，
*    这样有助于区别原生与JQ获取的元素
*
*  在JQ中找不到元素，元素不存在的情况下，是不会出错的，不过这样在JQ中很难发现错误的问题在什么地方，
*  但是在原生JS中，这样会报错，
*
*  <div id='div1'></div>
*  <div></div>
*  <div></div>
*  $(function(){
*    $('div')//得到的是一个集合，3个div
*    alert( $('div').size() ); //3,size()是得到集合长度
*    alert( $('div').length ); //3,JQ中也提供了length属性来得到集合的长度
*    $('#div1');这也是一个集合
*    alert( $('#div1').length );//1
*
*    var $span = $('span');
*    $span.css('color','span');
*    //这样写是不会报错的，要是想要找到的这个错误可以通过查找$span的长度来检查错误
*    即：console.log( $span.length );应该在JQ中所有用$()获取到元素的长度最小都是1，
*                                    要是出现了0，就证明该元素不存在
*  });
*
*  $(function(){
*    //addClass()：添加class
*    $('#div1').addClass('box3');//向div中添加了一个box3的class属性
*    $('#div1').addClass('box4 box5');//向div中添加了一个box4 box5的class属性
*    $('#div1').addClass('box2 box5');//这样添加时，box2重复了，只会添加box5
*    //removeClass：删除class
*    $('#div1').removeClass('box2');//div中class属性只剩一个box1
*    $('#div1').removeClass('box2 box4');//box4不存在，还是只删除了box2，div中class属性只剩一个box1
*    toggleClass()：自己判断添加函数删除
*    $('#div1').toggleClass('box3');//在class中没有出现过，所以将box3添加到class中
*    $('#div1').toggleClass('box2');//在class中出现过，所以将box2重class中删除掉
*  });
*  <div id="div1" class="box1 box2"></div>
*
*  显示、隐藏
*    show()/hide()
*    $(function(){
*       var bBtn = true;
*       $('input').click(function(){
*         if(bBtn){
*           $('div').hide();//隐藏
*         }else{
*           $('div').show();//显示
*         }
*         bBtn = !bBtn;
*       });
*    });
*    <input type="button" value="点击">
*    <div>div</div>
*  显示、隐藏： show()/hide()与css()的方法的区别
*  css()存在一些小细节：当是内联元素时，点击隐藏没有问题，但点击显示时，就会把内联元素变成块元素，
*                       但是用show()和hide()这两个方法时，是不会出现上面的情况。
*  $(function(){
*       var bBtn = true;
*       $('input').click(function(){
*         if(bBtn){
*           //$('div').hide();//隐藏
*           $('div').css('display','none');
*         }else{
*           //$('div').show();//显示
*           $('div').css('display','block');
*         }
*         bBtn = !bBtn;
*       });
*    });
*    <input type="button" value="点击">
*    <span>div</span>
*    <span>div</span>
*    <div>div</div>
*    <div>div</div>
*
*   节点的选择：
*     针对兄弟节点的方法：
*         prev()【获取上一个兄弟节点】
*         next()【获取下一个兄弟节点】
*         prevAll() 【获取到该标签上面所有的兄弟节点】
*         nextAll() 【获取到该标签下面所有的兄弟节点】
*         siblings() 【找到所有的兄弟节点】
*         在这几种方法中，都存在筛选功能
*      $(function(){
*        $('span').next().css('background','red');//div的背景颜色变红
*        $('div').prev().css('background','red');//span的背景颜色变红
*        $('span').siblings('div').css('background','red');//只有div背景变红
*      });
*     <span>div</span>
*    <div>div</div>
*    <h1>h1</h1>
*
*  JQ实战小技巧 ：利用参数修复查找节点问题
*
*  下标： eq()
*    <ul>
*        <li>1111</li>
*        <li>2222</li>
*        <li>3333</li>
*    </ul>
*    $(function(){
*      $('li').css('background','red'); //这样是3个li的背景都变红，需求是第二个变成红色
*      $('li').eq(1).css('background','red');//这样第二个li背景颜色变红
*      eq()表示，从一个集合中找的某一个标签，这个需要有一个参数，参数是number。
*    });
*
*  节点的选择：
*      first()：找到的标签元素集合的第一项
*      last()：找到的标签元素集合的最后一项
*      slice()：截取到选择的元素集合的一部分
*      children()：找到的标签元素集合的子元素，接收一个参数，这个参数是筛选出来的标签
*                   但是，子元素里面的标签是找不到的
*      find()：与children相比，find的应用更为广泛
*    <ul>
*        <li>1111<p>p</p></li>
*        <li>2222</li>
*        <li>3333</li>
*        <li>4444</li>
*        <div>div</div>
*    </ul>
*   $(function(){
*      $('li').eq(0).css('background','red');//第一个li背景变红
*      $('li').first().css('background','red');//第一个li背景变红
*      $('li').slice(1,3).css('background','red');//第2/3个li背景变红，这个是不包含结束位置
*      $('ul').children().css('background','red');//所有的子元素背景颜色变红
*      $('ul').children('div').css('background','red');//只有div的背景颜色变红
*      $('ul').find('li').css('background','red');//所有的li子元素背景颜色变红
*      $('ul').find('p').css('background','red');//p元素背景颜色变红 尽量用这个方式，性能会更高一些
*      $('ul p').css('background','red');//p元素背景颜色变红
*   });
*
*   节点的选择
*     parent() ：【获取父节点】
*     parents()：【获取当前元素的所有祖先节点】
*     closets()：【找指定的一个最近的祖先元素(包括自身)，必须要接收一个参数（只能选择到一个唯一的元素）】
*       - 精准的查找能力，实战开发之王
*       - 找的是最近的唯一一个元素
*      <body class='box'>
*     <div id='div1' class='box'>
*         <div id='div2'></div>
*     </div>
*     $(function(){
*       $('#div2').parent().css('border','1px red solid');//div1有一个红色的边框
*        $('#div2').closest('.box').css('border','1px red solid');//找到的是div1
*     });
*     例子：点击查找指定节点
*     $(function(){
*       $('span').click(function(){
*         $(this).parent().css('background','red');
*       });
*     });
*     <ul>
*         <li>aaa<span>span</span></li>
*         <li>aaa<span>span</span></li>
*         <li>aaa<span>span</span></li>
*         <li>aaa<span>span</span></li>
*     </ul>
*
*   节点的操作
*     创建节点
*       - $(<>)
*       - 比原生JS更强大的创建方式
*
*     添加节点
*       - insertBefore()：把元素添加到指定节点前面
*       - before()：把元素添加到指定节点前面，在进行后续的操作时候两个方法有所不同
*       - insertAfter()：把元素添加到指定节点后面
*       - after()：把元素添加到指定节点后面
*       - appendTo()：把元素添加到指定节点里面的最后
*       - append()：与原生的appendChild()相似，把元素添加到指定节点里面的最后
*       - prependTo()：把元素添加到指定节点里面的最前面
*       - prepend()：把元素添加到指定节点里面的最前面
*       - 两种写法的区别：
*
*   $(function(){
*     //$('<div>');//创建div标签
*     //$('<div id="div1">hello</div>');//也可以这样来创建
*     var $li = $('<li>hello</li>');
*     $('ul').append( $li );
*     $('ul').prepend( $li );
*     $('ul').before( $li );
*     $('ul').after( $li );
*     $('ul').append( $li ).css('background','red');//ul里面的所有li的背景颜色都变红
*     $li.appendTo( $('ul') ).css('background','red');//新添加的li背景变红
*   });
*   <ul></ul>
*
*   JQ实战小技巧：添加html形式的操作与元素形式的操作
*   var $li = $('<li class="box">hello</li>');
*   $('ul').append($li);
*   $li.click(function(){ alert(213);};//这样写比较好
*
*   节点的操作
*     remove()：删除节点
*     clone()：克隆操作，节点的复制操作，只克隆元素的结果，事件的操作行为是不会克隆的，
*              要是接收了一个参数true，这样就可以克隆事件了
*       - 添加节点等操作；默认的剪切操作，
*       - 如何克隆事件
*       - 例子：节点上移下移
*
*    <div>div</div>
*    <span>span</span>
*    $(function(){
*      //$('div').remove();
*      var $div = $('div').clone();//克隆一个div的操作
*    });
*
*    JQ中的索引
*      index()：索引值，代表的就是当前元素在所有兄弟节点中排第几
*        - 第一种用法，兄弟中的排行
*        - 第二种用法，筛选后的排行
*        - 善于利用索引做实际开发
*        - 例子：选项卡
*
*    <div>div</div>
*       <p>p</p>
*    <div id="div1">div</div>
*    <div>div</div>
*    $(function(){
*      //alert( $('#div1').index() ); => 1
*      //alert( $('#div1').index() ); => 2
*    });
*
*    <div><span>span</span></div>
*       <span>span</span>
*    <div><span id="span1">span</span></div>
*    <div><span>span</span></div>
*    $(function(){
*      //alert( $('#span1').index() ); => 0
*      //alert( $('#span1').index('span') ); => 1// 这个表示在所有的span里面去找一个id为span1的标签的索引值
*      //alert( $('#span1').index('span') ); => 2
*      alert( $('span').index( $('#span1') ) ); => 2
*    });
*
*  JQ中的遍历-》相当于原生中的for循环
*   each() => for
*     - 回调函数的两个参数
*     - this指向
*     - return false
 *  <ul>
 *      <li></li>
 *      <li></li>
 *      <li></li>
 *      <li></li>
 *  </ul>
*   $(function(){
*     //$('li').html('hello'); //4个li都是hello
*     $('li').each(function(i,elem){// ->i相当于for循环中的i，elem相当于元素，返回的是原生的元素
*         //$(elem).css('background','red');//4个li的背景都变红了
*         //$(elem).html(i); //4个li里面的内容依次是0 1 2 3
*         //在这个方法中this指向的是 elem 也是原生的
*         //$(this).html(i);//同样可以得到该效果
*         //要想跳出JQ中的循环可以用： return false;
*         $(this).html(i);
*         if( i == 2){
*           return false; ->与break相识
*         }//得到的效果是第四个li没有innerHTML值
*     });
*   });
*
*   JQ包装对象
*     wrap()：包装
*     wrapAll()：整体包装
*     wrapInner()：内部包装
*     unwrap()：删除包着，相当于删除父节点，body是不能被删除的
*     例子 ：管理员与普通用户状态控制
*
*   <span>span</span>  <div><span>span</span></div>
*       <p>p</p>
*   <span>span</span>
*   <span>span</span>
*   $(function(){
*     $('span').wrap('<div>');//每一个span外层都有一个div包着的，
*     $('span').wrapAll('<div>');//3个span都被一个div包着
*       $('span').wrapAll('<div>');//3个span都被一个div包着,但是p标签被剪切出来了，在div的下面
*     $('span').wrapInner('<div>');//3个span里面都有一个div的子元素
*           $('span').unwrap();//span的父级标签div被删除了
*   });
*
*   JQ转原生JS
*     get()：把JQ转成原生JS，默认情况获取的是一个原生集合，那么可以通过参数来找到集合中的指定项
*       - 与eq的区别
*       - 为什么要转，比如：
*         >> 获取内容的高度
*         >> 元素之间的比较
*
*    <div>11111</div>
*    $(function(){
*      //alert( $('div').innerHTML );//错误的写法
*      alert( $('div').get().innerHTML );//undefined
*      alert( $('div').get(0).innerHTML );//11111
*    });
*
*    <textarea id="t1" style="height:100px;">123 3123 3 12312 31 231 3 123 1</textarea>
*    *{ margin:0; padding:0; }
*    $(function(){
*      alert( $('#t1').height() );//height()是获取元素的高度  =>100,得不到内容的高度
*      alert( $('t1').get(0).scrollHeight) );//这个可以得到元素内容的高度
*    });
*   元素的尺寸
*     width()   height()
*     innerWidth()  innerHeight()
*     outerWidth()  outerHeight()
*     参数的作用
*     与原生JS的区别 ：原生JS是获取不到隐藏元素的尺寸，JQ中是可以获取隐藏元素的尺寸
*     
*   JQ实战小技巧
*     可视区的尺寸
*     页面的尺寸
*
*  #div1{ width:100px;height:100px;background:red;padding:10;border: solid 1px #000;margin:5px; }
*  <div id="div1"></div>
*  $(function(){
*    //获取
*    alert( $('#div1').width() );//100  是css样式里面width的值
*    alert( $('#div1').innerWidth() );//120 这个是 width + padding的值
*    alert( $('#div1').outerWidth() );//122 这个是width + padding + border的值
*    alert( $('#div1').outerWidth(true) );//132 这个是width + padding + border + margin的值
*    //设置
*    $('#div1').width(200);css中的width变成了200
*    $('#div1').innerWidth(200);css中的width变成了180
*    $('#div1').outerWidth(200);css中的width变成了178
*    $('#div1').outerWidth(200,true);css中的width变成了168
*    //可视区的尺寸
*       alert( $(window).height() );得到可视区的高
*    //页面的尺寸
*      alert( $(document).height() );得到页面的高
* });
*
*   滚动距离
*     scrollTop()：针对y轴的
*     scrollLeft()：针对x轴的
*
*   <body style="height:2000px;"><div id="div1">div</div></body>
*   $(function(){
*     $(document).click(function(){
*       //获取
*       alert( $(document).scrollTop() ); //滚动距离，针对的是页面
*       //当滚动到底部时有这样的关系：$(document).scrollTop() == $(document).height() - $(window).height();
*       //设置
*       $(document).scrollTop(300);//在点击页面时，设置滚动距离为300的位置，滚动条就跳到300的位置
*       $('div1')..scrollTop(300);针对的是div1这个元素的滚动距离
*
*     });
*   });
*
*   元素距离
*     offset()
*       - left top
*     position()
*       - left top
*       - 不认margin
*
*   #div1{ width:100px;height:100px;background:red;margin:200px; }
*   *{ margin:0;padding:0; }
*   <body style="height:2000px;"><div id="div1">div</div></body>
*   $(function(){
*     $('#div1').offset().left;//元素距离左边的距离,这个的距离值是相对于整个页面的，
*                              //不管是单独的还是有嵌套的都是获得到整个页面的距离,加了定位也是一样的
*     $('#div1').offset().top;//元素距离上边的距离
*
*      $('#div1').position().left;//到有定位的祖先节点的距离，要是没有的话，就是到正整个页面的距离
*      $('#div1').position().top;//但是这个方法不认margin的值
*   });
*
*   实战小技巧
*     利用计算原理，得到相应值
*       - offsetParent()：获取有定位的祖先节点
*     实例：懒加载页面中的图片：在可视区才加载图片，没有在可视区是不加载图片的
*    想要获取一个不管有没有定位的元素到祖先节点的距离的方法：
*      $('#div2').offset().left - $('#div2').offsetParent().offset().left;
*
*   JQ的事件
*     on()
*     off()：取消事件
*       - JQ中都是绑定的形式
*       - 支持多事件写法
*       - click()写法，也是采用off()取消
*    在JQ中的事件操作都是绑定的形式
*
*   <div id="div1">aaaaa</div>
*   $(function(){
*     $('#div1').click(function(){ alert(1); });
*     $('#div1').click(function(){ alert(2); });//1和2都会弹出来
*
*     $('#div1').on('click',function(){ alert(123); });//弹出123来
*     //两种写法是没有区别的，
*     $('#div1').on('click mouseover',function(){ alert(123); });//鼠标点击会弹出123来，鼠标移动到上面也会弹出123来
*
*     $('#div1').on('click mouseover',function(){
*       alert(123);
*       $(this).off();//取消这个元素上的所有事件
*       $(this).off('mouseover');//取消这个元素上的mouseover事件
*     });//点击一次弹出123来，在点击时，就没有作用了
*   });
*
*   JQ的事件
*     Event对象
*       - pageX,pageY
*         >> 与client的区别
*       - which：键盘的键值
*       - target：目标元素
*       - stopPropagation()：阻止冒泡的操作
*       - preventDefault() ：阻止默认事件
*       - return false 直接在一个事件函数中写这个语句，就代表着，即阻止默认事件又阻止冒泡
*
*  <div id="div1">aaaaa</div>
*  $(function(){
*    $('#div1').click(function(ev){
*      alert( ev.pageX ); //鼠标的X坐标:相对于整个页面的
*      alert( ev.pageY ); //鼠标的Y坐标
*
*      alert( ev.clientX ); //鼠标的X坐标:相对于可视区的
*      alert( ev.clientY ); //鼠标的Y坐标
*
*      $(document).keydown(function(ev){
*         alert( ev.which );
*         alert( ev.ctrlKey );//按ctrl弹出来true
*      });
*
*      $(document).click(function(ev){
*        ev.target : 事件源 ->事件委托的视频
*        alert(this);//document
*        alert(ev.target); //div
*      });
*
*      $(document).click(function(ev){
*         alert(123);
*      });
*      $('#div1').click(function(ev){
*        //点击div1时，会弹出123来，
*        ev.stopPropagation();
*        //在加了这个语句后，点击div不会弹出123来
*      });
*
*      $(document).contextmenu(function(){
*         ev.preventDefault();
*      });
*    });
*  });
*  
*  JQ实战小技巧
*    多次添加on的处理方式
*    实例：拖拽效果
*
*  <div id="div1'>div</div>
*  <span id="span1">span</span>
*  $(function(){
*    $('#div1').click(function(){
*      $('#span1').click(function(){
*        alert(1);
*      });
*    });//这样在点击多次div1时，在去点击span会弹出多个1出来，也就是说span执行了很多次click事件，
*    可以写成这样的语句来消除这个结果：$('#span1').off('click').click(function(){});这样只会弹出一次啦。
*  });
*
*  JQ的事件
*    delegate()：事件委托
*      - 委托的好处
*      - ev.delegateTarget
*    undelegate() ： 取消委托事件
*
*   <input type="button" value="添加">
*   <ul><li>1111</li><li>2222</li><li>3333</li><li>4444</li></ul>
*   $(function(){
*     $('li').on('click',function(){ //普通的写法
*       $(this).css('background','red');
*     });
*     $('ul').delegate('li','click',function(){//事件委托的写法，事件委托利用的就是冒泡
*       $(this).css('background','red');//这里的this指的是委托的li
*       $(ev.delegateTarget)//这个指的是ul
*       $(ev.delegateTarget)。undelegate();取消委托事件
*     });
*     普通的写法在新添加的li是不会有任何反应的，
*     而在用事件委托的写法去添加新的li时，li也是有事件的。
*   });
*
*  JQ的事件
*    trigger()：主动触发
*      - 比click()形式更强大
*      - 事件的命名空间：
*      - 实例：主动触发的添加内容
*
*  <input type="button" value="添加" id="input1"><input type="text" id="input2">
*   <ul><li>1111</li><li>2222</li><li>3333</li><li>4444</li></ul>
*   $(function(){
*      $('ul').delegate('li','click',function(ev){
*        $(this).css('background','red');
*      });
*      $('input1').click(function(){
*        var $li = $('<li>'+ $('#input2').val() +'</li>');
*        $('ul').append($li);
*      });
*      $('#input2').keydown(function(ev){
*        if( ev.which == 13){
*          $('#input1').trigger('click');主动触发指定的事件
*        }
*      });
*   });
*
*  <div>div</div>
*  $(function(){
*    $('div').on('click',function(){
*      alert(0);
*    });
*    $('div').on('click.abc',function(){//.abc就是命名空间
*      alert(1);
*    });
*    $('div').trigger('click');//0,1
*    $('div').trigger('click');//0,1
*    $('div').trigger('click。abc');//1
*    想要只弹0或者只弹1的话，只要给事件加一个命名空间
*  });
*
* JQ中的两大阵营：
*   $().css(); $().html(); $().click;//都是针对JQ对象的
*   $.xxx(); $.yyy(0;$.zzz(); //工具方法。既可以给JQ对象用，也可以给原生JS用
*
*  工具方法
*    $.type()：查看变量的类型
*      - 比原生typeof更强大
*    $.isFunction()：判断是不是函数
*    $.isNumeric()：判断是不是数字 ‘123’这样也会返回true
*    $.isArray()：判断是不是数组
*    $.isWindow()：判断是不是window
*    $.isEmptyObject()：判断是不是空对象 {} true ;{'name':'12'} false数组也一样
*    $.isPlainObject()：判断是不是对象类型：对象自变量 ：{} new Object
*
*  $(function(){
*    var a = 'hello';
*    alert( typeof a ); //string
*    alert( $.type(a) );
*
*    var a = [];
*    alert( typeof a ); //object
*    alert( $.type(a) );
*
*    var a = {};
*    alert( typeof a ); //object
*    alert( $.type(a) );
*
*    var a = function(){};
*    var b = 'sed';
*    alert( $.isFunction(a) );true
*    alert( $.isFunction(b) );false
*  });
*  
*  工具方法
*    $.extend()：支持多对象操作，从第二个以后的内容都会把内容拷贝给第一个里面
*      - 对象继承操作
*      - 深拷贝操作
*    $.proxy()：改变this指向
*      - 两处传参的区别
*
*  $(function(){
*    var a = {
*      name : "hello"
*    };
*    var b = a;
*    b.name = 'hi';
*    alert(a,name);//=>hi 视频：对象引用
*
*    var a = {
*      name : 'hello'
*    };
*    var b={}
*    $.extend(b,a); //将a里面的内容全部拷贝到b里面去
*    b.name = 'hi';
*    alert(a.name);//hello
*    $.extend(b,a，{age:20});
*    alert(b.age); //20
*
*    var a = {
*      name : {age:20}
*    };
*    var b = {};
*    $.extend(b,a);//默认是浅拷贝，
*    b.name.age = 30;
*    alert( a.name.age );//30
*
*    $.extend(true,b,a);//深拷贝，true 代表深拷贝
*    b.name.age = 30;
*    alert( a.name.age );//20
*
*  });
*
*   $(function(){
*     //$.proxy()：改this指向
*    原生：
*     function show(){
*       alert(this);=>window
*     }
*     show,call( document );this=>document
*     工具方法：
*     function show(){
*       alert(this);
*     }
*     $.proxy( show,document )(); //document
*
*      function show(n1,n2){
*       alert(n1);
*       alert(n2)
*       alert(this);
*     }
*     $.proxy( show,document )(3,4); //3,4,document
*     $.proxy( show,document,3,4 )(); //3,4,document
*     //$.proxy( show,document,3 )(4); //3,4,document
*   });
*
*  JQ实战小技巧
*    利用This改指向，更加方便
*
*   $('#div1').on('click',function(){
*     var This = this;
*     setTimeout(function(){
*       //$(this).css('background','yellow');这里的this是window
*       $(This).css('background','yellow');
*     },1000);
*   })
*
*  JQ中的运动
*    时间的概念：JQ中运动速度的快慢，是同过时间来控制的
*    show(),hide(),toggle()：接收一个参数，除了下面三个参数以外，还可以自己添加时间，单位是毫秒
*      - fast normal slow -> 快：200毫秒 正常：400毫秒 慢：600毫秒
*    fadeIn(),fadeOut(),fadeToggle()：淡出、淡入
*      - 有默认的时间normal
*    slideDown(),slideUp(),slideToggle()：向下展开，向上收缩
*      - 有默认的时间normal
*
*  #div1{width:100px;height:100px;background:red;}
*  <input type="button" value="点击" id="input1">
*  <div id="div1"></div>
*  $(function(){
*    var bBtn = true;
*    $('$input1').click(function(){
*      if(bBtn){
*        $('#div1').hide('normal');
*        $('#div1').fadeOut();
*        $('#div1').slideDown();
*      }else{
*        $('#div1').show('normal');
*        $('#div1').fadeIn('fast');
*        $('#div1').slideUp();
*      }
*      bBtn = !bBtn;
*
*      $('#div1').toggle('slow');
*      $('#div1').fadeToggle();
*      $('#div1').slideToggle();
*    });
*  });
*  
*  JQ中的运动
*    animate()：做复杂运动的方法
*      - 参数的作用
*      - 数值的运算操作
*      - 配置参数step的作用
*        >> duration easing complete
*      - 队列的概念
*        >> 其他元素不会存入队列
*      - 链式运动
*      - delay()
*   #div1{width:100px;height:100px;background:red;}
*  <input type="button" value="点击" id="input1">
*  <div id="div1"></div>
*  $(function(){
*    animate()：
*      第一个参数：对象{}去设置样式属性和值（目标点）；
*      第二个参数：时间，运动的时间，默认是400ms；
*      第三个参数：运动形式，只有两种：swing（默认：缓冲：慢开慢的形式）linear（匀速）
*      第四个参数：运动结束的回调函数
*    $('#input').click(function(){
*      $('#div1').animate({
*         width : 300,
*         height : 400
*      }，1000,'swing',function(){
*        alert(123);
*      });
*
*      $('#div1').animate({
*         width : '+=100'
*      }，1000,'swing');
*
*      $('#div1').animate({
*        width : 300
*      },{
*        duration : 1000,//代表时间
*        easing : 'linear',//运动形式
*        complete : function(){ //回调函数
*          alert(123);
*        },
*        step : function(a,b){
*          console.log(a);//这个a是一个运动变化的值，可以检测我们定时器的每一次的变化
*          console.log(b);//得到的是Tween的一个算法
*          console.log(b.pos);//运动过程中的比例值(0-1)
*        }
*      });
*    });
*  });
*
*  <input type="button" value="点击" id="input1">
*  <div id="div1">0</div> => 273826678
*  $(function(){
*    $('#input1').click(function(){
*      $('#div1').animate({
*        width : 300 //这里是不能为空的
*      },{
*        duration : 2000,
*        easing : 'linear',
*        complete : function(){},
*        step : function(a,b){
*          $('#div1').html( parseInt(b.pos * 273826678) );
*        }
*      });
*    });
*  });
*
*  #div1{ width:100px;height:100px;background:red; position:absolute; }
*  <input type="button" value="点击" id="input1">
*  <div id="div1"></div>
*  $(function(){
*    $('#input1').click(function(){
*      $('#div1').animate({width : 300},1000);
*      $('#div1').animate({height : 300},1000);
*      $('#div1').animate({left : 300},1000);
*      //这里是先把width变成300了后才开始把height变成300，
*      //最后才是把位置移到left等于300的位置
*      可以写成这样:运动完宽后立即运动高，
*      $('#div1').animate({width : 300},1000).animate({height : 300},1000).animate({left : 300},1000);
*      要是想运动完宽后想要停止一段时间才去运动高时，可以用delay()延迟运动，接收的参数是延迟的时间
*      $('#div1').animate({width : 300},1000).delay(1000).animate({height : 300},1000);
*    });
*  });
*
*  JQ中的运动
*    stop()：停止运动的方法
*      - 参数的作用
*    finish()
*  #div1{ width:100px;height:100px;background:red; position:absolute; }
*  <input type="button" value="点击" id="input1">
*  <input type="button" value="停止" id="input2">
*  <div id="div1"></div>
*  $(function(){
*    $('#input1').click(function(){
*      $('#div1').animate({width : 300},1000).animate({height : 300},1000);
*    }):
*    $('#input2').click(function(){
*      $('#div1').stop();//默认情况下，只会停止当前运动
*      $('#div1').stop(true);//第一个参数：可以停止所有的运动
*      $('#div1').stop(true，true);//第二个参数：可以停止到指定的目标点（当前的运动）
*      $('#div1').finish();//完成所有的运动
*    });
*  }):
*
*  JQ实战小技巧
*    运动的队列问题
*    实例：淘宝轮廓图
*  #div1{ width:100px;height:100px;background:red; position:absolute; }
*  <input type="button" value="点击" id="input1">
*  <input type="button" value="停止" id="input2">
*  <div id="div1"></div>
*  $(function(){
*    $('#div1').mouseover(function(){
*      $(this).animate({width:200px,height:200});
*      $(this).stop().animate({width:200px,height:200});
*      //在快速移入移出时，会把运动的语句放入一个队列中，而stop()有情况队列的行为
*    }).mouseout(function(){
*      $(this).animate({width:100px,height:100});
*      $(this).stop().animate({width:100px,height:100});
*    })://在快速的移入移出时，当鼠标离开div后，还在不停的做运动，没有停止
*  }):
*
*  工具方法
*    $.parseJSON()：把JSON类型的字符串，转换成真正的JSON数据,只能针对JSON类型的字符串,要是严格的JSON
*    $.parseHTML()：转化html类型的字符串，转成DOM节点，放到一个数组中
*    $.parseXML()：把XML形式的字符串，转成真正的XML节点
*    $.isXMLDoc()：判断是不是XML的document
*  $(function(){
*    var a = '{"name":"hello"}';
*    var json = $.parseJSON(a);
*    alert(json.name)//hello
*
*    var a = '<div>div</div><span>span</span>'
*    var arr = $.parseHTML(a);
*    console.log(arr);//[div,span]
*  });
*
*  工具方法
*    $.ajax()
*      - 什么是ajax
*      - 提交数据，查询数据
*      - url
*      - success
*      - type
*      - data
*      - error ：页面出错的时候走这里，请求不成功
*      - dataType ：接收的数据的类型,这个是人为规定的，在规定以后，就不用再var dataJson = $.parseJSON(data);语句转换了。
*      - async：操作是否异步的，默认的情况下都是异步的
*  <form action="reg.php">
*      <input id="input1" type="text" name="user'>
*      <input type="submit" value="注册'>
*  </form>
*  <div id="div1"></div>
*  $(function(){
*    $('#input1').on('input',function(){
*      $.ajax({
*        url : 'user.php',
*        type : 'post',//默认是get
*        data : { user : $(this).val() },
*        dataType : 'json',
*        async : false, //同步，true为异步
*        success : function(data){
*           var dataJson = $.parseJSON(data);
*          //做该做的事情
*        },
*        error : function(err){
*          console.log(err.status);//打印出错误的状态码
*        }
*      });
*    });
*  });
*
*  工具方法
*    实例：ajax版本的选项卡
*    $.get():提交get方式的数据
*      - 参数的作用
*    $.post()：提交post方式的数据，两个参数都是一样的。
*      - 参数的作用
*   $(function(){
*     $.get('user.php',{name:"hello"},function(){},dataType).error(function(err){});
*     function(){}：是成功的回调函数
*     error：失败的回调函数
*   });
*
*  JQ插件
*    $.browser()：
*      - http://jquery.thewikies.com/browser/
*    $.cookie
*      - https://github.com/carhartl/jquery-cookie#readm
*    e-calendar：效果的插件
*      - http://www.jq22.com/jquery-info541
*      - 用法和JQ是相同的
*
*  UI组件
*    jQuery UI
*      - http://jqueryui.com/
*      - 交互、部件、特效、工具
*      - 配置参数、方法、自定义事件
*      - css主题
*
*    jQuery EasyUi
*      - http://www.jeasyui.com/
*      - 更强大的后台交互控件
*      - datagrid操作
* */
/*
* JQuery高级
*
* 清空内容
*   html("")
*   empoty() : 清空元素的里面的内容
*
* 删除节点
*   remove()：这个是在删除节点之前带有的事件时，在删除完后再添加到页面中时，添加的节点是没有事件的
*   detach()：这个是删除元素，但是可以保留元素之前的事件，当重新在添加到页面时，是有事件的
*
*   <div id="div1">div<span>span</span></div>
*   $(function(){
*       $('#div1').empoty();//div1里面的内容被删除了
*   });
*   <div id="div1">div1</div>
*   <hr>
*   $(function(){
*       var $div = $('#div1').remove();
*       $('body').append($div);
*   });
*
* 获取文本
*   text()
*       - 获取文本的特点
*
* 替换节点
*   replaceWith()
*   replaceAll()
*
*   <div id="div1">div<span>span</span></div>
*   <div>div2</div>
*   <div>div3</div>
*   $(function(){
*       alert( $('#div1').text() );
*       $('#div1').html('<h1>标题</h1>');//标题
*       $('#div1').text('<h1>标题</h1>');//<h1>标题</h1>
*       alert( $('div').text() );//获取一个集合的所有文本节点
*   });
*
*   <div id="div1">div1</div>
*   <hr>
*   <span id="span1">span<span>
*   $(function(){
*       $('#span1').replaceWith( $('#div1') );//span被替换成div
*       $('#span1').replaceAll( $('#div1') );//div被替换成span
*   });
*
* 事件扩展
*   hover()
*     - mouseenter,mouseleave(子元素不会影响到分元素)
*     - 与over.out区别
*   focusin()：光标移入，支持冒泡
*   focusout()：光标移出，支持冒泡
*     - 与focus(获取光标)，blur(失去光标)区别 不支持冒泡
*   one()：能触发一次
*
*   <div id="div1">div1</div>//移入bg蓝，移出bg红
*   $(function(){
*      $('#div1').hover(function(){//移入
*         $(this).css('background','blue');
*      },function(){//移出
*         $(this).css('background','red');
*      });
*   });
*
*   <div id="div1">
*       <input type="text">
*   </div>
*    $(function(){
*      $('input').on('focus',function(){
*           alert(123);
*      });
*      $('input').one('focus',function(){//只能触发一次事件
*           alert(123);
*      });
*   });
*
* 事件扩展
*   on()：可以接收五个参数，有一个是内部使用的，一般用两个参数就行
*     - 源码分析几大参数
*     - 获取原生event
*        >> originalEvent //通过这个属性可以找到原生下面的ev对象
*        >> changedTouches //移动端上面的属性
*     - 自定义事件
*   triggerHandler()
*     - 与trigger()的区别
*
*  <div id="div1"><span>span</span></div>
*  $(function(){
*       $('#div1').on('click',{name:"hello"},function(ev){
*           alert(123);
*           console.log(ev.data);//name:"hello"
*       });
*       $('#div1').on('click','span',{name:"hello"},function(ev){
*           alert(123);//点击div1的其他地方不会弹出123，只有点击span才会弹出123来
*       });
*
*       $('#img1').on('zoomIn',function(ev){ //缩小，自定义事件
*           $(this).css('width',200;);
*       });
*       $('#img1').on('zoomOut',function(ev){//放大，自定义事件
*           $(this).css('width',700;);
*       });
*       $('#img1').on('DOMMouseScroll',function(ev){//鼠标滚轮触发
*           if(ev.originalEvent.detail > 0){
*               $(this).trigger('zoomIn');
*           }else{
*               $(this).trigger('zoomOut');
*           }
*       });
*  });
*
*  <input type="text" id="input1">
*  <input type="button" id="input2" value="点击">
*   $(function(){
*       $('#input1').on('focus',function(){
*           $('this').css('background','red');
*       });
*       $('#input2').on('click',function(){
*           $('#input1').trigger('focus');//点击按钮输入框背景变红,光标在输入框里面的
*           //可以触发事件的默认行为
*           $('#input1').triggerHandler('focus');//点击按钮输入框背景变红,光标没有在输入框里面
*           //不会触发事件自带的默认行为
*       });
*   });
*
* 事件扩展
*   event对象
*     - stopImmediatePropagation() ：阻止冒泡的，会阻止本身的事件操作，事件要写到阻止的后面才行
*       >> 与stopPropagation()区别
*       >> 注意顺序的问题
*     - which的鼠标值
*       >> 注意加到mousedown上
*   ready()：
*     - 与$(function(){})关系
*     - 与原生window.onload的区别
*     - ready的问题
*
*   <div id="div1">
*       <span id="span1">span</span>
*   </div>
*   $(function(){
*       $('#div1').on('click',function(){
*           alert(123);
*       });
*       $('#span1').on('click',function(ev){
*           //ev.stopPropagation();//阻止冒泡
*           ev.stopImmediatePropagation()//阻止冒泡
*       });
*       //在点击span时候，会冒泡，弹出123来，在阻止冒泡后，在点击span就不会弹出123了
*        $('#span1').on('click',function(ev){
*           alert(456);
*       });
*       //ev.stopPropagation();这个只会阻止父级不会阻止自身，在点击span时是会弹456来的
*       //ev.stopImmediatePropagation();这个阻止的是父级和自身，在点击span时是不会弹456来的
*
*       $('#span1').on('mousedown',function(ev){
*           alert(ev.which);//鼠标的键值123对应左中右，写成click是不行的
*       });
*   });
*
*   $(function(){});
*   $(document).ready(function(){});
*   这两句话其实是一会事，所调的源码都是一样的
*   $(window).load(function(){});与$(function(){});是有区别的
*       $(function(){})：等DOM加载完就会执行
*       $(window).load(function(){})：等整个页面加载才会执行
*
*   JQ截至操作
*     nextUntil() ：下面的兄弟节点的截至
*     prevUntil() ：上面的兄弟节点的截至
*     parentsUntil() ：祖先节点的截至
*
*   数据缓存
*     data():接收两个参数
*       - prop()
*       - 与attr()三者的区别
*       - removeAttr(),removeProp(),removeData()：三个方法对应的删除方法
*
*   <div id="div1">
*       <p><span id="span1">span</span></p>
*   </div>
*   $(function(){
*       $('#span1').parents().css('border','1px red solid');
*       //所有的祖先节点都有边框
*       $('#span1').parentsUntil('body').css('border','1px red solid');
*       //截至到body的祖先节点有到边框，但是boby没有边框
*   });
*
*   <div id="div1">aaaaa</div>
*   $(function(){
*       $('#div1').data('name','hello');//name是key值，hello是value值
*           //把数据存档一个大的集合中，没有直接存到元素上面，可以防止内存泄漏
*       alert( $('#div1').data('name') ); //hello
*
*       $('#div1').attr('name','hello');//name是属性，hello是属性值
*           //直接把数据存到元素上面，给元素设置属性，
*       alert( $('#div1').attr('name') ); //hello
*
*       //prop()与attr()的作用相同的，都时给元素加属性，但是他们也是有区别的，
*       //attr()是以原生中的setAttribute(),而prop是通过原生中的 . [] 去设置的,例如：oDiv['index'] = i;
*   });
*
*   <input type="button" value="全选">//点击时全部选中
*   <input type="checkbox"><input type="checkbox"><input type="checkbox">
*   $(function(){
*       //原生
*       var aInput = document.getElementsByTagName('input');
*       aInput[0].onclick = function(){
*           for(var i=1;i<aInput.length;i++){
*               aInput[i].checked = true;//这是prop()的方法
*           }
*       };
*       var bBtn = true;
*       $('input[type=button]').click(function(){
*           if(bBtn){
*               //$('input[type=checkbox]').prop('checked',true);
*               $('input[type=checkbox]').attr('checked',true);
*           }else{
*               //$('input[type=checkbox]').prop('checked',false);
*               $('input[type=checkbox]').attr('checked',false);
*           }
*           bBtn = !bBrn;
*       });
*       //当使用attr时，点击一边是可以得到效果的，但是多点几次就没有效果了
*       //但是在使用prop时，是一直有效果的
*   });
*
*  JSON形式的设置
*     on()
*     css()
*     attr()
*  回调形式的设置
*     addClass()
*     html()
*     val()
*
*  <div>div</div>
*  $(function(){
*       $('div').css('width','100px').css('height','100px');
*       //可以写成这样
*       $('div'),css({
*           width : '100px',
*           height : '100px',
*           background : 'red'
*       });
*
*       $('div').on({
*           click : function(){},
*           mouseover : function(){}
*       });
*
*       $('div').addClass('box');
*       $('div').addClass(function(a,b){
*           //console.log(a);// 0，div的索引
*           //console.log(b);// 空字符串，之前的class
*           return 'box' + (a + 1);
*       });
*  });
*
*工具方法
*   $.merge() ： 合并数组,指针对两个数组
*   $.map() ：针对数组的操作
*   $.grep():return返回的是true
*   $.unique()：去重方法，针对DOM元素
*   $.inArray() ：查找数组的位置，类似于字符串中indexOf()
*   $.makeArray() ：把不是数组形式的变量转成数组
*   $.trim() ：去掉字符串前后空格的方法
*
*   $(function(){
*       var a = [1,2,3];
*       var b = [4,5,6];
*       var c = $.merge(a,b);
*       console.log(c);//[1,2,3,4,5,6]
*
*       var arr = ['a','b','c'];
*       arr = $.map(arr,function(a,b){
*           //console.log(a); //val 值
*           //console.log(b); //i 下标
*           return a + i
*       });
*       console.log(arr);//['a0','b1','c2']
*
*       var a = [1,5,3,8,2];
*       a = $.map(arr,function(a,b){
*           return a > 4
*       });
*       console.log(a);[5,8]
*
*       var str = '  hello    ';
*       alert('('+str+')');
*       alert('('+ $.trim(str) +')');
*   });
*
* ajax扩展
*   辅助
*     - $.param()
*     - serialize() ：针对form表单的,一定是name与value的组合，name1都不行
*     - serializeArray() ：针对form表单的，转成数组的格式
*   快捷方法
*     - load()：
*     //$('#div1').load('data.html');将data.html里面的数据加入div1里面
*     //$('#div1').load('data.html .box');将data.html里面的有class名为box的数据加入div1里面
*       >> 筛选的功能
*     - $.getScript()：动态添加script标签
*     - $.getJSON()：针对请求JSON或者JSONP的
*       >> JSONP,不受同源影响
*       >> 建议直接使用问号
*
*   <form>
*       <input type="text" name="a" value="1">
*       <input type="text" name="a" value="1">
*       <input type="text" name="a" value="1">
*   </form>
*   $(function(){
*       //平时传给后台的值都是：'key=val&key=val&key=val'
*       var obj = {'name':'hello','age':'20'}
*       obj = $.param(obj);
*       console.log(obj);//name=hello&age=20 string
*
*       var a = $('form').serialize();
*       console.log(a);//a=1&b=2&c=3 string
*
*       var a = $('form').serializeArray();
*       console.log(a);//[{name:'a',value:'1'},{name:'b',value:'2'},{name:'c',value:'3'}]
*
*       $.getJSON('data.php',function(data){
*           console.log(data);
*       });
*       $.getJSON('data.php?callback=?',function(data){
*           console.log(data);
*       });
*   });
*
* ajax扩展
*   默认配置
*       - $.ajaxSetup()
*   全局事件
*       - 加到document上，参数的意义
*       - $.ajaxStart()：被调用时触发
*       - $.ajaxStop()：请求结束后触发
*       - $.ajaxSuccess()：请求成功后触发
*       - $.ajaxError() ：请求出错后触发
*       - $.ajaxComplete()：
*       - $.ajaxSend()：
*   $(function(){
*     $.ajaxSetup({ //设置post为默认传输方式
*       type : 'POST'
*     });
*   });
*
*   防止库之间冲突
*       $.noConflict()
*   遍历
*       $.each()
*   后退链式操作
*       end()
*   后退添加链式操作
*       addBack()
*   add()
*
*   $(function(){
*       var arr = ['a','b','c']
*       var obj = {'name':'hello','age':'20'};
*       $.each(function(i,val){
 *           console.log(i);//0,1,2    name  age
 *           console.log(val);//a,b,c   hello 20
*       });
*   });
*
* JQ中的队列
*   $.queue()->入队  $.dequeue()->出队
*       - 概念与参数意义
*       - 队列名称
*   queue()  dequeue()
*       - 源码分析运动队列
*       - 默认队列名fx
*       - 队列的具体应用
*
*   $(function(){
*       //$.queue():接收3个参数
*       //JQ中的队列，存储的都是函数
*       $.queue(document,'xx',a);//doucment是元素，xx是队列的名字，a是队列里面的函数
*       function a(){alert(1);}
*       function b(){alert(2);}
*       function c(){alert(3);}
*       $.queue(document,'xx',b);
*       $.queue(document,'xx',c);
*       //JQ的队列，当进行出队的操作时候，会自动执行相应的函数
*       $.dequeue(document,'xx');//得到：1
*       $.dequeue(document,'xx');//得到：2
*       $.dequeue(document,'xx');//得到：3
*
*       $(document).queue('xx',a);
*       $(document).queue('xx',b);
*       $(document).dequeue('xx');//1
*       $(document).dequeue('xx');//2
*   });
*
* JQ中的回调对象
*   $.Callbacks()
*       - 基本概念与用法
*           >> add
*           >> remove
*           >> fire
*       - 应用场景
*       - 四大参数
*           >> once
*           >> memory
*           >> unique
*           >> stopOnFalse
*
*   $(function(){
*       function a(){alert(1);}
*       function b(){alert(2);}
*       function c(){alert(3);}
*
*       var cb = $.Callbacks();
*       cd.add(a);//添加到回调函数中
*       cd.add(b);
*       cd.fire();//触发 ->1 , 2
*       cd.add(c);
*       cd.remove(a);//删除a
*       cd.fire();// 1,2,3
*
*       var cb = $.Callbacks('once memory');
*       cd.add(a);
*       cd.add(a);
*       cd.add(b);
*       cd.fire();
*       cd.fire();
*       cd.add(c);
*       //在不写参数的情况下，会弹1,2；1,2。在写once参数的时候只弹出1,2;
*       //在没有写参数memory时，3是弹不出来的，写了以后，3就可以弹出来了，
*       //参数是unipue是去重操作，要弹出两次1来只会弹出来一次
*       //参数可以单独使用，也可以组合在一起使用
*   });
*
*  JQ中的延迟对象：是用来操作异步操作的
*    $.Deferred()
*       - 基本概念与用法
*           >> 与Callbacks()对比学习
*           >> 应用场景
*           >> 状态的定义
*           >> 状态的映射
*               resolve(解决) done(成功)
*               reject(未解决)  fail(失败)
*       - ajax中的应用
*           >> $.when()
*       - 利用状态的应用
*
*   $(function(){
*       setTimeout(function(){
*           alert(1);
*       },1000);
*       alert(2);
*       //得到的结果是先弹2在弹1，
*       //我想要让它先弹1在弹2的做法是：
*       var cd = $.Callbacks();
*       setTimeout(function(){
*           alert(1);
*           cb.fire();
*       },1000);
*       cd.add(function(){
*           alert(2);
*       });// -> ok
*
*       var dfd = $.Deferred();
*       setTimeout(function(){
*           alert(1);
*           dfd.resolve();
*       },1000);
*       dfd.done(function(){
*           alert(2);
*       });// -> ok
*   });
*
* JQ源码架构
*   基于面向对象程序
*       - 实例方法
*       - 静态方法
*       - this对象格式
*       - 下标
*
*   <div>div</div>
*   $(function(){
*
*   });
*
*   sizzle选择器
*       介绍与实现接口
*           - $() -> find()
*       通用选择
*           - *
*       层级选择
*           - > ：找父子级关系
*           - + ：下一个兄弟节点
*           - ~
*    <div id="div1">
*        <span>span0</span>
*       <p>p<span>span1</span></p>
*       <span>span2</span>
*       <div>div</div>
*       <span>span3</span>
*    </div>
*    $(function(){
*       $('*')//找到所有标签
*       $('#div1').find('*')//找到div1中的所有标签
*       $('#div1 span')//找到div1中的所有span
*       $('#div1 > span')//找到div1中的子标签是span的元素，只找到span2和span3，span1不是div子标签
*       $('p + span')//找到span2
*       $('p ~ span')//找到p标签下面兄弟节点中的所有的span标签 ，找到span2和span3,span0是找不到的
*
*    });
*
*    sizzle选择器
*       基本筛选
*           - :animated  : 寻找有运动的元素
*           - :eq() ：找到下标的元素
*           - :even
*           - :odd
*           - :first
*           - :last
*           - :gt()
*           - :lt()
*    <div></div><div></div><div></div><div></div> : w:100,h:100,bg:r
*    $(function(){
*       $('div').eq(0).animate({width:300},5000);
*       $(document).click(function(){
*           $('div').css('background','blue');//这个是所有的div都变成蓝色
*           $('div:animate').css('background','blue');//只有运动的div变成蓝色
*           $('div:eq(1)')//找到下标为1的元素
*           $('div:even')//找到奇数行的div
*           $('div:odd')//找到偶数行的div
*           $('div:first')//找到第一个div
*           $('div:last')//找到最后一个div
*           $('div:gt(2)')//找到索引大于2的div
*           $('div:lt(2)')//找到索引小于2的div
*       });
*    });
*
*    sizzle选择器
*       内容筛选
*           - :contains() :筛选文本
*           - :empty ：筛选内容为空的标签
*           - :parent ：筛选有内容的
*       可见性筛选
*           - :hidden ：筛选隐藏元素
*           - :visible ：筛选可视的元素
*    <div id="div1">div1<span>span123</span></div>
*    <div></div>
*    $(function(){
*       $('div')//找到所有的div
*       $('div:contains(div1)')//找到div里面的内容是div1的div标签
*       $('div:empty')//找到内容为空的div标签
*       $('div:empty')//找到div里面有内容的标签
*    });
*
*   sizzle选择器
*       子元素筛选
*           - :first-child  ：找到第一个子元素
*           - :last-child  ：找到最后一个子元素
*           - :first-of-type
*           - :last-of-type
*           - :nth-child()
*           - :nth-of-type()
*           - :only-child
*           - :only-of-type
*   <div id="div1">
*       <p>p</p><span>span</span><span>span</span><span>span</span><span>span</span>
*   </div>
*   $(function(){
*       $('#div1 span:first-child').css('background','red');
*       //当上面有p标签时，这个是找不到的，当没有p标签的是可以得到第一个span的背景变红
*       $('#div1 span:last-child').css('background','red');
*       //找到最后一个标签事span的元素，要是最后一个标签不是span是找不到元素的
*       $('#div1 span:first-of-type').css('background','red');
*       //找到div1里面的第一个span，
*       $('#div1 span:last-of-type').css('background','red');
*       //找到div1里面的最后一个span，
*       $('#div1 span:nth-child(2)').css('background','red');
*       //找到div1里面的全部标签中的第二个是span标签的元素，要是第二个不是span则找不到
*       $('#div1 span:nth-of-type(2)').css('background','red');
*       //找到div1里面的所有的span标签里面的第二个span标签
*       $('#div1 span:only-child').css('background','red');
*       //找到div1里面的仅有一个标签，且这个标签是span标签，在这里是找不到的
*       $('#div1 span:only-of-type').css('background','red');
*       //找到div1里面的span标签，且span标签在div1里面只有一个，就算还有其他标签，用这个也能找到span标签
*   });
*
*   sizzle选择器
*       表单筛选
*           - :button
*           - :checkbox
*           - :radio
*           - :checked
*           - :disabled
*           - :enabled
*           - :selected
*   筛选方法
*       filter()
*       not()
*       has()
*   <div class=""box>div1<span>span</span></div>
*   <div>div2</div>
*   $(function(){
*       $('div').filter('.box').css('bg','red');//筛选出div中带有class的名字为box的元素
*       $('div').not('.box').css('bg','red');//筛选出div中没有带class的名字为box的元素
*       $('div').has('span').css('bg','red');//找到div中包含span标签的div元素
*   });
*
*   JQ中的调试
*       基于firebug的插件firequery
*           - 自动注入jquery库
*           - 查看当前jquery库版本
*           - 高亮对应选择DOM元素
*           - 数据缓存查看
*
* */
/* 第八课 - 第二集*/