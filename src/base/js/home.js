// Can also be used with $(document).ready()
$(document).ready(function(){

  $('[data-target="#video"]').on('click', function (evt) {
    evt.preventDefault();
    var $target = $(evt.currentTarget),
    videoSrc = $target.data('video'),
    $modal = $("#video");

$modal.modal('show');
    console.log($modal
     .find('iframe'));
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

});