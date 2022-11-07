
function setRem() {
    var ui_w = 375;
    // 获取屏幕的宽度
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // console.log(ui_w, clientWidth);

    // 通过js动态改变html根节点字体大小
    var html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientWidth / ui_w) * 10 + 'px';
}
setRem();
// window.onresize 浏览器被重置大小执行事件
window.onresize = setRem;




// $(function(){
//     function setRem(){
//         var clientWidth=$(window).width();
//         var nowRem=(clientWidth/375*10);
//         $("html").css("font-size",parseInt(nowRem, 10)+"px");
//     };
//     setRem();

//     $(function(){
//         var timer;
//         $(window).bind("resize",function(){
//             clearTimeout(timer)
//             timer=setTimeout(function(){
//                 setRem();
//             }, 100)
//         })
//     });
// });

