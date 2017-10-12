(function($){

  console.log('js funcionando');

  // your code here
  var myFunc = {
    init: function(){
      this.ScrollBar();
      this.arrowCollapseButton();
      this.menuMobile();
      this.getModal();
      this.choseModal();
    },
    ScrollBar: function(){
      $(".content").mCustomScrollbar({
        axis:"x"
      });
    },
    arrowCollapseButton: function(){
      $('.collapse-btn').click( function(){
        $(this).toggleClass('arrow-up');
      });
    },
    menuMobile: function(){
      //open menu slide
      $('#pm_menu').pushmenu({ button : "#open" });

      $('.pm_menu-body ul li a').click(function(e){
        e.preventDefault();
        $('.content-menu--mobile').addClass('show-app');
      });
    },
    getModal: function(){
      $.get( '/modais/modal.html' , function( data ) {
        //console.log(data);
        $('#modal').html(data);
      });
    },
    choseModal:function(){
      $("a[data-target*='#myModal']" ).on('click', function(){
        var data = $(this).attr('data-ref');
        //alert(data);
        var modal = $('body').find("div#" + data);
        modal.addClass('show-app');
        //console.log(  $('body').find("div#" + data));

        $('.closeModal').click(function(e){
          e.preventDefault();
          $(this).parents('div.modal-dialog').removeClass('show-app');
          //removeClass('show-app');
        });
      });
    },
  }

  //ready
  $(document).ready(function(){
    var myVar = setInterval(function(){ myTimer() }, 1000);

    function myTimer() {

      //chama modal
      $('#myModal').on('shown.bs.modal', function () {
        $(".content").mCustomScrollbar({
          axis:"x"
        });
      });

      $('#myModal').on('shown.bs.modal', function () {
        $(".content-vertical").mCustomScrollbar({
          axis:"y"
        });
      });
    }

    function myStopFunction() {
      clearInterval(myVar);
    }
  });

  //load
  $(window).on("load",function(){
    myFunc.init();
  });

})(jQuery);
