// ajax requests to refresh #content section

$('#about').on('click', function(e){
    $.ajax('content/about.html', {
    	success: function(response) {
    		$('#content').html(response);
    	}
    })
   $('#img_slide').animate({right:'500px'}, 1000);
});

$('#press').on('click', function(e){
    $.ajax('content/press.html', {
    	success: function(response) {
    		$('#content').html(response);
    	}
    })
    $('#img_slide').animate({right:'1000px'}, 1000);
});

$('#contact').on('click', function(e){
    $.ajax('content/contact.html', {
    	success: function(response) {
    		$('#content').html(response);
    	}
    })
    $('#img_slide').animate({right:'1500px'}, 1000);
});

// return the original content when main img is clicked
$('#top_img').on('click', function(e){
    $.ajax('content/main.html', {
    	success: function(response) {
    		$('#content').html(response);
    	}
    })
    $('#img_slide').animate({right:'0px'}, 1000);
});