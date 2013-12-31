<?php 
##### Validation checks #######
        
# Blank validation error check #
if ($_POST['first_name'] == "" || 
    $_POST['last_name'] == "" ||
    $_POST['location'] == "" ||
    $_POST['email'] == "" ||
    $_POST['message'] == "") {
    $val_error = true;

# Invalid email format error check #
} elseif(strpos($_POST['email'], '@', 1) === FALSE ||
    strpos($_POST['email'], '@') > strlen($_POST['email']) - 6) {
    $val_error = true;

# Pass all validations, set to false
} else {
    $val_error = false;
}

?>

<?php if ($val_error):
	include_once('contact.html'); ?>
	<br>
	<div class="error">Please make sure to fill in properly all required fields.</div>
<?php else: ?>
	<header>
		<h2>Thank you!</h2>
	</header>
	<article id='form_success'>
		<p>We will respond to your message shortly.</p>
	</article>
<?php 
	/* Send out an email wth form info 
	----------------------------------------- */

	require_once("phpmailer/class.phpmailer.php");
    $mail = new PHPMailer();

    #### Assign variables ####
    $name = $_POST['first_name'] . " " . $_POST['last_name'];
    $location = $_POST['location'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    if ($_POST['subscribe'] == 'on') {
    	$subscribe = 'Yes';
    } else {
    	$subscribe = 'No';
    }

    #### Email details ####
 	$email_body = "";
    $email_body = $email_body . "Name: " . $name . "<br>";
    $email_body = $email_body . "Location: " . $location . "<br>";
    $email_body = $email_body . "Email: " . $email . "<br>";
    $email_body = $email_body . "Message: " . $message . "<br>";
    $email_body = $email_body . "Subscribe to monthly newsletter: " . $subscribe;

    $mail->SetFrom($email, $name);
    $address = "franchise@moranogelato.com";
    $mail->AddAddress($address, "Morano Gelato Inc.");
    $mail->Subject    = "Morano Gelato Inc Form Submission | " . $name;
    $mail->MsgHTML($email_body); 

    ### Send email ###
    $mail->send();

endif;
?>