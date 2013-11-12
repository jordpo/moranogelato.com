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
        url: "content/form.php", 			// form processing will happen here 
        type: "post",
        data: $('form').serialize(),
        success: function(response){
            $("#content").html(response).fadeIn();
        },
        failure:function(){
            $('form').remove();
            $("#msg_art").html('<article><p>There was an error. Please try again.</p></article>');
        }
    });
});