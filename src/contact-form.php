<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set the email subject and message
$subject = 'New Contact Form Submission';
$message_body = "Name: $name\nEmail: $email\nMessage: $message";

// Set the email headers
/* $headers = "From: $email\n";
$headers .= "Reply-To: $email\n";
$headers .= "Content-Type: text/plain; charset=utf-8\n"; */

// Send the email
mail('jamesaforeman@hotmail.com', $subject, $message_body, $headers);
?>