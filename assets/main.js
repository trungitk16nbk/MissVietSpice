(function ($) {
  'use strict';

  function handleScrollToTop() {
    const scrollToTopButton = $('#scrollToTopButton');

    $(window).scroll(() => {
      if ($(document).scrollTop() > 100) {
        scrollToTopButton.fadeIn();
      } else {
        scrollToTopButton.fadeOut();
      }
    });

    scrollToTopButton.click(() => {
      $('html, body').animate({ scrollTop: 0 }, 10); // Scroll smoothly to top
      return false;
    });
  }

  jQuery(document).ready(function () {
    var windows = $(window);
    var sticky = $('.header-sticky');
    windows.on('scroll', function () {
      var scroll = windows.scrollTop();
      if (scroll < 100) {
        sticky.removeClass('is-sticky');
      } else {
        sticky.addClass('is-sticky');
      }
    });
    $('button.navbar-toggler').click(function () {
      $('.main-menu-area').addClass('active');
      $('.mm-fullscreen-bg').addClass('active');
      $('body').addClass('hidden');
    });
    $('.close-box').click(function () {
      $('.main-menu-area').removeClass('active');
      $('.mm-fullscreen-bg').removeClass('active');
      $('body').removeClass('hidden');
    });
    $('.mm-fullscreen-bg').click(function () {
      $('.main-menu-area').removeClass('active');
      $('.mm-fullscreen-bg').removeClass('active');
      $('body').removeClass('hidden');
      $('.filter-sidebar').removeClass('active');
    });
    $('button.filter-button').on('click', function () {
      $('.filter-sidebar').addClass('active');
      $('.mm-fullscreen-bg').addClass('active');
    });
    $('button.close-filter-sidebar').on('click', function () {
      $('.filter-sidebar').removeClass('active');
      $('.mm-fullscreen-bg').removeClass('active');
    });
    $('.grid').imagesLoaded(function () {
      $('.grid').isotope({
        itemSelector: 'li',
        layoutMode: 'masonry',
      });
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
        $('#top').fadeIn();
      } else {
        $('#top').fadeOut();
      }
    });
    $('#top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 100);
      return false;
    });
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    handleScrollToTop();
  });
})(jQuery);

// const scrollToTopButton = document.getElementById('scrollToTopButton');

// window.addEventListener('scroll', () => {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     scrollToTopButton.style.display = 'block';
//   } else {
//     scrollToTopButton.style.display = 'none';
//   }
// });

// scrollToTopButton.addEventListener('click', () => {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// });

let productInfo;
let viewedProducts;
let existingProductIndex;
