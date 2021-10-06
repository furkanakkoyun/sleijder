new Swiper('.promo', {
    loop:true,
    navigation: {
        nextEl: ".nextbutton",
        prevEl: ".prevbutton",
        
      },
      effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        },

  });

  $(document).ready(function(){
      $('.menubutton').click(function(){
          $('.opener').toggleClass('active');
          
      })
      $('.opener').click(function () {
            $('.opener').toggleClass('active');
      })
  })

  $(document).ready(function(){
    $('.searchbutton').click(function(){
        $('.searcherer').toggleClass('actived');
        
    })
    $('.searcherer').click(function () {
          $('.searcherer').toggleClass('actived');
    })
})
  