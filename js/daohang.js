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
// 定义一个数组变量
var arrHeight = [];
// 获取所有楼层的offsetTop值
for (var i = 0; i < lifts.length; i++) {

    arrHeight.push(lifts[i].offsetTop-100);
}
/* console.log(arrHeight); */
// 给页面绑定滚动事件
window.onscroll = function () {
    // 获取页面垂直滚动距离
    var curScrollTop = Math.floor(window.pageYOffset);

    // 定义一个高亮楼层索引号
    var index = -1;

    // 倒序遍历
    for (var i = arrHeight.length - 1; i >= 0; i--) {
        if (curScrollTop >= arrHeight[i]) {
            index = i;
            break;
        }
    }

    // 清除高亮
    for (var j = 0; j < sidebarLis.length; j++) {
        sidebarLis[j].classList.remove("active");
    }

    // 判断index的值是否为-1
    if (index != -1) {
        // 实现高亮
        sidebarLis[index].classList.add("active");
    }
};


// 循环给右侧电梯导航绑定事件
for (var i = 0; i < sidebarLis.length; i++) {
    // 设置自定义属性
    sidebarLis[i].dataset.index = i;
    // 绑定事件
    sidebarLis[i].onclick = function () {
        // 判断是否含有.backUp类名
        if (this.classList.contains("backUp")) {
            window.scroll({
                top: 0
            });
            return;
        }

        // 获取自定义属性
        var index = this.dataset.index;

        // 页面滚动
        window.scroll({
            top: arrHeight[index],
            behavior: "smooth"
        });
    }
}