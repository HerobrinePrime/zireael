var isOn = false;

$(function () {
    $(".blockspan").on("touchstart", warningOn)
})

$(function(){

    var start = 0;
    var currentAttrFn = 0;
    // var distance = 0;
    // var end = 0;
    $(".swiper-slide").on("touchstart",function(e){

        // console.log($(this).index());
        currentAttrFn = $(".on").attr("fn");
        start = e.touches[0].clientX;
    })
    $(".swiper-slide").on("touchmove",function(e){
        // console.log($(this).index());
        // console.log($(".on").attr("fn"));
        // e.preventDefaule();
    })
    $(".swiper-slide").on("touchend",function(e){
        // console.log($(this).index());
        // console.log($(".on").attr("fn"));
        if(e.changedTouches[0].clientX !== start && $(".on").attr("fn") != 1 && $(".on").attr("fn") == currentAttrFn){
            warningOn()
        }
    })
})

function warningOn() {
    if (isOn)
        return;
    else {
        isOn = true;
        new Promise((success, reject) => {
            $("#warning").fadeIn(300, success);
        }).then(next => {
            return new Promise(success => {
                setTimeout(success, 1000)
            })
        }).then(next => {
            $("#warning").fadeOut(800,next);
        }).then(a =>{
            isOn = false;
        })
    }
}

function passOn() {
    if (isOn)
        return;
    else {
        isOn = true;
        new Promise((success, reject) => {
            $("#pass").fadeIn(300, success);
        }).then(next => {
            return new Promise(success => {
                setTimeout(success, 1000)
            })
        }).then(next => {
            $("#pass").fadeOut(800,next);
        }).then(a =>{
            isOn = false;
        })
    }
}