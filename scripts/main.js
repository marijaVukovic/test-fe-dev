// Menu function
$("#x-menu").click(function () {
  $("#x-menu").toggleClass("active");
  $("#dp").toggleClass("active");
})

function getCurrentTime(offset) {
  let currentTime = new Date();
  let utc = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60000);
  let calcTime = new Date(utc + (3600000 * offset));
  let hours = (calcTime.getHours() < 10 ? "0" : '') + calcTime.getHours();
  let minutes = (calcTime.getMinutes() < 10 ? "0" : '') + calcTime.getMinutes();
  let time = hours + ":" + minutes;
  offset === -4 
    ? document.getElementById("new-york-time").innerHTML = time
    : offset === +1
      ? document.getElementById("london-time").innerHTML = time
      : offset === +2
        ? document.getElementById("belgrade-time").innerHTML = time
        : offset === +9
        ? document.getElementById("tokyo-time").innerHTML = time
          : document.getElementById("sydney-time").innerHTML = time
}

$("#new-york").click(function () {
  $("#new-york").toggleClass("active");
    $("#new-york_popover").toggleClass("active");
    getCurrentTime(-4);
});

$("#london").click(function () {
  $("#london").toggleClass("active");
    $("#london_popover").toggleClass("active");
    getCurrentTime(+1);
});

$("#belgrade").click(function () {
  $("#belgrade").toggleClass("active");
    $("#belgrade_popover").toggleClass("active");
    getCurrentTime(+2);
});

$("#tokyo").click(function () {
  $("#tokyo").toggleClass("active");
    $("#tokyo_popover").toggleClass("active");
    getCurrentTime(+9);
});

$("#sydney").click(function () {
  $("#sydney").toggleClass("active");
    $("#sydney_popover").toggleClass("active");
    getCurrentTime(+10);
});
