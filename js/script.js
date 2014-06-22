// ajax requests to refresh #content section

$('#about').on('click', function(e){
    $('.about_art').css('display','block');
    $('#main, #news, #msg_art, #locations').css('display','none');
});

$('#press').on('click', function(e){
    $('#news').css('display','block');
    $('.about_art, #main, #msg_art, #locations').css('display','none');
});

$('#loc').on('click', function(e){
    $('#locations').css('display','block');
    $('.about_art, #news, #main, #msg_art').css('display','none');
    // resize google map
    initialize();
});

// return the original content when main img is clicked
$('#top_img').on('click', function(e){
    $('#main').css('display','block');
    $('.about_art, #news, #msg_art').css('display','none');
});


// Google Maps for Locations
function initialize() {
  var myLatlng = new google.maps.LatLng(43.700677, -72.289526);
  var mapOptions = {
    zoom: 10,
    center: myLatlng
  };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var image = 'img/mg_map.jpg';
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Morano Gelato Hanover',
        icon: image
    });

    var contentString = '<article class="map_info">' +
        '<a target="_blank" href="http://www.moranogelatohanover.com/"><img src="img/mg_hanover.jpg" alt="Morano Gelato Hanover"/><br />Morano Gelato Hanover</a>' +
        '<p>57 S Main St #101, Hanover, NH 03755 </p>' +
    '</article>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

    google.maps.event.trigger(map, 'resize');
    var position = map.getCenter();
    map.setCenter(position);
}

google.maps.event.addDomListener(window, 'load', initialize);

// Carousel controls
$('.carousel').carousel({
  interval: 4000
});
