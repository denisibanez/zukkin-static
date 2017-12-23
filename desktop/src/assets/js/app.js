(function($){

  console.log('js funcionando');

  // your code here
  var onLoadFun = {
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
            items:4,
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
        $('.content-menu--mobile.mobal').toggleClass('show-app');
      });

      $('.menu-sidebar ul li a').click(function(e){
        e.preventDefault();
        $('.content-menu--mobile.desktop').toggleClass('show-app');
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

         // $('#modal').click(function(e){
         //   e.preventDefault();
         //   $(this).find("div#" + data).removeClass('show-app');
         //   $(".modal-backdrop").css('display', 'none');
         //   //removeClass('show-app');
         // });
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

  var docReadyFun = {
    init: function (){
      this.ocultaFooter();
      this.tempo();
    },
    ocultaFooter:function(){
      $('.ocultar').on('click', function(){
        $('.footer-fixe').removeClass('show');
        $('.btn-footer-hide').removeClass('hidden')

        $('.footer-fixe').addClass('hidden');
        $('.btn-footer-hide').addClass('show');

        $('footer .footer-content').css('margin-bottom','0px');
      });

      $('.btn-footer-hide').on('click', function(){
        $('.footer-fixe').removeClass('hidden');
        $('.btn-footer-hide').removeClass('show');

        $('.footer-fixe').addClass('show');
        $('.btn-footer-hide').addClass('hidden');

        $('footer .footer-content').css('margin-bottom','70px');
      });
    },
    tempo:function(){
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

        $("#detail-page .content-vertical").mCustomScrollbar({
          axis:"y"
        });

        //range-filter
        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;

        slider.oninput = function() {
          output.innerHTML = this.value;
        }

        //Tooltip
        $('[data-toggle="tooltip"]').tooltip({
          container: 'body'
        });
      }

      function myStopFunction() {
        clearInterval(myVar);
      }
    }
  }


  //ready
  $(document).ready(function(){
    docReadyFun.init();

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
    onLoadFun.init();
  });

  $(window).scroll(function () {
      if ($(window).scrollTop() > 50) $(".header-fixe").addClass('menu-fixe');
      else $(".header-fixe").removeClass('menu-fixe');
  });

})(jQuery);
