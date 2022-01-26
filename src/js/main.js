
let owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    center: true,
    loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 30,
    responsive: {
        1200:{
            items:1,
        },
        1024:{
            items:1,
        },
        992:{
            items:1,
        },
        767:{
            items:1,
        },
        576:{
            items:1,
        },
        425:{
            items:1,
        },
        375:{
            items:1,
        },
    }
});


$('.manager__arrow_next').click(function() {
    owl.trigger('next.owl.carousel');
});

$('.manager__arrow_prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
});