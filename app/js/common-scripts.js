/*---LEFT BAR ACCORDION----*/
$(function() {
    $('#nav-accordion').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: false,
        speed: 'fast',
        showCount: false,
        autoExpand: true,
        menuClose   : true,
//        cookie: 'dcjq-accordion-1',
        classExpand: 'dcjq-current-parent'
    });
});

$(function(){

  //    sidebar dropdown menu auto scrolling
  jQuery('#sidebar .sub-menu > a').click(function () {
      var o = ($(this).offset());
      diff = 250 - o.top;
      if(diff>0)
          $("#sidebar").scrollTo("-="+Math.abs(diff),500);
      else
          $("#sidebar").scrollTo("+="+Math.abs(diff),500);
  });

  $('.sub a').click(function(){
    $('.fa-bars').click();
  });

  function responsiveView() {
      var wSize = $(window).width();
      if (wSize <= 768) {
          $('#container').addClass('sidebar-close');
          $('#sidebar > ul').hide();
      }

      if (wSize > 768) {
          $('#container').removeClass('sidebar-close');
          $('#sidebar > ul').show();
      }
  }
  $(window).on('load', responsiveView);
  $(window).on('resize', responsiveView);

  $('.fa-bars').click(function () {
      if ($('#sidebar > ul').is(":visible") === true) {
          $('#main-content').css({
              'margin-left': '3px'
          });
          $('#sidebar').css({
              'margin-left': '-130px'
          });
          $('#sidebar > ul').hide();
          $("#container").addClass("sidebar-closed");
      } else {
          $('#main-content').css({
              'margin-left': '120px'
          });
          $('#sidebar > ul').show();
          $('#sidebar').css({
              'margin-left': '0'
          });
          $("#container").removeClass("sidebar-closed");
      }
  });

  // custom scrollbar
  $("#sidebar").niceScroll({styler:"fb",cursorcolor:"#4ECDC4", cursorwidth: '3', cursorborderradius: '10px', background: '#404040', spacebarenabled:false, cursorborder: ''});

  $("html").niceScroll({styler:"fb",cursorcolor:"#4ECDC4", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '1000'});



});