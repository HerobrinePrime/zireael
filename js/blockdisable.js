function blockdisable() {
    $(".blockspan").eq($(".on").index() + 1).animate({
        borderRadius: "50%",
        opacity: "0"
    }, 1000, function () {
        $(this).hide(0);
    });
}