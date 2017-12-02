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
        var $mainSub = $('.main .sub');
        console.log(mobileCheck.exec(deviceType));
      
        if(mobileCheck.test(deviceType)){
          $main.on('click', function(){
            $(this).addClass('blastAnim').on('animationend webkitAnimationEnd mozAnimationEnd', function () {
              $(this).removeClass('blastAnim');
            });
          });
        } else {
          $mainSub.on('mouseover', function(){
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

        //Needs refactoring, try calling dropDownMenus() here and only call hamburger in init, not both.
        $theMenu.find('div').on('click', function(){
          let menuId = $(this).attr('name');

          if($(`.main #${menuId}`).parent().find('.drop-container').hasClass('dropdown'))
            $('html, body').animate({ scrollTop: $(`.main #${menuId}`).parent().offset().top }, 550);
          else
            $(`.main #${menuId}`).click();
        });

      },

      dropdownMenus: function(){
        var $mainSub = $('.main .sub');

        console.log($mainSub);
        $mainSub.on('click', function(){
          let $parentElement = $(this).parent();
          let $dropContainer = $parentElement.find('.drop-container');

          $dropContainer.toggleClass('dropdown');
          $parentElement.find('.rowz').toggleClass('dropdown');
          $parentElement.find('.item').toggleClass('dropdown');

          if($dropContainer.hasClass('dropdown'))
            $('html, body').animate({ scrollTop: $parentElement.offset().top }, 550); 
        });

      },

    }

    events.init();

  })();

  

});