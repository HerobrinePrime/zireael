//必刷新
$(function () {

    if (window.history && window.history.pushState) {
        $(window).on('popstate', function () {
            window.history.pushState('forward', null, '#');
            window.history.forward(1);
            location.replace(document.referrer); 
        });
    }

    window.history.pushState('forward', null, '#');
    window.history.forward(1);

});

$(function () {

    $("body").animate({
        opacity: 1
    }, 1200, function () {
        // $(".title").addClass("titlemove");
        $(".repeat").fadeIn(1000);
        new Promise(s => {
            $("#thesix").animate({
                height: "30vh"
            }, 800, s)
        }).then(n => {
            $("#thesix").animate({
                height: "25vh"
            }, 800)
        })
    })

    // $(".clock").addClass("clockrot");

    $(".title").on("transitionend", function () {

        new Promise((resolved, rejected) => {
            setTimeout(function () {
                resolved();
            }, 500)
        }).then(success => {
            return new Promise(next => {
                $(".cover").animate({
                    opacity: 1
                }, 1000, next)
            })
        }).then(success => {
            return new Promise(next => {
                setTimeout(function () {
                    next();
                    $("#mawaru").removeClass("mawaru");
                }, 1500)
            })
        }).then(success => {
            return new Promise(next => {
                $(".cover").animate({
                    opacity: 0
                }, 1000, next)
            })
        }).then(success => {
            $(".cover").remove();
            return new Promise((next) => {
                $(".message").animate({
                    opacity: 1
                }, 1100, next)
            })
        }).then(success => {

        })

    })

    $(".repeat").on("touchstart", function () {
        $(this).fadeOut(function () {
            $(".title").addClass("titlemove");
            $("#mawaru").addClass("mawaru");
        });
    })

    $(".next").on("touchstart", function () {
        $("body").animate({
            opacity: 0
        }, 1200, function () {
            location.href = "./goods.html"
        })
    })

})