<template >
  <div >
  <div id = "bg">
    <header>
      <h1>径流信息可视化系统</h1>
      <div class="showTime"></div>
    </header>
  </div>

  </div>

</template>
<script >
import flexible from '../js/flexible';
export default {
        name: 'Map',
        data: function () {
            return {
                
            }
        },
        methods:{
          timenow(){
            var t = null;
            t = setTimeout(time, 1000);//開始运行
            function time() {
                clearTimeout(t);//清除定时器
                dt = new Date();
                var y = dt.getFullYear();
                var mt = dt.getMonth() + 1;
                var day = dt.getDate();
                var h = dt.getHours();//获取时
                var m = dt.getMinutes();//获取分
                var s = dt.getSeconds();//获取秒
                document.querySelector(".showTime").innerHTML = '当前时间：' + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
                t = setTimeout(time, 1000); //设定定时器，循环运行     
            }
          }
        },
        mounted() {
          flexible(window, document);
          this.timenow;
        }
    }
</script>

<style >
#bg{
background:url("../img/bg.jpg");
width:100%;			
height:100%;			
position:fixed;
background-size:100% 100%;}

header{
  background:url("../img/head_bg.png");
  height: 1.25rem;
  background-size: 100% 100%;

}
h1 {
    font-size: 0.475rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }

.showTime{
  position: absolute;
    top: 0;
    right: 0.375rem;
    line-height: 0.9375rem;
    font-size: 0.25rem;
    color: rgba(255, 255, 255, 0.7);
}
</style>