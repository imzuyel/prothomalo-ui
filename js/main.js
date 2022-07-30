// Header

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 300) {
    $(".header-wrapper").addClass("header-scrolled");
  } else {
    $(".header-wrapper").removeClass("header-scrolled");
    $(".header-wrapper").removeClass("header-scrolled");
    $(".main-nav").removeClass("header-scrolled");
  }

});

lastScroll = 0;
$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (lastScroll - scroll > 0) {
    $(".main-nav").addClass("header-scrolled");
    $(".header-wrapper").removeClass("header-scrolled");
  } else {
    $(".main-nav").removeClass("header-scrolled");
    $(".header-wrapper").addClass("header-scrolled");
  }
  if (lastScroll == 0) {
    $(".header-wrapper").removeClass("header-scrolled");
    $(".main-nav").removeClass("header-scrolled");

  }
  lastScroll = scroll;
});


$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {

  } else {
    $(".header-wrapper").removeClass("header-scrolled");
    $(".header-wrapper").removeClass("header-scrolled");
    $(".main-nav").removeClass("header-scrolled");
  }

});

// Sidebar
const opnbtn = document.querySelector('.menubtn')
const clsbtn = document.querySelector('.clsbtn')
const sidebar = document.querySelector('.sidebar')

opnbtn.addEventListener('click', function () {
  sidebar.classList.remove('is-hidden');
})
clsbtn.addEventListener('click', function () {
  sidebar.classList.add('is-hidden');
})