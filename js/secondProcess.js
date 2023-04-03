$(function () {
    // $("#fire").on("click",toast);
    var isMoving = false;
    $("#fire").one("touchstart", function (e) {
        e.stopPropagation();
        toast();
    });
    $("#fire").one("touchend", function (e) {
        e.stopPropagation();
    });
    $("#fire").on("touchstart", function (e) {
        e.stopPropagation();
        if (isMoving) {
            return;
        }
        else {
            isMoving = true;
            $("#fire").addClass("fireclick");
            setTimeout(function () {
                $("#fire").removeClass("fireclick");
                isMoving = false;
            }, 600)
        }
    });

    handtips("#secondPage","58%","45%","58%","45%","rotate(0deg)");

})


function toast() {
    setTimeout(function () {
        $("#before-toast-tea").fadeOut(2000);
        $("#after-toast-tea").fadeIn(2000, function () {
            $(".on").attr("fn", 1);
            ableSlide();
            blockdisable();
            adddiv(2, 1200);
        });

    }, 1500)
}