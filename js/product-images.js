$(function () {
  $('.js-product-images__thumbnail').click(function (event) {
    $('.js-product-images__big').attr('src', event.target.src);
  });
});
