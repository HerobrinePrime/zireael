function handtips(pageId,startTop,startLet,endTop,endLeft,rotate,theClass){
    anime();

    $(pageId).find(".handtips").css({
        top:startTop,
        left:startLet,
        transform:rotate
    });

    setInterval(anime,2000)

    function anime(){
        return new Promise(resolved =>{
            setTimeout(resolved,400)
        }).then(next =>{
            return new Promise(resolved =>{
                $(pageId).find(".handtips").addClass(theClass);
                $(pageId).find(".handtips").animate({
                    top:endTop,
                    left:endLeft
                },1400,resolved);
            })
        }).then(next =>{
            $(pageId).find(".handtips").removeClass(theClass);
            return new Promise(resolved =>{
                setTimeout(resolved,200)
            })
        }).then(next =>{
            $(pageId).find(".handtips").css({
                top:startTop,
                left:startLet
            });
        })
    }
}

$(function(){
    // history.go(0);
    $(".handtips").on("touchstart",function(e){
        e.stopPropagation();
        // $(this).fadeOut(200,function(){
        //     $(this).remove();
        // });
    })

    $(".interactive").on("touchstart",function(){
        $(this).parent().siblings(".handtips").fadeOut(200,function(){
            $(this).remove();
        });
        // console.log($(this).parent().siblings(".handtips"));
    })
})