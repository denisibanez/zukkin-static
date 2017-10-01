(function($){

  console.log('js funcionando');

  // your code here

  //scrollbarplugin
  var scrollBar = {
    init: function(){
      this.ScrollBar();
    },
    ScrollBar: function(){
      $(".content").mCustomScrollbar({
        axis:"x"
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
