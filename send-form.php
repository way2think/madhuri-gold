<?php
// Allow CORS and JSON POST
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo "Invalid data.";
    exit;
}

// Extract data
$name = htmlspecialchars($data['name']);
$email = htmlspecialchars($data['email']);
$phone = htmlspecialchars($data['phone']);
$subject = htmlspecialchars($data['subject']);
$message = nl2br(htmlspecialchars($data['message']));

// Prepare email
$to = "madhuri@gmail.com"; // Change this to your receiving email
$subject = "New Enquiry from Madhuri Gold Website";
$headers  = "MIME-Version: 1.0";
$headers .= "Content-type: text/html; charset=UTF-8";
$headers .= "From: Madhuri Gold Website <madhuri@gmail.com>";
$headers .= "Reply-To: \"$name\" <$email>";

// HTML email template
$body = "
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .container {
      background-color: #f4f4f4;
      padding: 20px;
      border-radius: 10px;
      max-width: 600px;
      margin: auto;
      border: 1px solid #ddd;
    }
    .header {
      font-size: 22px;
      font-weight: bold;
      color: #c17d1f;
      margin-bottom: 20px;
    }
    .info {
      margin: 10px 0;
    }
    .label {
      font-weight: bold;
      color: #333;
    }
    .value {
      color: #555;
    }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>New Contact Enquiry</div>
    <div class='info'><span class='label'>Name:</span> <span class='value'>$name</span></div>
    <div class='info'><span class='label'>Email:</span> <span class='value'>$email</span></div>
    <div class='info'><span class='label'>Phone:</span> <span class='value'>$phone</span></div>
    <div class='info'><span class='label'>Subject:</span> <span class='value'>$subject</span></div>
    <div class='info'><span class='label'>Message:</span><br><span class='value'>$message</span></div>
  </div>
</body>
</html>
";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully.";
} else {
    http_response_code(500);
    echo "Failed to send message.";
}
