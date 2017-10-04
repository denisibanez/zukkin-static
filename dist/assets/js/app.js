(function($){

  console.log('js funcionando');

  // your code here

  //scrollbarplugin
  var scrollBar = {
    init: function(){
      this.ScrollBar();
      this.arrowCollapseButton();
    },
    ScrollBar: function(){
      $(".content").mCustomScrollbar({
        axis:"x"
      });
    },
    arrowCollapseButton: function(){
      $('body').on('click', '.collapse-btn', function(){
        $(this).toggleClass('arrow-up');
      });
    }
  }

  //ready
  $(document).ready(function(){

  });

  //load
  $(window).on("load",function(){
    scrollBar.init();
  });

})(jQuery);
