$(function () {

  $('.email-container').click(function(){
    $('.contact-overlay').addClass('is-open');
    return false;
  });

  $('.close-btn').click(function(){
    $('.contact-overlay').removeClass('is-open');
  });

});
