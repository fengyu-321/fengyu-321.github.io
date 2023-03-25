function mydebounce(func, wait) {
    // 延时器标识符
    var timeoutId = null;
    // 使用一个变量,保存this上下文的对象
    var context = null;
    var args = null;
    return function () {
        context = this;
        args = arguments;
        // 清除上一个延时器
        window.clearTimeout(timeoutId);
        // 开启一个延时器
        timeoutId = window.setTimeout(function () {
            func.apply(context, args);
        }, wait);
    }
}//节流
// 获取dom对象的方法
function $(cssSelector) {
    var dom = document.querySelectorAll(cssSelector);

    if (dom.length === 0) {
        return null;
    }

    if (dom.length === 1) {
        return dom[0];
    }

    return dom;
}
// 获取相关dom对象
var lifts = $(".news_list li");
var sidebarLis = $(".right .box");
console.log(lifts);
console.log(sidebarLis);
var m = $(".m");
// 定义一个数组变量
var arrHeight = [];
// 获取所有楼层的offsetTop值
for (var i = 0; i < lifts.length; i++) {

    arrHeight.push(lifts[i].offsetTop-100);
}
/* console.log(arrHeight); */
// 给页面绑定滚动事件
window.onscroll = mydebounce(function () {
    // 获取页面垂直滚动距离
    var curScrollTop = Math.floor(window.pageYOffset);

    // 定义一个高亮楼层索引号
    var index = -1;

    // 倒序遍历
    for (var i = arrHeight.length - 6; i >= 0; i--) {
        if (curScrollTop >= arrHeight[i]-100) {
            index = i;
            console.log(index);
            break;
        }
    }

    for (var j = 0; j < sidebarLis.length-5; j++) {
        animate(m, {
            "top": index * 115+7.5,
        },10000)
    }

    if (index != -1) {
        animate(m, {
            "top": index * 115+7.5,
        },10000)
    }
},400);


// 循环给右侧电梯导航绑定事件
for (var i = 0; i < sidebarLis.length; i++) {
    // 设置自定义属性
    sidebarLis[i].dataset.index = i;
    // 绑定事件
    sidebarLis[i].onclick = function () {
        
        

        // 获取自定义属性
        var index = this.dataset.index;
        animate(m, {
            "top": index * 115+7.5,
        },10000
        )
        // 页面滚动
        window.scroll({
            top: arrHeight[index],
            behavior: "smooth"
        });
    }
}
