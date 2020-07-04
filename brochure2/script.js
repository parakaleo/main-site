// https://3dtransforms.desandro.com/card-flip

$(function() {
  /*
  $('.scene').click(function(e) {
    var $card = $(e.target).closest('.card')
    $card.toggleClass('is-flipped')
    $('.active').removeClass('active')
    $card.addClass('active')
  })
  */
  var setDims = function() {
    var dh = $(document).height()
    var dw = $(document).width()
    var h, w
    if (dh*16/9 <= dw) {
      h = dh
      w = dh*4/9
    }
    else {
      h = dw*9/4
      w = dw
    }
    $('.scene').css({
      height: h*.8 + 'px',
      width: w*.8 + 'px',
      marginLeft: Math.max(w, dw)*.1 + w*.8*2 + 'px',
      marginTop: Math.max(h, dh)*.1 + 'px',
      perspective: w+h+'px'
    })
  }

  setDims()
  $(window).resize(setDims);



  var fold = function(i) {
    $('.active').removeClass('active')
    $('.card-'+i).addClass('active')
    $('.card-'+i).removeClass('is-flipped')
  }
  var unfold = function(i) {
    $('.active').removeClass('active')
    $('.card-'+i).addClass('is-flipped')
    $('.card-'+i).addClass('active')
  }

  var viewCnt = 0
  var animMillis = 1000
  var nextView = function() {
    viewCnt += 1
    switch (viewCnt % 4) {
      case 0:
        fold(2)
        setTimeout(() => fold(1), animMillis/3)
        break;
      case 1:
        unfold(1)
        break;
      case 2:
        unfold(3)
        unfold(4)
        break;
      case 3:
        fold(3)
        fold(4)
        setTimeout(() => unfold(2), animMillis)
        break;
    }
  }
  window.fold = fold
  window.unfold = unfold
  window.nextView = nextView

  // setInterval(nextView, 4000)
  $(document).click(nextView)
})
