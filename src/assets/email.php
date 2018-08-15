<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');

        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'targetInbox@exmaple.com';
        $subject = 'new message';
        $headers = "From: $name <$email>";

        $response_array['status'] = 'success';
        $response_array['from'] = $email;
        echo json_encode($response_array);
        // echo json_encode($from_email);
        // header($response_array);

        // mail($recipient, $subject, $message, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        // header("Allow: POST", true, 405);
        exit;
}
