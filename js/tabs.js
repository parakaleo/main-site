$(document).ready(function() {
  if (location.hash !== '') {
    $('a[href="' + location.hash + '"]').tab('show');
  }

  return $('a[data-toggle="tab"]').on('click', function(e) {
    return location.hash = $(e.target.parentElement).attr('href').substr(1);
  });
});
