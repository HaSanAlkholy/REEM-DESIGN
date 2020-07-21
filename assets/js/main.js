//first slider
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  updateOnWindowResize: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// search button
let btn = document.getElementById('search-btn');
let form = document.getElementById('search-form');
let input = document.getElementById('search-input');
btn.addEventListener('click', search);

function search() {
  if (input.value) {
    form.submit();
  } else {
    if (form.classList.contains('show')) {
      form.classList.remove('show');
      setTimeout(() => {
        input.style.display="none";
      }, 500);
    } else {
      input.style.display="block";
      setTimeout(() => {
        form.classList.add('show');
      }, 0);
    }
  }
}


// second navbar

$('#sec-icon').click(function (e) { 
  $('#sec-items').toggleClass('show');
});

$('#sec-items').click(function (e) { 
  $('#sec-items').removeClass('show');
});