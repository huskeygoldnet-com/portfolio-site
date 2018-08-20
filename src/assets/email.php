<?php

error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

$errors = [];
$status = '';

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        // header("Access-Control-Allow-Origin: *");
        // header("Access-Control-Allow-Methods: POST");
        // header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        // header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');

        $params = json_decode($json);

        // validate name field
        if (empty($params->name)) {
            $status = 'error';
            $errors[] = ["status" => "error", "field" => "name", "msg" => "Please enter your name."];
        } else {
            $name = $params->name;
        }

        // validate email field
        if (empty($params->email)) {
            $errors[] = ["status" => "error", "field" => "email", "msg" => "Please enter your email."];
        } else {
            $email = $params->email;
        }

        // validate message field
        if (empty($params->message)) {
            $errors[] = ["status" => "error", "field" => "message", "msg" => "Please give a brief message."];
        } else {
            $message = "From: " . $name . "<br><br>";
            $message .= $email . "<br><br>";
            $message .= $params->message;
        }

        if (empty($errors)) {
        
            

            // $errors[] = ["status" => "ok"];
            $status = 'ok';
            
            //mail function
            $to = "zrbayoffdev@gmail.com";
            $subject = "zachbayoff.com Message";

            $headers = "From: zrbayoff@gmail.com\r\n";
            $headers .= "Reply-To: ". strip_tags($email) . "\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
            
            // mail($to, $subject, $message, $headers);
            $mailstatus = mail($to, $subject, $message, $headers);

            if ($mailstatus) {
                echo json_encode($status);
            } else {
                $status = 'error';
                echo json_encode($status);
            }
            
            
            
        } else {
            // echo json_encode($status);
            $status = 'error';
            echo json_encode($status);
        } 

        // $recipient = 'targetInbox@exmaple.com';
        // $subject = 'new message';
        // $headers = "From: $name <$email>";

        // $response_array['status'] = 'success';
        // $response_array['from'] = $email;
        // echo json_encode($response_array);
        // echo json_encode($from_email);
        // header($response_array);

        // mail($recipient, $subject, $message, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        // header("Allow: POST", true, 405);
        exit;
}
