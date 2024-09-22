<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

     
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    
    $to = "wordpressdeveloper.supersoft@gmail.com";  
    $subject = "New Form Submission"; 
    $body = "Name: $name\nEmail: $email\nMessage: $message"; 
    $headers = "From: $email"; 

    
    if (mail($to, $subject, $body, $headers)) {
        echo "Email successfully sent!";
    } else {
        echo "Failed to send email.";
    }
}
?>
