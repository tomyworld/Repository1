// 根据设备调整字体 控制显示

{/* <meta name="viewport" content="width=device-width,user-scalable=no, initial-scale=1"></meta> */}


/*设置根元素<html>字体大小*/
function getRem() {
    var html = document.getElementsByTagName("html")[0]; /*获取标签元素<html>*/
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth; /*获取设备的宽度  ||后为兼容IE低版本写法*/
    html.style.fontSize = oWidth / 6.4 + "px"; /*设置根元素<html>字体大小   计算出的值 就相当于1rem;为什么？ 这就是rem单位的规定 1rem就等于根元素<html>字体大小*/
}

/*6.4: 为设计稿宽度640px; 若是750px的设计稿 只需要将6.4改为7.5即可。
    * 在手机屏幕宽度与设计稿一致时，即：oWidth = 750px 那么上面的计算 oWidth / 6.4 + "px" 结果就是100px;  html.style.fontSize = 100px 
    *css3中规定 1rem就对应这<html>的font-size的大小，所以100px = 1rem 这样方便大家将px转化为rem 按照这个比例来设置字体大小、元素宽高、内外边距等的单位为rem;
    *举例：在设计稿中，某一行字体大小为14px,则我们需要在css文件中将对应的字体设置为0.14rem;
    *      在设计稿中，某一个元素宽高分别为 100px与20px;则我们需要在css中将对应的宽高设置为1rem与0.2rem;
    */

/*页面初始化调用getRem()*/
window.onload = function() {
    /*初始化*/
    getRem();
    /*getRem绑定监听*/
    window.addEventListener("resize", getRem, false);
};