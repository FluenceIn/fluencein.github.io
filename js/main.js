$(document).ready(function(){
  let featuresCurrentTab = 0, featuresTimeOut;
  let solutionsCurrentTab = 0, solutionsTimeOut;

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
            [800,   3],
            [1000,  3],
            [1200,  4],
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

      $('.features__tab').click(function() {
        const tabIndex = $(this).index();
        featuresTab(tabIndex);
      });

      $('.solutions__tab').click(function() {
        const tabIndex = $(this).index();
        solutionTab(tabIndex);
      });

      featuresTab(0);

      solutionTab(0);

      (function scrollReveal() {
        window.sr = ScrollReveal();
        
        sr.reveal('.social_cards__item', {
          duration   : 600,
          distance   : '20px',
          easing     : 'ease-out',
          origin     : 'bottom',
          reset      : true,
          scale      : 1,
          viewFactor : 0,
          afterReveal  : revealChildren,
        }, 150);
        
        sr.reveal('.hero__img__circle, .hero__influencer-avatar-outer', {
          duration   : 1000,
          easing     : 'ease-out',
          reset      : true,
          scale      : 0,
          viewFactor : 0,
        }, 150);

        sr.reveal('.hero__inner', {
          duration   : 1000,
          distance   : '100px',
          easing     : 'ease-out',
          origin     : 'left',
          reset      : false,
          scale      : 1,
          viewFactor : 0,
        }, 150);

        sr.reveal('.section__header, .popular__header', {
          duration   : 600,
          distance   : '100px',
          easing     : 'ease-out',
          origin     : 'bottom',
          reset      : false,
          scale      : 1,
          viewFactor : 0,
        }, 150);

        sr.reveal('.footer__sub', {
          duration   : 600,
          distance   : '100px',
          easing     : 'ease-out',
          origin     : 'bottom',
          reset      : false,
          scale      : 1,
          viewFactor : 0,
        }, 150);
        
          var revealChildren = sr.reveal('.social_cards__icon, .social_cards__title, .social_cards__text', {
          duration   : 500,
          scale      : 1,
          distance   : '20px',
          origin     : 'bottom',
          reset      : true,
          easing     : 'ease-out',
          viewFactor : 0,
        }, 75);
      })();
      $('.menu-toggle').on('click',function(){
        $('.menu-toggle').toggleClass('active');
        $('.header__responsive-menu--content').toggle();
      });
});


function featuresTab(tabIndex) {

  $(".features__tab_active").unbind('mouseenter mouseleave');
  // Remove 'active' class from the current tab and content
  $('.features__tab.features__tab_active').removeClass('features__tab_active features__tab_active-width');
  $('.features_tab_border.features_tab_border_active').removeClass('features_tab_border_active');
  $('.features__content.features__content_active').removeClass('features__content_active');

  if(typeof featuresTimeOut !== "undefined"){
    clearTimeout(featuresTimeOut);
  }

  // Set 'active' class to the clicked tab and content
  $('.features__tab').eq(tabIndex).addClass('features__tab_active features__tab_active-width ')

  $('.features__tab_active').on( "mouseenter", function(){
    if(typeof featuresTimeOut !== "undefined"){
      clearTimeout(featuresTimeOut);
    }
    $('.features__tab_active .features_tab_border_active').css('width', getComputedStyle($('.features__tab_active .features_tab_border_active')[0], "width").getPropertyValue("width"));
    console.log(getComputedStyle($('.features_tab_border_active')[0], "width").getPropertyValue("width"));
  })
  .on( "mouseleave", function(){
    if(typeof featuresTimeOut !== "undefined"){
      clearTimeout(featuresTimeOut);
    }
    $('.features__tab_active .features_tab_border_active').css('width',"0%");
    $('.features__tab_active  .features_tab_border_active').css('transition-duration','0ms');
    setTimeout(function(){
      $('.features__tab_active  .features_tab_border_active').removeAttr("style");
    }, 100);
    featuresTab(featuresCurrentTab);
  });

  $('.features_tab_border').eq(tabIndex).addClass('features_tab_border_active ');

  $('.features__content').eq(tabIndex).addClass('features__content_active');

  // Update the current tab index
  featuresCurrentTab = tabIndex;

  // Set a timeout to switch to the next tab after 4 seconds
  featuresTimeOut = setTimeout(function() {
    const nextTab = (featuresCurrentTab + 1) % 4; // 4 is the total number of tabs
    featuresTab(nextTab);
  }, 10000);
}

function solutionTab(tabIndex) {
  $(".solutions__tab_active").unbind('mouseenter mouseleave');
  // Remove 'active' class from the current tab and content
  $('.solutions__tab.solutions__tab_active').removeClass('solutions__tab_active');
  $('.solutions__tab-progress.solutions__tab-progress-active').removeClass('solutions__tab-progress-active');
  $('.solutions__content.solutions__content_active').removeClass('solutions__content_active');

  if(typeof solutionsTimeOut !== "undefined"){
    clearTimeout(solutionsTimeOut);
  }

  // Set 'active' class to the clicked tab and content
  $('.solutions__tab').eq(tabIndex).addClass('solutions__tab_active')

  $('.solutions__tab_active')
  .on( "mouseenter", function(){
    if(typeof solutionsTimeOut !== "undefined"){
      clearTimeout(solutionsTimeOut);
    }
    $('.solutions__tab_active .solutions__tab-progress-active').css('width', getComputedStyle($('.solutions__tab_active  .solutions__tab-progress-active')[0], "width").getPropertyValue("width"));
    console.log(getComputedStyle($('.solutions__tab-progress-active ')[0], "width").getPropertyValue("width"));
  })
  .on( "mouseleave", function(){
    if(typeof solutionsTimeOut !== "undefined"){
      clearTimeout(solutionsTimeOut);
    }
    $('.solutions__tab_active .solutions__tab-progress-active').css('width',"0%");
    $('.solutions__tab_active  .solutions__tab-progress-active').css('transition-duration','100ms');
    setTimeout(function(){
      $('.solutions__tab_active  .solutions__tab-progress-active').removeAttr("style");
    }, 100);
    solutionTab(solutionsCurrentTab);
  });

  $('.solutions__tab-progress').eq(tabIndex).addClass('solutions__tab-progress-active ');

  $('.solutions__content').eq(tabIndex).addClass('solutions__content_active');

  // Update the current tab index
  solutionsCurrentTab = tabIndex;

  // Set a timeout to switch to the next tab after 4 seconds
  solutionsTimeOut = setTimeout(function() {
    const nextTab = (solutionsCurrentTab + 1) % 4; // 4 is the total number of tabs
    solutionTab(nextTab);
  }, 10000);
}