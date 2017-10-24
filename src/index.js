var $ = require('jquery');

$(document).ready(function(){

  $('.work').on('animationend webkitAnimationEnd mozAnimationEnd', function(){
    $(this).removeClass('blastAnim');
  })

  $('.work').on('mouseover', function(){
      $(this).addClass('blastAnim');
  })

  $('.about').on('animationend webkitAnimationEnd mozAnimationEnd', function () {
    $(this).removeClass('blastAnim');
  })

  $('.about').on('mouseover', function () {
    $(this).addClass('blastAnim');
  })

});