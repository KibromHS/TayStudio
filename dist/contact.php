<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['subject'];

$to = 'eyoblema19926@gmail.com';

$subject = "Sent From website Contact Form";
$headers = 'From: '.$name.'<'.$email.'>';

if(mail($to,$subject,$message,$headers)){
    echo 'Email has sent Successfully.';

}else{
    echo 'Email sending Failed';
}


?>