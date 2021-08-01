$(function(){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  })

  $(".star").rateYo({
    rating: 3.6,
    // data-rateyo-rating="3.6", 
    starWidth: "40px",
    normalFill: "#A0A0A0",
    ratedFill: "#E74C3C",
    readOnly: true
  });


});