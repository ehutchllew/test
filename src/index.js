var $ = require('jquery');

$(document).ready(function(){
  var $main = $('.main');
  var $hamburger = $('.hamburger');
  
  $main.on('mouseover', function(){
    $(this).addClass('blastAnim').on('animationend webkitAnimationEnd mozAnimationEnd', function () {
      $(this).removeClass('blastAnim');
    });
  });

  $hamburger.on('click', function(){
    $hamburger.find('.filling').toggleClass('expand');
  });

  

});