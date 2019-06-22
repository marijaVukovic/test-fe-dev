
// Rendering location pins
$(document).ready(function () {

  let locations = [
    {
      city: 'New York',
      tag: 'new-york',
      x: 23.4,
      y: 40,
    },
    {
      city: 'London',
      tag: 'london',
      x: 42.4,
      y: 36,
    },
    {
      city: 'Belgrade',
      tag: 'belgrade',
      x: 48.4,
      y: 38.4,
    },
    {
      city: 'Tokyo',
      tag: 'tokyo',
      x: 81.7,
      y: 40.7,
    },
    {
      city: 'Sydney',
      tag: 'sydney',
      x: 84.9,
      y: 62,
    },
  ]

  locations.map(location => {
    let clock = $('<div>', {
      class: 'pin',
      id: location.tag + '_wrapper',
      css: {
        'top': location.y + '%',
        'left': location.x + '%',
      }
    }).append(
      $('<img>', {
        class: 'location-pin',
        id: location.tag,
        src: './images/locationPin.svg',
        alt: location.city + ' ' + 'pin',
      }),
      $('<div>', {
        class: 'popover',
        id: location.tag + '_popover'
      }).append(
        $('<span>', {
          class: 'city-name'
        }).text(location.city),
        $('<span>', {
          class: 'city-time',
          id: location.tag + '-time'
        })
      )
    )
    clock.appendTo('.map');
  })

// Function for calculating time
function getCurrentTime(offset) {
  let currentTime = new Date();
  let utc = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60000);
  let calcTime = new Date(utc + (3600000 * offset));
  let hours = (calcTime.getHours() < 10 ? '0' : '') + calcTime.getHours();
  let minutes = (calcTime.getMinutes() < 10 ? '0' : '') + calcTime.getMinutes();
  let time = hours + ':' + minutes;
  offset === -4
    ? $('#new-york-time').text(time)
    : offset === +1
      ? $('#london-time').text(time)
      : offset === +2
        ? $('#belgrade-time').text(time)
        : offset === +9
          ? $('#tokyo-time').text(time)
          : $('#sydney-time').text(time)
}

// Functions for toggle-ing active class and running time calculation
$('#new-york').click(function () {
  $('#new-york').toggleClass('active');
  $('#new-york_popover').toggleClass('active');
  getCurrentTime(-4);
});

$('#london').click(function () {
  $('#london').toggleClass('active');
  $('#london_popover').toggleClass('active');
  getCurrentTime(+1);
});

$('#belgrade').click(function () {
  $('#belgrade').toggleClass('active');
  $('#belgrade_popover').toggleClass('active');
  getCurrentTime(+2);
});

$('#tokyo').click(function () {
  $('#tokyo').toggleClass('active');
  $('#tokyo_popover').toggleClass('active');
  getCurrentTime(+9);
});

$('#sydney').click(function () {
  $('#sydney').toggleClass('active');
  $('#sydney_popover').toggleClass('active');
  getCurrentTime(+10);
});

})