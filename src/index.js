var $ = require('jquery');

$(document).ready(function(){

  $('.trigger').on('click', function(){
      $(this).toggleClass('clicked');
  })
});