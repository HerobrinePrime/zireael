$(function () {

    var fir = true;
    var sec = true;

    $(".dries").on("touchstart", ".movable-ele", function (e) {
        e.stopPropagation();
        $(this).stop();
    })

    $(".dries").on("touchmove", ".movable-ele", function (e) {
        e.stopPropagation();

        var left = e.touches[0].pageX - $(".innerholder").eq(5).offset().left + "px";
        var top = e.touches[0].pageY - $(".innerholder").eq(5).offset().top + "px";
        // console.log(left + " " + top);
        $(this).css("left", left)
        $(this).css("top", top)

    })

    $(".dries").on("touchend", ".movable-ele", function (e) {
        e.stopPropagation();

        let percentX = parseFloat($(this).css("left")) / parseFloat($(".innerholder").eq(5).css("width"));
        let percentY = parseFloat($(this).css("top")) / parseFloat($(".innerholder").eq(5).css("height"));
        console.log(percentY);

        if (sec) {
            if (percentX > 0.600 && percentX < 0.899 && percentY > 0.290 && percentY < 0.322) {
                $(this).remove();
                sec = false;
                $("#air1").fadeIn();
            }
        }
        //X 0.693 0.892 Y0.375 0.422
        if (fir) {
            if (percentX > 0.603 && percentX < 0.892 && percentY > 0.162 && percentY < 0.228) {
                $(this).remove();//0.162   0.228
                fir = false;
                $("#air2").fadeIn();
            }
        }

        if ($(this).index() === 0) {
            $(this).animate({
                top: "34%",
                left: "15%"
            }, 800)
        }
        else {
            $(this).animate({
                top: "39%",
                left: "34%"
            }, 800)
        }

        // console.log($(".dries").children(".movable-ele"));

        if ($(".dries").children(".movable-ele").length === 0) {
            $(".on").attr("fn", 1);
            ableSlide();
            blockdisable();
            adddiv(6, 1500);
        }
    })

    handtips("#sixthPage","38%","33%","20%","80%","rotate(-20deg)","sixth-page-hand");
})

function jump(){
    $("body").animate({
        opacity:0
    },1500,function(){
        // $("body").css("opacity",1);
        location.href = './tokei.html'
    })
}