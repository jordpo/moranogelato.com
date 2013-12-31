// ajax requests to refresh #content section

$('#about').on('click', function(e){
    $('#about_art').css('display','block');
    $('#main, #news, #msg_art, #locations').css('display','none');
    $('#img_slide').animate({right:'500px'}, 1000);
});

$('#press').on('click', function(e){
    $('#news').css('display','block');
    $('#about_art, #main, #msg_art, #locations').css('display','none');
    $('#img_slide').animate({right:'1000px'}, 1000);
});

$('#contact').on('click', function(e){
    $('#msg_art').css('display','block');
    $('#about_art, #news, #main, #locations').css('display','none');
    $('#img_slide').animate({right:'1500px'}, 1000);
});

$('#loc').on('click', function(e){
    $('#locations').css('display','block');
    $('#about_art, #news, #main, #contact').css('display','none');
    $('#img_slide').animate({right:'1500px'}, 1000);
    // resize google map
    initialize();
});

// return the original content when main img is clicked
$('#top_img').on('click', function(e){
    $('#main').css('display','block');
    $('#about_art, #news, #msg_art').css('display','none');
    $('#img_slide').animate({right:'0px'}, 1000);
});

/* form validations 
-------------------------------------------------------------- */

$('#formtext').keyup(function(){

    // with every keyup the value of the text field is captured 
    // other keyboard listeners - keydown, keypress 
    // keydown fires before the new letter is captured 

    var value = $(this).val();
    
    var how_many_characters = value.length;

    var how_many_left = 500 - how_many_characters;

    $('#formtext-error').html('You have ' + how_many_left + ' characters left.')

    if (how_many_left == 0) {
        $('#formtext-error').css('color','red');
    } else if (how_many_left < 50) {
        $('#formtext-error').css('color','orange');
    } else {
        $('#formtext-error').css('color','#FFF');
    }

});

var $submit = $("input[type='submit']");
var $required = $('.required');

/* validation functions 
--------------------------------------------- */
function containsBlanks(){
    var blanks = $required.map(function(){ return $(this).val() == ''; });
    return $.inArray(true, blanks) != -1;
}

function requiredFilledIn(){
    if (containsBlanks() || !$('#email').validEmail()) {
        $submit.attr('disabled', 'disabled');
    } else {
        $submit.removeAttr('disabled');
    }
}

/* validation functions end
--------------------------------------------- */
$('form span').hide();

$('input, textarea').on('focus', function(){
    $(this).next().next().fadeIn('slow');
}).on('blur', function(){
    $(this).next().next().fadeOut('slow');
}).on('keyup', function(){
    // check all required fields
    requiredFilledIn();
});

$("#email").validEmail({on:'keyup', 
    success: function(){
        $(this).next().next().removeClass('error').addClass('valid');
    }, failure: function(){
        $(this).next().next().removeClass('valid').addClass('error');
    }});

requiredFilledIn();

/* form submit via Ajax
------------------------------------------- */

$('form').on('submit',function(event) {
    event.preventDefault();
    $.ajax({
        url: "content/form.php",            // form processing will happen here 
        type: "post",
        data: $('form').serialize(),
        success: function(response){
            $("#content").html(response);
        },
        failure:function(){
            $('form').remove();
            $("#msg_art").html('<article><p>There was an error. Please try again.</p></article>');
        }
    });
    // scroll back up
    $("html, body").animate({
        scrollTop: 0
    }, 0); 
});


// Google Maps for Locations
function initialize() {
  var myLatlng = new google.maps.LatLng(43.696117, -72.289804);
  var mapOptions = {
    zoom: 8,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Morano Gelato Hanover'
  });

    google.maps.event.trigger(map, 'resize');
    var position = map.getCenter();
    map.setCenter(position);
}

google.maps.event.addDomListener(window, 'load', initialize);
