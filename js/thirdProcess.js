$(function(){
    $("#cloth").on("touchmove", function (e) {
        e.stopPropagation();
        $(this).css("left", e.touches[0].pageX - $(".innerholder").eq(2).offset().left + "px")
        $(this).css("top", e.touches[0].pageY - $(".innerholder").eq(2).offset().top + "px")
        // e.preventDefaule();
    })

    $("#cloth").on("touchend", function (e) {
        e.stopPropagation();
        let percentX = parseFloat($(this).css("left")) / parseFloat($(".innerholder").eq(2).css("width"));
        let percentY = parseFloat($(this).css("top")) / parseFloat($(".innerholder").eq(2).css("height"));
        console.log(percentX, percentY);

        //28 30 32     33 37 41
        if (percentX > 0.321 && percentX < 0.49 && percentY > 0.268 && percentY < 0.33) {
            $(this).off();
            new Promise(callback => {
                $(this).animate({
                    top: "30%",
                    left: '37%'
                }, 300, callback())
            }).then(next => {
                return new Promise(callback => {
                    $("#before-steam").fadeOut(2000);
                    $("#after-steam").fadeIn(2000, callback());
                })
            }).then(next => {
                // console.log("asdfafd");
                return new Promise(callback => {
                    setTimeout(function () {
                        callback();
                    }, 2000)
                })
            }).then(next => {
                $("#cloth").animate({
                    top: "41%",
                    left: '81%'
                }, 1000)
            }).then(next => {
                $(".on").attr("fn", 1);
                ableSlide();
                blockdisable();
                setTimeout(function(){
                    adddiv(3,1200);
                },800)
            })
        }
        // $(this).animate({
        //         top: "30%",
        //         left: '37%'
        //     }, 300, function () {
        //         $("#before-steam").fadeOut(2000);
        //         $("#after-steam").fadeIn(2000, function () {
        //             setTimeout(function () {
        //                 $("#cloth").animate({
        //                     top: "41%",
        //                     left: '81%'
        //                 }, 1000)
        //             }, 1000)
        //         });
        //     })
        else {
            $(this).animate({
                top: "41%",
                left: '81%'
            }, 800)
        }

    })

    $("#cloth").on("touchstart", function (e) {
        e.stopPropagation();
        $(this).stop();
    })

    handtips("#thirdPage","40%","77%","30%","37%","rotate(-20deg)","third-page-hand");

})