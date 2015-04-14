// ajax requests to refresh #content section

$('#about').on('click', function(e){
    $('.about_art').css('display','block');
    $('#main, #news, #msg_art, #locations, #gelato').css('display','none');
});

$('#gelato-show').on('click', function(e){
    $('#gelato').css('display','block');
    $('.about_art, #main, #msg_art, #locations, #news').css('display','none');
});

$('#press').on('click', function(e){
    $('#news').css('display','block');
    $('.about_art, #main, #msg_art, #locations, #gelato').css('display','none');
});

$('#loc').on('click', function(e){
    $('#locations').css('display','block');
    $('.about_art, #news, #main, #msg_art, #gelato').css('display','none');
    // resize google map
    generateMap();
});

// return the original content when main img is clicked
$('#top_img').on('click', function(e){
    $('#main').css('display','block');
    $('.about_art, #news, #msg_art, #gelato').css('display','none');
});

$('#mg-chestnut').on('click', function() {
  generateMap(/* use defaults */);
  return false;
});

$('#mg-hanover').on('click', function() {
  generateMap(43.700677, -72.289526, 'Morano Gelato Hanover', 'http://www.moranogelatohanover.com/');
  return false;
});

function generateMap(latitude, longitude, title, link) {
  // set defaults
  latitude = latitude ? latitude : 42.321011;
  longitude = longitude ? longitude : -71.176000;
  title = title ? title : 'Morano Gelato';
  link = link ? link : 'https://www.facebook.com/mgchestnuthill?fref=ts';

  var myLatlng = new google.maps.LatLng(latitude, longitude);
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var image = 'img/mg_map.jpg';
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: title,
    icon: image
  });

  google.maps.event.addListener(marker, 'click', function() {
    window.open(link);
  });

  google.maps.event.trigger(map, 'resize');
  var position = map.getCenter();
  map.setCenter(position);
}

google.maps.event.addDomListener(window, 'load', generateMap);

// Carousel controls
$('.carousel').carousel({
  interval: 4000
});
