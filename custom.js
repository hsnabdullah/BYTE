// alert('ALLAH IS ONE ');

$('.technology-icon').slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.coustomers-card-slide').slick({  
  dots:true,
  infinite: true,
  arrows: false,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
    Counter: $(this).text()
  },{
      duration: 6000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
});

var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");
window.onscroll =function(){
  if(window.pageYOffset >= menu.offsetTop) {
    navbar.classList.add("sticky");
  }
  else{
    navbar.classList.remove("sticky"); 
  }
}
