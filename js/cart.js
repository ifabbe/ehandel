$(function () {
  var currentPrice = parseInt(localStorage.getItem('cart-price')) || 0;
  var currentCount = parseInt(localStorage.getItem('cart-count')) || 0;
  var updateCart = function (newPrice, newCount) {
    currentPrice = newPrice;
    currentCount = newCount;
    localStorage.setItem('cart-price', newPrice);
    localStorage.setItem('cart-count', newCount);
    $('.js-header-cart-price').text(newPrice);
    $('.js-header-cart-count').text(newCount);
  };
  updateCart(currentPrice, currentCount);
  $('.js-cart-buy').click(function() {
    var newPrice = currentPrice + $(event.target).data('cart-item-price');
    var newCount = currentCount + $(event.target).data('cart-item-count');
    updateCart(newPrice, newCount);
  });
});
