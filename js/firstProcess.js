$(function(){
    // console.log($("#passageholder1").children().eq(0));
    $.each($("#first-process").children(".movable-ele"), function (index, domele) {
        
        $(domele).on("touchmove", function (e) {
            e.stopPropagation();
            
            // console.log(e.touches[0].pageX);
            // console.log($(".innerholder").eq(0).offset().left);
            // console.log(e.touches[0].pageX - $(".innerholder").eq(0).offset().left);


            $(this).css("left", e.touches[0].pageX - $(".innerholder").eq(0).offset().left + "px")
            $(this).css("top", e.touches[0].pageY - $(".innerholder").eq(0).offset().top + "px")
            
            // e.preventDefaule();
        })
        $(domele).on("touchend", function (e) {
            e.stopPropagation();
           
            // console.log($(this).css("left"));
            // console.log($(".innerholder").eq(0).css("width"));
            // console.log(parseFloat($(this).css("left")) / parseFloat($(".innerholder").eq(0).css("width")));
            let percentX = parseFloat($(this).css("left")) / parseFloat($(".innerholder").eq(0).css("width"));
            let percentY = parseFloat($(this).css("top")) / parseFloat($(".innerholder").eq(0).css("height"));

            if (percentX > 0.633 && percentX < 0.916 && percentY > 0.328 && percentY < 0.421) {
                let parent = $(this).parent();
                $(this).off();
                $(this).fadeOut(function () {
                    $(this).remove();
                    
                    if (parent.children(".movable-ele").length === 0) {
                        
                        $(".on").attr("fn",1);
                        ableSlide();
                        blockdisable();
                        adddiv(1,1200);
                    }
                });
            } else {
                $(this).animate({
                    top: "33%",
                    left: '40%'
                }, 800)
            }

        })
        $(domele).on("touchstart", function (e) {
            e.stopPropagation()
            $(this).stop();
            
        })
    })

    handtips("#firstPage","33%","37%","37%","71%","rotate(-20deg)","first-page-hand");
})
