<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['subject'];

$to = 'eyoblema19926@gmail.com';

$subject = "Sent From website Contact Form";
$headers = 'From: '.$name.'<'.$email.'>';
$res;
if(mail($to,$subject,$message,$headers)){
    $res = 'Email sent Successfully.';
}else{
    $res = 'Email sending Failed';
}
header('Location: ./index.html?msg='.$res);


?>