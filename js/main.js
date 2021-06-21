$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      margin: 10,
      nav: true,
      items: 3,
      loop: true,
      dots: false,
      pagination: true,
      navText : ['<i class="fas fa-angle-left" aria-hidden="true"></i>','<i class="fas fa-angle-right" aria-hidden="true"></i>']
  });
});