function anime(obj,callback){
    // console.log(obj.offsetLeft);414
    obj.timer = setInterval(function(){
        var step = (0 - obj.offsetLeft)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        if(obj.offsetLeft == 0){
            // console.log("asd");
            clearInterval(obj.timer);
            callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    },15);
    
}

function adddiv(int,during){
    $("#passageholder"+int).fadeIn(1000,function(){
        $("#passageholder"+int).children().eq(0).animate({
            left: "0"
        },during).siblings().animate({
           left: "0"
        },during,"swing",function(){
            passOn();
        })
    });


    // $("#passageholder"+int).children().eq(0).animate({
    //     left: "0"
    // },during).siblings().animate({
    //     left: "0"
    // },during).parent().fadeIn(1000)


    // $("#passageholder"+int).children().eq(1).animate({
    //     left: "0"
    // },during)
}