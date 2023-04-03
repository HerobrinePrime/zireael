$(function () {


    var startY = 0;
    $(".cap").on("touchstart", function (e) {
        e.stopPropagation();
        startY = e.touches[0].clientY;
        // e.preventDefaule();
    })
    $(".cap").on("touchmove", function (e) {
        e.stopPropagation();
        let currrentTop = e.touches[0].clientY;
        let dis = currrentTop - startY;

        // console.log(dis);
        // console.log($("#cap").css("top"));
        // console.log($("#cap").css("top") + dis);
        // console.log(parseFloat($("#cap").css("top")));
        let percent = currrentTop / parseFloat($(".innerholder").eq(4).css("height"));

        if (percent > 0.636) {
            $("#cap").css("top", "63.6%")
            return
        }
        if (percent < 0.593) {
            $("#cap").css("top", "59.3%")
            capbreak();
        }

        $("#cap").animate({
            top: currrentTop + "px"
        }, 10)

        // e.preventDefaule();
    })
    $(".cap").on("touchend", function (e) {
        e.stopPropagation();
        // e.preventDefaule();

    })

    handtips("#fifthPage", "66%", "42%", "61%", "42%", "rotate(-20deg)");

});

function capbreak() {
    // $("#cap").children().prop("src","res/items/lid2.webp");
    $(".cap").remove();
    new Promise((resolved, rejected) => {
        $(".flames").fadeIn(1200, resolved);
    }).then(success => {
        return new Promise(resolved => {
            $("#hongbei1").fadeOut(1500);
            $("#hongbei2").fadeIn(1500, resolved);
        })
    }).then(success => {
        return new Promise(resolved => {
            $(".on").attr("fn", 1);
            ableSlide();
            blockdisable();
            setTimeout(function () {
                adddiv(5, 1200);
            }, 1000)
        })
    })
}

