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
        input.style.display = "none";
      }, 500);
    } else {
      input.style.display = "block";
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


// map

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//     styles: [
//       {
//         "featureType": "all",
//         "elementType": "labels.text.fill",
//         "stylers": [
//           {
//             "saturation": 36
//           },
//           {
//             "color": "#000000"
//           },
//           {
//             "lightness": 40
//           }
//         ]
//       },
//       {
//         "featureType": "all",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//           {
//             "visibility": "on"
//           },
//           {
//             "color": "#000000"
//           },
//           {
//             "lightness": 16
//           }
//         ]
//       },
//       {
//         "featureType": "all",
//         "elementType": "labels.icon",
//         "stylers": [
//           {
//             "visibility": "off"
//           }
//         ]
//       },
//       {
//         "featureType": "administrative",
//         "elementType": "geometry.fill",
//         "stylers": [
//           {
//             "color": "#000000"
//           },
//           {
//             "lightness": 20
//           }
//         ]
//       },
//       {
//         "featureType": "administrative",
//         "elementType": "geometry.stroke",
//         "stylers": [
//           {
//             "color": "#000000"
//           },
//           {
//             "lightness": 17
//           },
//           {
//             "weight": 1.2
//           }
//         ]
//       },
//       {
//         "featureType": "landscape",
//         "elementType": "geometry",
//         "stylers": [
//           {
//             "color": "#000000"
//           },
//           {
//             "lightness": 20
//           }
//         ]
//       },
//       {
//         "featureType": "poi",
//         "elementType": "geometry",
//         "stylers": [
//           {
//             "color": "#000000"
//           },
//           {
//             "lightness": 21
//           }
//         ]
//       },
//       {
//         "featureType": "road.highway",
//         "elementType": "geometry.fill",
//         "stylers": [
//           {
//             "color": "#000000"
//           },
//           {
//             "lightness": 17
//           }
//         ]
//       },
//       {
//         "featureType": "road.highway",
//         "elementType": "geometry.stroke",
//         "stylers": [
//           {
//             "color": "#000000"
//           },
//           {
//             "lightness": 29
//           },
//           {
//             "weight": 0.2
//           }
//         ]
//       },
//       {
//         "featureType": "road.arterial",
//         "elementType": "geometry",
//         "stylers": [
//           {
//             "color": "#000000"
//           },
//           {
//             "lightness": 18
//           }
//         ]
//       },
//       {
//         "featureType": "road.local",
//         "elementType": "geometry",
//         "stylers": [
//           {
//             "color": "#000000"
//           },
//           {
//             "lightness": 16
//           }
//         ]
//       },
//       {
//         "featureType": "transit",
//         "elementType": "geometry",
//         "stylers": [
//           {
//             "color": "#000000"
//           },
//           {
//             "lightness": 19
//           }
//         ]
//       },
//       {
//         "featureType": "water",
//         "elementType": "geometry",
//         "stylers": [
//           {
//             "color": "#000000"
//           },
//           {
//             "lightness": 17
//           }
//         ]
//       }
//     ]
//   });
// }