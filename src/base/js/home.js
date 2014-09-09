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
    var form = $(this).parent('form');
    if ($('input[type=email]', form).val() == '') {
        e.preventDefault();
        $('input[type=email]', form).focus();
        return false;
    }
})

});