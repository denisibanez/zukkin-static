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
      this.owlCarousel();
      this.openDetail();
    },
    owlCarousel: function(){
      $(".owl-carousel").owlCarousel({
        loop:true,
        responsiveClass:true,
        responsiveClass:true,
        responsive:{
          0:{
            items:1,
            nav:true
          },
          600:{
            items:1,
            nav:true
          },
          1000:{
            items:1,
            nav:true,
            loop:false
          }
        }
      });
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

      $('.accordion-name').click( function(){
        $(this).toggleClass('arrow-up');
      });

      $('#accordioninfo h4').click( function(){
        $(this).toggleClass('arrow-up');
      });

      $('.btn-detail').click( function(){
        $(this).toggleClass('arrow-up');

        $(this).text($(this).text() == 'Fechar detalhes' ? 'Abrir detalhes' : 'Fechar detalhes');

      });

      $('.detail-more-btn').click( function(){
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

        var overlay = $('#myModal').attr('data-ref', data);

        $('.closeModal').click(function(e){
          e.preventDefault();
          $(this).parents('div.modal-dialog').removeClass('show-app');
          //removeClass('show-app');
        });

        $('#myModal').click(function(e){
          e.preventDefault();
          $(this).find("div#" + data).removeClass('show-app');
          //removeClass('show-app');
        });
      });
    },
    openDetail: function(){
      $('.detail-more').on('click', function(){
        $(this).parent().find('.iten-detail--content').slideToggle("slow");

        $(".content-vertical").mCustomScrollbar({
          axis:"y"
        });
      });

      $('.detail-more').click( function(){
        $(this).text($(this).text() == 'Fechar detalhes' ? 'Abrir detalhes' : 'Fechar detalhes');
      });

      $('.detail-more-btn').on('click', function(){
        $(this).parent().find('.iten-detail--content').slideToggle("slow");

        $(".content-vertical").mCustomScrollbar({
          axis:"y"
        });
      });
    }
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

      //range-filter
      var slider = document.getElementById("myRange");
      var output = document.getElementById("demo");
      output.innerHTML = slider.value;

      slider.oninput = function() {
        output.innerHTML = this.value;
      }
    }

    function myStopFunction() {
      clearInterval(myVar);
    }

    FusionCharts.ready(function () {
      var visitChart = new FusionCharts({
        type: 'msline',
        renderAt: 'chart-container',
        width: '100%',
        height: '350',
        dataFormat: 'json',
        dataSource: {
          "chart": {
            "paletteColors": "#0390f7, #ff2825",
            "bgcolor": "#ffffff",
            "showBorder": "0",
            "showShadow": "0",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "legendBorderAlpha": "0",
            "legendShadow": "0",
            "showAxisLines": "0",
            "showAlternateHGridColor": "0",
            "divlineThickness": "1",
            "divLineIsDashed": "0",
            "divLineDashLen": "1",
            "divLineGapLen": "1",
            "showValues": "0"
          },
          "categories": [
            {
              "category": [
                { "label": "30 dias" },
                { "label": "3 meses" },
                { "label": "6 meses" },
                { "label": "1 ano"   }
              ]
            }
          ],
          "dataset": [
            {
              "seriesname": "linha 01",
              "data": [
                { "value": "15123" },
                { "value": "14233" },
                { "value": "25507" },
                { "value": "9110" },
                { "value": "15529" },
                { "value": "20803" },
                { "value": "19202" }
              ]
            },
            {
              "seriesname": "Linha 02",
              "data": [
                { "value": "13400" },
                { "value": "12800" },
                { "value": "22800" },
                { "value": "12400" },
                { "value": "15800" },
                { "value": "19800" },
                { "value": "21800" }
              ]
            }
          ]
        }
      }).render();
    });
  });

  //load
  $(window).on("load",function(){
    myFunc.init();
  });

})(jQuery);
