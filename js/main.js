$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:6,
        loop:true,
        autoPlay:true,
        navigation: false,
        pagination: false,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true
    });
    $(".popular__influencers").owlCarousel({
        stopOnHover: true,
        items:4,
        navigation      : true, // Show next and prev buttons
        pagination      : false,
        autoPlay        : true,
        slideSpeed      : 700,
        paginationSpeed : 700,
        navigationText  : ['<img src="img/arrow-black.png" alt="Brand 1">', '<img src="img/arrow-black.png" alt="Brand 1">'],
        itemsCustom : [
            [0,     1],
            [450,   1],
            [600,   2],
            [700,   2],
            [1000,  3],
            [1200,  3],
            [1400,  4],
            [1600,  4]
        ]
    });
    $(".accordion_item").on("click", function() {
        if ($(this).hasClass("accordion_active")) {
          $(this).removeClass("accordion_active");
          $(this)
            .children(".accordion_content")
            .slideUp(200);
        } else {
          $(".accordion_item").removeClass("accordion_active");
          $(this).addClass("accordion_active");
          $(".accordion_content").slideUp(200);
          $(this)
            .children(".accordion_content")
            .slideDown(200);
        }
      });
});