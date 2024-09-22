<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST['titles'];
    $name = $_POST['name'];
    $job = isset($_POST['job']) ? $_POST['job'] : '';  
    $email = $_POST['email'];
    $phone_number = isset($_POST['phone_number']) ? $_POST['phone_number'] : '';  
    $company_name = isset($_POST['company_name']) ? $_POST['company_name'] : '';  
    $country_name = isset($_POST['country_name']) ? $_POST['country_name'] : '';  
    $industry = $_POST['industries'];
    $acceptance = isset($_POST['Acceptance']) ? 'Yes' : 'No';

    if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
        $file_name = $_FILES['file']['name'];
        $file_tmp = $_FILES['file']['tmp_name'];
        $file_size = $_FILES['file']['size'];
        $file_type = $_FILES['file']['type'];

        if ($file_size > 10485760) {
            http_response_code(400); // Bad request
            echo "File size exceeds the 10 MB limit.";
            exit;
        }

        $upload_dir = "uploads/";
        move_uploaded_file($file_tmp, $upload_dir . $file_name);
    } else {
        $file_name = "No attachment";
    }

    $to = "taimoorzxt@gmail.com";
    $subject = "New Form Submission";
    $body = "
        Title: $title
        Name: $name
        Job Title: $job
        Email: $email
        Phone Number: $phone_number
        Company Name: $company_name
        Country Name: $country_name
        Industry: $industry
        Acceptance: $acceptance
        Attachment: $file_name
    ";

    $headers = "From: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200); // OK
        echo "Email successfully sent!";
    } else {
        http_response_code(500); // Internal server error
        echo "Failed to send email.";
    }
}
?>
