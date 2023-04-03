$(function(){
    
    var timeout = null;
    var timeoutinline = false;
    $("#touchable-board").on("touchstart",function(e){
        e.stopPropagation();
        // e.preventDefaule();
    })
    $("#touchable-board").on("touchmove",function(e){
        e.stopPropagation();
        // console.log(timeout);
        
        if(!timeoutinline){
            timeoutinline = true
            timeout = setTimeout(function(){
                touchableBoardDisabled();
            },2000);
        }
        
        $("#lefthand").addClass("handmove1");
        $("#righthand").addClass("handmove2");
        // e.preventDefaule();
    })
    $("#touchable-board").on("touchend",function(e){
        e.stopPropagation();
        clearTimeout(timeout);
        timeoutinline = false
        $("#lefthand").removeClass("handmove1");
        $("#righthand").removeClass("handmove2");
        // e.preventDefaule();
    })

    // handtips("#forthPage","40%","77%","30%","37%","rotate(-20deg)");
})

function touchableBoardDisabled(){
    new Promise((s,r)=>{
        $("#coolafter").fadeIn(2000)
        $("#coolbefore").fadeOut(2000,s)
    }).then(ora =>{
        return new Promise((s,r)=>{
            $("#touchable-board").remove();
            $("#lefthand").fadeOut(1000)
            $("#righthand").fadeOut(1000,s)

            
        })
    }).then(ora =>{
            $(".on").attr("fn", 1);
            ableSlide();
            blockdisable();
            setTimeout(function(){
                adddiv(4,1200);
            },800)
    })
}