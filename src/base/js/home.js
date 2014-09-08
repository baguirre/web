// Can also be used with $(document).ready()
$(document).ready(function(){

  $('[data-target="#video"]').on('click', function (evt) {
    evt.preventDefault();
    var $target = $(evt.currentTarget),
    videoSrc = $target.data('video'),
    $modal = $("#video");

$modal.modal('show');
   $modal
     .find('iframe').attr('src', videoSrc)
     .end()
     .on('hide.bs.modal', function () {
         $(this)
             .off('hide.bs.modal')
             .find('iframe').attr('src', '');
     })
     .modal('show');
  });

$('button.arrow').click(function(e) {
    if ($('input[type=email]').val() == '') {
        e.preventDefault();
        $('input[type=email]').focus();
        return false;
    }
})

});