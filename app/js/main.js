$(document).foundation();

// $(document).foundation({
//   accordion: {
//     // specify the class used for accordion panels
//     content_class: 'content',
//     // specify the class used for active (or open) accordion panels
//     active_class: 'active',
//     // allow multiple accordion panels to be active at the same time
//     multi_expand: true,
//     // allow accordion panels to be closed by clicking on their headers
//     // setting to false only closes accordion panels when another is opened
//     toggleable: true
//   }
// });

$(".togglepanel").click( function(e) {
    e.preventDefault();
    $(this).closest('.accordion-navigation').toggleClass("active");
    $(this).closest('.accordion-navigation').find('.content').toggleClass("active");
    //return flase;
});


$('.local-scroll').localScroll({
    target: "body",
    duration: 1500,
    offset: 0
});

$('.division__toggle').click(function(e) {
  $('.division__morediv').toggleClass('is_shown');
});


// Hash menu forwarding
if (window.location.hash){
    var hash_offset = $(window.location.hash).offset().top;
    $("html, body").animate({
        scrollTop: hash_offset
    });
}

jQuery(document).ready(function() {

  $("#owl-demo").owlCarousel({
      autoPlay : 1500,
      //stopOnHover : true,
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoHeight : true,
      transitionStyle:"fade"
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

  $("#owl-plister").owlCarousel({
      autoPlay : false,
      //stopOnHover : true,
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoHeight : true,
      transitionStyle:"fade"
  });


    /* Master Slider */
    if ($('#masterslider').length) {
      var slider = new MasterSlider();
      slider.setup('masterslider' , {
        width:1920,    // slider standard width
        height:1024,   // slider standard height
        space:0,
        preload:2,
        overPause:false,
        loop:true,
        autoplay:true,
        fullwidth:true,
        autoHeight:true,
        view:"fade"
        //grabCursor:true,
        //mouse:true,
        //swipe:false
      });

      slider.control('arrows');
      slider.control('lightbox');
      slider.control('thumblist', { 
        autohide:false,
        inset:false,
        width:160,
        height:90,
        space:20
      });
    }

  $('.videopopup, .popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('.zoom-gallery').magnificPopup({
    delegate: 'a.showingallery',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="index.html" target="_blank">Suzuki</a>';
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });

});


