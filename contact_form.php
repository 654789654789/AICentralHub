<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Define the recipient email address
    $to = 'akvsingh51969@gmail.com';  // Replace with your email address
    $subject = 'New Contact Form Submission';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Build the email content
    $email_content = "
    <html>
    <head>
        <title>Contact Form Submission</title>
    </head>
    <body>
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Message:</strong><br>{$message}</p>
    </body>
    </html>
    ";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
