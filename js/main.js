$(function () {
   $('.design-slider').slick({
      dots: false ,
      slidesToShow: 4,
      variableWidth: true,
      prevArrow: '<img class="arrow arror-left" src="./images/arrow-left.svg" alt="">',
      nextArrow: '<img class="arrow arror-right" src="./images/arrow-rigth.svg" alt="">',
      responsive: [
         {
            breakpoint: 361, 
            setting: {
               variableWidth: false,
               slidesToShow: 1,
            }
         }
      ]

   })
});