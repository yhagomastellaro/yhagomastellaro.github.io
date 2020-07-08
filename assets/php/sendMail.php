<?php

/** RECEIVE FORM DATA */

    $name = filter_input(INPUT_POST, 'inputName');
    $email = filter_input(INPUT_POST, 'inputEmail');
    $subject = filter_input(INPUT_POST, 'inputSubject');
    $message = filter_input(INPUT_POST, 'inputMessage');

/** EMAIL INFO */
    $destinatario = "ymmastellaro@gmail.com";
    $assunto = "CONTACT FORM";
    
/** HEADERS */
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: Yhago Mastellaro <ymmastellaro@gmail.com>';
    
/** BODY */
    $message = '<html><body>';
    $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
    $message .= "<tr style='background: #eee;'><th colspan=2><strong>CONTACT FORM</strong> </th></tr>";
    $message .= "<tr><td><strong>Name:</strong> </td><td>" . $name . "</td></tr>";
    $message .= "<tr><td><strong>Email:</strong> </td><td>" . $email . "</td></tr>";
    $message .= "<tr><td><strong>Subject:</strong> </td><td>" . $subject . "</td></tr>";
    $message .= "<tr><td><strong>Message:</strong> </td><td>" . $message . "</td></tr>";
    $message .= "</table>";
    $message .= "</body></html>";
    
/** SEND MAIL */

    $enviaremail = mail($destinatario, $assunto, $message, $headers);

?>