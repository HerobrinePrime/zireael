$(function () {
    var back = true;
    var isMoving = false;
    $("#backs").on("click", function () {
        if (isMoving) {
            return;
        }
        else {
            isMoving = true;
            $(this).toggleClass("backon");
            back ? $(".backmenu").animate({
                left: 0
            }, 500, backChange) :
                $(".backmenu").animate({
                    left: '-25vw'
                }, 500, backChange)
        }
    })

    function backChange() {
        back = !back;
        isMoving = false;
    }


    $(".viewwindow").on('click', function (e) {
        // console.log(e);
        // console.log("win");
        if (e.target !== $("#backs")[0] && back == false) {
            // console.log("afdsa");
            $("#backs").click();
        }
    });
})