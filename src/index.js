var $ = require('jquery');

$(document).ready(function(){

  (function(){

    
    var events = {

      init: function(){

        this.animationBlast();
        this.hamburgerMenu();
        this.dropdownMenus();

      },

      animationBlast: function(){

        var mobileCheck = /Android|iPhone|iPad/i;
        var deviceType = navigator.userAgent;
        var $main = $('.main');
        console.log(mobileCheck.exec(deviceType));
      
        if(mobileCheck.test(deviceType)){
          $main.on('click', function(){
            $(this).addClass('blastAnim').on('animationend webkitAnimationEnd mozAnimationEnd', function () {
              $(this).removeClass('blastAnim');
            });
          });
        } else {
          $main.on('mouseover', function(){
            $(this).addClass('blastAnim').on('animationend webkitAnimationEnd mozAnimationEnd', function () {
              $(this).removeClass('blastAnim');
            });
          });
        }

      },

      hamburgerMenu: function(){

        var $hamburger = $('.hamburger');
        var $theMenu = $('.theMenu');

        $hamburger.on('click', function(){
          $hamburger.find('.trigger').toggleClass('expand');
          $hamburger.find('.filling').toggleClass('expand');
      
          $theMenu.toggleClass('expand');
        });

      },

      dropdownMenus: function(){

        var $mainSub = $('.main .sub');
        var $dropContainer = $('.drop-container');

        console.log($mainSub);
        $mainSub.on('click', function(){
          var $parentElement = $(this).parent();
          $parentElement.find('.drop-container').toggleClass('dropdown');
          $parentElement.find('.rowz').toggleClass('dropdown');
          $parentElement.find('.item').toggleClass('dropdown');

          $parentElement.animate({ scrollTop: $dropContainer.offset().top }, 1000); //fix this.
        });

      },

    }

    events.init();

  })();

  

});