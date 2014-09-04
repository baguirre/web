// Can also be used with $(document).ready()
$(document).ready(function(){

    "use strict";

    $('.flexslider').flexslider({
        animation: "fade",
        controlNav: false,
        directionNav: false,
        slideshowSpeed: 4000,
        animationSpeed: 800,
        start: function(slider){
            $('body').removeClass('loading');
        }
    });


    $("#slides").superslides({
        play: 6000,
        animation: "fade",
        pagination: true
    });
});