$(function () {

    // variable declarations

    var windowHeight = $(window).height();
    var windowScrollPosTop = $(window).scrollTop();
    var windowScrollPosBottom = windowHeight + windowScrollPosTop;

    $.fn.revealanimation = function (direction) {

        return this.each(function () {

            var objectOffset = $(this).offset();
            var objectOffsetTop = objectOffset.top;

            if (!$(this).hasClass('animation-complete')) {
                if (windowScrollPosBottom > (objectOffsetTop + (windowHeight / 2))) {
                    if (direction == 'left') {
                        $(this).addClass('reveal-left')
                            .addClass('animation-complete');
                    }
                    if (direction == 'right') {
                        $(this).addClass('reveal-right')
                            .addClass('animation-complete');

                    }
                }
            } //end if  statement

        }); // end of return function

    }; //end of revealAnimation function



    $(window).scroll(function () {

        windowHeight = $(window).height();
        windowScrollPosTop = $(window).scrollTop();
        windowScrollPosBottom = windowHeight + windowScrollPosTop;


        $('#one').revealanimation('right');
        $('#two').revealanimation('left');
        $('#three').revealanimation('right');
        $('#four').revealanimation('left');

    });


}); //end ready function