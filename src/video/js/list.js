/*
列表页面需求：
list.html.png 页面需求：
1、最上方居中部分为排序方式单选项，默认排序/评分最高/访问最多等，选择后对应加载（样例可改为随机加载），上下间距20px。样例图片已提交请PULL。图片按固定16:9比例根据当前页面宽度自由缩放大小，其中大图片按2倍16:9显示并与其他图片完全对其顺序排列即可（如设计图），图片四周外间距10px，文字默认为白色，可自定义增加参数来定义样式。整个图片为链接。请在图片列表中预留一行居中显示文字：热门推荐，字体加粗加大，上下间距20px。

2、图片显示状态：
1：鼠标指向图片后以渐变效果方式显示房间昵称、地域、年龄文字，这3项之间的间距20px，一行无法放下时换行往上扩展显示（不隐藏），下方底色层为透明灰色。当鼠标指向图片2秒后AJAX加载显示Flash/HTML5视频或录制的视频（加载时将图片以半透明方式循环显示来标识其加载状态）。用��判断全站未安装Flash时的JS提示之前发你的老页面中有代码，请整合进来，HTML5视频播放样例请直接搜索下代码，非常简单。
2：默认图片上面一直显示文字：群聊中（100），如设计图中的大图，鼠标指向图片后以渐变效果方式切换文字显示为：昵称、地域、年龄。该状态不用加载Flash/HTML5视频。
3：AJAX动态以渐变效果方式将图片切换加载为另外一个图片（包括文字、标签等信息一起）。
4：图片右上角请增加2个图标样例，有title（上右间距10px），多个图标往右排列，无法放下换行显示。同时添加一个居中图标，多个图标间距10px，无法放下换行显示，无title。这2种图标都可以为其单独设置链接，如未设置就按整合图片的链接。

3、图片列表加载方式：采用AJAX方式动态加载显示（包括点击页头搜索框后方窗口中的分类和标签动态加载改变其内容），当滚动条滚动到页面底部时触发加载。设置“每次加载数/同时最大显示条数”值，比如该值为100/500，用户打开页面后默认AJAX动态加载当前100个图片，往下滚动达到100个房间时继续加载100个，当达到500的时候继续加载，但同时隐藏最早加载出来的旧100个图片，同理往上滚动加载旧的100个房间时隐藏新加载出来的100个，始终保持显示的总数为500即可。加载时居中显示loading.gif图标作为加载过程中的标识。

4、当页面内容滚动超过当前页面时，右侧浮动跟随显示居顶和居底按钮，回到当前页面顶部时隐藏（有淡入淡出效果），居顶和居底时有滚动平滑效果（非直接切换过去）。链接范围各一半，默认以80%透明度显示按钮，指向各自链接区域后100%显示，按钮中间的间距20px，icon-up.png、icon-down.png图标请整合。注：居底时直接转到当前页面的底部即可（不含又加载出来的内容）。

//
1.正在加载时状态
2.当新选择，加载完毕后删除之前图片
3.当滚动时，判断是否要显示新图片，假如还存在新图片，就显示，否则继续动态加载（注意加载后不删除之前的图片）

*/

$(function() {
  //图片位置对齐
  var style = $("<style></style>");
  style.appendTo($("body"));
  var width = 0;

  function ResetImg() {
    width = parseInt($(".main .list").width());
    myapp.log("width:" + width);
    var w1 = parseInt((width - 20) / 3),
      h1 = parseInt(w1 * 9 / 16),
      w2 = width - w1 - 10,
      h2 = h1 * 2 + 10;
    var h = 9 * width / 16 / 3;
    style.html('.main .img{width:' + w1 + 'px;height:' + h1 + 'px;}\n .main .img2{width:' + w2 + 'px;height:' + (h2) + 'px;}');
    setTimeout(function() {
      //修复图片变大后出现滚动条时需重新计算图片大小
      if (parseInt($(".main .list").width()) < width) {
        ResetImg();
      }
    }, 1);
  }
  ResetImg();
  myapp.bind("resize", ResetImg);

  //自动加载视频
  var loadInterval = null;
  var that = null;
  $(".list").on("mouseenter mouseleave", ".img", function(e) {
    clearTimeout(loadInterval);
    that = $(this);
    if (e.type === "mouseenter") {
      loadInterval = setTimeout(function(e) {
        myapp.log("加载并显示视频");
        //that.fadeOut();
        that.addClass("hover");
        var flv = that.attr("flv"),
          video = that.attr("video");
        if (flv) {
          var swf = $('<embed class="swf" src="' + flv + '" allowfullscreen="true" quality="high" align="middle" allowscriptaccess="always" type="application/x-shockwave-flash" wmode="transparent">');
          swf.appendTo(that);
        } else if (video) {
          var v = $('<video src="' + video + '" controls="controls">您的浏览器不支持 video 标签。</video>');
          v.appendTo(that);
        }
      }, 2000);
    } else {
      that.find(".swf").remove();
      clearTimeout(loadInterval);
    }
  });



  //到顶部
  //到底部
  var win = $(window);
  var up = $(".goto .goto-up");
  var down = $(".goto .goto-down");

  function gotoSwitch() {
    var top = win.scrollTop();
    if (top === 0) {
      up.addClass("hide");
    } else {
      up.removeClass("hide");
    }
  }
  win.scroll(gotoSwitch);
  gotoSwitch();
  var interval = null;
  up.click(function() {
    clearInterval(interval);
    var top = win.scrollTop();
    var up = top / 10;
    var times = 0;
    interval = setInterval(function() {
      top -= up;
      times += 1;
      if (times > 10) {
        clearInterval(interval);
      }
      win.scrollTop(top);
    }, 50);
  });
  down.click(function() {
    var scrollTop = $(this).scrollTop();　　
    var scrollHeight = $(document).height();　　
    var windowHeight = $(this).height();
    var downheight = scrollHeight - scrollTop - windowHeight; //要向下滚动的距离
    var down = downheight / 10;
    var times = 0;
    clearInterval(interval);
    interval = setInterval(function() {
      scrollTop += down;
      times += 1;
      if (times > 10) {
        clearInterval(interval);
      }
      win.scrollTop(scrollTop);
    }, 50);
  });


  //图片滚动加载
  var perNum = 30; //每次加载图片数目
  var maxShow = 90; //最大加载图片数目
  var nowNum = 0; //当前加载图片数目
  var getImgUrl = '../src/json/list.json';
  var imgInfos = [];
  var list = $(".main .list");
  //下载图片信息
  function loadImg(type, callback) {
      $.ajax({
        url: getImgUrl + '?type=' + type,
        dataType: 'json',
        success: function(data) {
          myapp.log(data);
          if (data) {
            callback(data);
          }
        }
      });
    }
    //需要下载新的图片信息

  function needNewImg(clear, callback) {
    if (!callback || typeof callback !== 'function') {
      callback = function() {};
    }
    if (clear) {
      list.find(".load-first").show();
      list.find(".load-more").hide();
    }
    loadImg($(".select-order").val(), function(data) {
      if (clear) {
        imgInfos = [];
        nowNum = 0;
        list.find(".img").remove();
        list.find(".img2").hide();
      }
      list.find(".load-first").hide();
      list.find(".load-more").hide();
      imgInfos = imgInfos.concat(data);
      callback();
    });
  }
  $(".select-order").bind("change", function() {
    var that = $(this);
    loadImg(that.val(), function(data) {
      imgInfos = [];
      nowNum = 0;
      list.find(".img").remove();
      imgInfos = imgInfos.concat(data);
      for (var i = 0; i < perNum && i < imgInfos.length; i++) {
        addimg(imgInfos[i]);
      }
      myapp.trigger("resize");
    });
  }).trigger("change");


  //添加图片到视图中
  function addimg(info) {
    nowNum++;
    info.flv = info.flv ? info.flv : '';
    info.video = info.video ? info.video : '';
    var classs = "img";
    if (nowNum === 1) {
      var img2 = list.find(".img2").css("background-image", info.url);
      img2.find(".stage").text(info.stage);
      img2.find(".name").text(info.name);
      img2.find(".area").text(info.area);
      img2.find(".age").text(info.age);
      img2.show();
      return;
    } else if (nowNum <= 3) {
      classs = "img";
    } else {
      switch (nowNum % 3) {
        case 1:
          classs = "img left marginright10";
          break;
        case 2:
          classs = "img left";
          break;
        case 0:
          classs = "img right";
          break;
      }
    }
    info.id = nowNum;
    info.class = classs;

    var html = $(template.list.large_template.replace(/\{\%([^%}]+)\%\}/g, function(a, b) {
      return info[b];
    }));
    if (nowNum > 3) {
      html.insertBefore(list.find('.load-more'));
    } else {
      html.appendTo(list.find(".float-left"));
    }
  }

  function winScroll() {
    win.trigger("scroll");
  }
  win.scroll(function() {
    var scrollTop = $(this).scrollTop();　　
    var scrollHeight = $(document).height();　　
    var windowHeight = $(this).height();　　
    if (scrollTop + windowHeight >= scrollHeight) {　　　　 //alert("you are in the bottom");
      myapp.log("需新添加新图片");
      for (var i = 0; i < perNum; i++) {
        if (nowNum < imgInfos.length) {
          addimg(imgInfos[nowNum]);
        } else {
          needNewImg(false, winScroll);
          break;
        }
      }　
    }
    /*var scrollTop = win.scrollTop();
    var imgs = $(".list .img");
    var img = $(imgs[imgs.length - perNum]);
    if(!img || img.length === 0){img = $(imgs[0]);}
    var signTop = parseInt(img.position().top);
    if(scrollTop>signTop){
      myapp.log(scrollTop+">"+signTop+"需新添加新图片");
      for(var i = 0;i<perNum;i++){
        if(nowNum<imgInfos.length){
          addimg(imgInfos[nowNum]);
        }else{
          needNewImg(false,winScroll);
          break;
        }
      }
    }*/
  });
});