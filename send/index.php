<?php

$global_email = "monochromer@mail.ru";
//$GLOBALS['geg'] = $global_email;
//$GLOBALS['smtp'] = "smtpout.secureserver.net";

$name    = htmlspecialchars( trim( $_POST['name'] ) );
$email   = htmlspecialchars( trim( $_POST['phone'] ) );
$tel = htmlspecialchars( trim( $_POST['mail'] ) );

if ( strlen( $name ) <= 0 || strlen( $email ) <= 0 || strlen( $len ) <= 0)
    return 0;

// Set the INI file to smtp
//ini_set("SMTP", $GLOBALS['smtp']);

$headers = '';

$subject = "Тема: {$subject}";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";
$message = "
    Заказчик:<br />
    <b>{$name}</b><br />
    E-mail:<br />
    <b>{$email}</b><br />
    <br /><br />
    Телефон:<br />
    <b>{$tel}</b><br />
    <br /><br />
";

$send = mail($global_email, $subject, $message, $headers);

if ($send)
    echo 1;
else
    echo 0;
?>