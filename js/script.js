// ajax requests to refresh #content section

$('#about').on('click', function(e){
    e.preventDefault();
    $.ajax('content/about.html', {
    	success: function(response) {
    		$('#content').html(response);
    	}
    })
   $('#slideshow').css('height','200px');
});

$('#products').on('click', function(e){
    e.preventDefault();
    $.ajax('content/products.html', {
    	success: function(response) {
    		$('#content').html(response);
    	}
    })
    $('#slideshow').css('height','200px');
});

$('#press').on('click', function(e){
    e.preventDefault();
    $.ajax('content/press.html', {
    	success: function(response) {
    		$('#content').html(response);
    	}
    })
    $('#slideshow').css('height','200px');
});

$('#contact').on('click', function(e){
    e.preventDefault();
    $.ajax('content/contact.html', {
    	success: function(response) {
    		$('#content').html(response);
    	}
    })
    $('#slideshow').css('height','200px');
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
});

// animate slideshow

function slideshow(){
    $('#img_slide').animate({right:'1600px'}, 25000);
}

slideshow();
