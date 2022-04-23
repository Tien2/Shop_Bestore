$(document).ready(function(){
    $('.slide-img').slick(
        {
            infinite: true,
            dots:true,
            slidesToScroll: 3,
            slidesToShow: 4,
            prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-chevron-left"></i></button>`,
            nextArrow:`<button type='button' class='slick-next pull-right'><i class="fa-solid fa-chevron-right"></i></button>`,
            responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 821,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        }
    );
  });