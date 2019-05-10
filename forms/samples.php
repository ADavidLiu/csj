<?php

include('./MailChimp.php'); 

use \DrewM\MailChimp\MailChimp;

$email = $_POST[email];
$firstName = $_POST[firstName];
$lastName = $_POST[lastName];
$mobileNumber = $_POST[mobileNumber];
$companyname = $_POST[companyname];

$MailChimp = new MailChimp("fe5f5fe9cf1149a5857bfa89dfa0f27a-us7");
$list_id = "1175aacc5c";
$result = $MailChimp->post("lists/$list_id/members", [
    "email_address" => $email,
    "status"        => "subscribed",
    "firstName"     => $firstName,
    "lastName"      => $lastName,
    "mobileNumber"  => $mobileNumber,
    "companyName"   => $companyName
]);

?>