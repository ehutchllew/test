var $ = require('jquery');

$(document).ready(function(){
  var $main = $('.main');
  var $hamburger = $('.hamburger');
  var $theMenu = $('.theMenu');

  var regStr = /Android|iPhone|iPad/i;
  var deviceType = navigator.userAgent;
  console.log(regStr.exec(deviceType));

  if(regStr.test(deviceType)){
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


  $hamburger.on('click', function(){
    $hamburger.find('.trigger').toggleClass('expand');
    $hamburger.find('.filling').toggleClass('expand');

    $theMenu.toggleClass('expand');
  });

  

});