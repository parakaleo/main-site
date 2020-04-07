if (location.hostname === 'localhost') {
  document.write('<script src="http://localhost:35729/livereload.js?snipver=1"></script>');

  var cleanup = function() {
    $('script[data-dapp-detection=""]').remove()
    $('script[src*="livereload.js"]').remove()
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
