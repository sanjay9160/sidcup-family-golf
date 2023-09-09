$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        2000: {
            items: 1
        }
    }
})

$('.toggle').click(function() {
    $('nav').slideToggle();
});