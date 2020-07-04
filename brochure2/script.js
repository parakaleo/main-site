// https://3dtransforms.desandro.com/card-flip

$(function() {
  $('.scene').click(function(e) {
    var $card = $(e.target).closest('.card')
    $card.toggleClass('is-flipped')
    $('.active').removeClass('active')
    $card.addClass('active')
  })
  window.fold = function(i) {
    $('.active').removeClass('active')
    $('.card-'+i).addClass('active')
    $('.card-'+i).removeClass('is-flipped')
  }
  window.unfold = function(i) {
    $('.active').removeClass('active')
    $('.card-'+i).addClass('is-flipped', 'active')
  }
})
