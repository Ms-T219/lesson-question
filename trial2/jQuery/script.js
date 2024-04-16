$(function(){
const backBtn =$('#back-btn');

$(window).on('scroll',function(){
  var scroll =$(this).scrollTop();
  console.log(scroll);

  if(scroll >=100){
    backBtn.css('display','inline');
  }
  else{
    backBtn.css('display','none');
  }
});

  backBtn.on('click',function(){
    $('body,html').animate({
      scrollTop:0
    },300);
    return false;
    })

   // slick スライド
  $('.autoplay').slick({
    autoplay:true,
    dots:true,
    infinite: true,
    autoplaySpeed:3000,
    arrows: false,
   });
  
  const navAbout=$('#nav-about')
   $('#navAbout').on('click',function(){
    $('#navAbout').css('color','#ff178');
   });

  // セクションのフェードイン
    $(window).on('scroll',function(){
     const scrollAmount = $(window).scrollTop();
     const windowHeight = $(window).height();
    $('section').each(function(){
     const position =$(this).offset().top;
     if(scrollAmount > position - windowHeight + 100){
      $(this).addClass('fade-in');
     }
      });
    });
 
    // モーダル
    $('.photos-works img').click(function(){
      const imgSrc = $(this).attr('src');
      $('.modal-photo').attr('src',imgSrc);
      $('.modal').fadeIn();
      return false
    });
    
    $('.close-btn').click(function(){
      $('.modal').fadeOut();
      return false
    });

  });