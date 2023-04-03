function beginning() {
    // window.addEventListener("load", function () {
        var fir = document.querySelector(".fir");
        var firstIn = document.querySelector(".firstIn");
        var firstIns = firstIn.querySelectorAll("div");
        var clouds = document.querySelectorAll(".cloud");
        var click1 = document.querySelector(".click1");
        var click2 = document.getElementById("click2");
        var textDiv = document.querySelector(".textDiv");
        var jiujiu = document.getElementById("jiujiu");
        var shuangyun = document.getElementById("shuangyun");
        // console.log(clouds);
        var k = 0;
        function show(){
            if(k<11){
                // console.log(firstIns[k]);
                firstIns[k].className = "firbgsC";
                setTimeout(show,100);
                k++;
            }
            else
                return;
        }
        function cloud() {
            clouds[0].className = "fir cloud cloud22 cloud1";
            clouds[1].className = "fir cloud cloud11 cloud2";
        }
        function jiji() {
            setTimeout(function(){
                jiujiu.className = "fir jiujiu jojo";
            },1000);
        }
        setTimeout(function () {
            show();
            cloud();
            jiji();
        }, 1000);

        setTimeout(function () {
            // fir.firstElementChild.style.display = 'block';
            // fir.removeChild(firstIn);
            click1.className = "click1 enable";
            document.querySelector('.tuzuku').style.opacity = 1
        }, 5000);

        var rrr = document.querySelector("#rrr");
        // var changedBgDIv = document.querySelector("#changedBgDIv");
        var disappear = document.querySelector("#disappear");
        var left = document.getElementById("left");
        var right = document.getElementById("right");
        var sun = document.getElementsByClassName("TheSun");
        var light = document.getElementsByClassName("lighton");
        var shanhe = document.getElementById("shanhe");
        var yuncai = document.getElementById("yuncai");
        var dianxiaodian = document.getElementById("wenzi");
        click1.addEventListener('click', function () {
            // changedBgDIv.className = "fir zoomIn";
            // disappear.className = "tubiao disappear";
            // click1.className = "click1";
            // setTimeout(function () {
            //     textDiv.className = "textDiv textDivZoomIn";
            // }, 1500);
            left.className = "left";
            right.className = "right";
            setTimeout(function(){
                document.querySelector('.firstIn').remove()
                // fir.removeChild(firstIn);
                // changedBgDIv.remove();
                clouds[0].remove();
                clouds[1].remove();
                fir.style.backgroundImage = "url()";
                disappear.remove();
                click1.remove();
                sun[0].remove();
                light[0].remove();
                jiujiu.remove();
                document.querySelector('.tuzuku').remove()
                shanhe.className = "shanhe2";
            },1000)
            setTimeout(function(){
                yuncai.className = "yuncai2";
                dianxiaodian.className = "dianxiaodian2";
                shuangyun.className = "shuangyun shuangyundo";
            },1500)
            setTimeout(function(){
                click2.className = "guo click2";
            },3000)
        });

        var main = document.querySelector(".main");

        // textDiv.addEventListener("click",function(){
        //     // document.body.removeChild(fir);

        //     // main.style.display = 'block';
        // });
    // })
}