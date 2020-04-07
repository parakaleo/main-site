if (location.hostname === 'localhost') {
  var cleanup = function() {
    $('.w-nav-overlay').remove()
    $('link[rel="stylesheet"][href*=Inconsolata]').remove()
    $('script[data-dapp-detection=""]').remove()
  }

  var edit = () => {
    document.body.contentEditable = true
    window.onbeforeunload = function (e) {
      e = e || window.event;
      var msg = 'unsaved changes'
      if (e) { e.returnValue = msg; }
      return msg;
    };
  }


  var save = () => {
    cleanup()
    window.onbeforeunload = null
    document.body.removeAttribute('contentEditable')
    var html = new XMLSerializer().serializeToString(document)
    var href = location.href
    var base = document.baseURI
    var path = location.pathname
    $.post("/save", {
      html,
      href,
      base,
      path
    }, function(data) {
      console.log(data)
    });
  }
}
