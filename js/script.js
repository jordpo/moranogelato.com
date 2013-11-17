// ajax requests to refresh #content section

$('#about').on('click', function(e){
    e.preventDefault();
    $.ajax('content/about.html', {
    	success: function(response) {
    		$('#content').html(response);
    	}
    })
   $('#slideshow').css('height','200px');
   $('#img_slide').animate({right:'500px'}, 1000);
});

$('#press').on('click', function(e){
    e.preventDefault();
    $.ajax('content/press.html', {
    	success: function(response) {
    		$('#content').html(response);
    	}
    })
    $('#slideshow').css('height','200px');
    $('#img_slide').animate({right:'1000px'}, 1000);
});

$('#contact').on('click', function(e){
    e.preventDefault();
    $.ajax('content/contact.html', {
    	success: function(response) {
    		$('#content').html(response);
    	}
    })
    $('#slideshow').css('height','200px');
    $('#img_slide').animate({right:'1600px'}, 1000);
});

// return the original content when main img is clicked
$('#top_img').on('click', function(e){
    e.preventDefault();
    $.ajax('content/main.html', {
    	success: function(response) {
    		$('#content').html(response);
    	}
    })
    $('#slideshow').css('height','500px');
    $('#img_slide').animate({right:'0px'}, 1000);
});