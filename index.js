
$(document).ready(function(){
    $('.header_slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                  arrows: false,
                  slidesToShow: 1
                }
            }
        ]
    });

    $('.ritual_slider').slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // variableWidth: true,
        // centerMode: true
    });
});