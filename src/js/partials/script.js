;$(function($) {

//-----------------------------------------accordeon

  var allPanelText = $('.panel__text');
  var allPanelTitle = $('.panel__title');
  var allSign = $('.sign')
  $('.panel__title').click(function() {
    if($(this).hasClass('panel__title--active'))
    {
      $(this).removeClass('panel__title--active');
      $(this).children('.sign').text('+');
      $(this).next().slideUp("slow");
    }
    else
    {
    allPanelText.slideUp("slow");
    allPanelTitle.removeClass('panel__title--active');
    allSign.text('+');

    $(this).addClass('panel__title--active');
    $(this).children('.sign').text('-');
    $(this).next().slideDown("slow");

    return false;
    }
  });

  //----------------------------------------hover

  $('.service__link').hover(function() {
  		var size = $(this).find('.service__img').height();
  		var hoverDiv = '<div class="hoverDiv" style="height: '+ size +'px"><div class="hoverDiv__vertLine"></div><div class="hoverDiv__horLine"></div></div>'
       
        $(this).append(hoverDiv);
    }, function() {
        $('.hoverDiv').remove();
    });

  //-----------------------------------------hiding icon-search

  $('.searchInput').focusin(function(){
   		$(this).next('span').stop().animate({opacity: 'hide'}, 'slow');
	});
	$('.searchInput').focusout(function(){
   		$(this).next('span').stop().animate({opacity: 'show'}, 'slow');
	});

//----------------------------------------menu

  $('.menu').click(function() {
         $(this).toggleClass("menu__open");
    });



});

