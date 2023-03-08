<?php

header("Access-Control-Allow-Origin: *");

$to = "estatewingindia@gmail.com, tanujmittal125@gmail.com";
//$to = "tanujmittal125@gmail.com";
// $to = 'toptoptop@yopmail.com';

$subject = "Contact Query";


if (empty($_POST) == false) {
    $name = $_POST['fullname'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    
    $message ="
        <html>
            <head>
                <title>Contact Query</title>
            </head>
            <body>
                <p>Sohna 4n5</p>
                    <table cellpadding='10' cellspacing='0' border='1' style='border-collapse:collapse;'>
                        <tr>
                             <th>Name</th>
                             <th>Phone</th>
                                <th>Email</th>
                        </tr>
                        <tr>
                            <th>{$name}</th>
                            <th>{$phone}</th>
                            <th>{$email}</th>
                        </tr>
            </body>
        </table>
        </html>"
    ;
    
    $headers = "From: {$name} <{$email}>\n";
    $headers = 'Content-type: text/html; charset=iso-8859-1'. "\r\n";


    
    
    $sent = mail($to, $subject, $message, $headers);
    
    echo json_encode(["sent" => $sent]);

    return;
}

echo json_encode(["sent" => false]);

?>