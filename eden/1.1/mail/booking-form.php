<?php
  session_cache_limiter('nocache');
  header('Expires: ' . gmdate('r', 0));
  header('Content-type: application/json');

  require_once('php-mailer/PHPMailerAutoload.php');
  $mail = new PHPMailer();

  // Enter your email address:
  $to = 'example@gmail.com';

  // Enter your subject:
  $subject = "New Message: From quick contact form";

  // Enter your success message:
  $success = '<strong>Success!</strong> we have received your booking details. <a href="booking-step3.html"><strong>Please pay now</strong></a>';

  // Enter your error message:
  $error = '<strong>Error!</strong> Failed to send mail';

  // Form Fields
  $f_name = $_POST["first-name"];
  $l_name = $_POST["last-name"];
  $name = $f_name . " " . $l_name;

  $address_1 = $_POST["address-1"];
  $address_2 = $_POST["address-2"];
  $city_name = $_POST["city-name"];
  $email = $_POST["booking-email"];
  $zip_code = $_POST["zip-code"];
  $mobile = $_POST["phone-number"];
  $message = $_POST["booking-message"];




  if( $_SERVER['REQUEST_METHOD'] == 'POST') {

    if($email != '' && $message != '') {

      //If you don't receive the email, enable and configure these parameters below:

      //$mail->isSMTP();                                      // Set mailer to use SMTP
      //$mail->Host = 'mail.yourserver.com';                  // Specify main and backup SMTP servers, example: smtp1.example.com;smtp2.example.com
      //$mail->SMTPAuth = true;                               // Enable SMTP authentication
      //$mail->Username = 'SMTP username';                    // SMTP username
      //$mail->Password = 'SMTP password';                    // SMTP password
      //$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
      //$mail->Port = 587;                                    // TCP port to connect to

      $mail->IsHTML(true);                                    // Set email format to HTML
      $mail->CharSet = 'UTF-8';

      $mail->From = $email;
      $mail->FromName = $name ;
      $mail->AddAddress($to);
      $mail->AddReplyTo($email, $name);
      $mail->Subject = $subject;

      $name = isset($name) ? "Name: $name<br><br>" : '';
      $address_1 = isset($address_1) ? "Address 1: $address_1<br><br>" : '';
      $address_2 = isset($address_2) ? "Address 2: $address_2<br><br>" : '';
      $city_name = isset($city_name) ? "City Name: $city_name<br><br>" : '';
      $zip_code = isset($zip_code) ? "Zip Code: $zip_code<br><br>" : '';
      $email = isset($email) ? "Email: $email<br><br>" : '';
      $mobile = isset($mobile) ? "Mobile No: $mobile<br><br>" : '';
      $message = isset($message) ? "Message: $message<br><br>" : '';

      $mail->Body = $name . $address_1 . $address_2 . $city_name . $zip_code . $email . $mobile . $message . '<br><br><br>This email was sent from: ' . $_SERVER['HTTP_REFERER'];


      if(!$mail->Send()) {
        $response = json_encode(array('status'=>'false', 'message' => $error));
        die($response);

      }else {
        $response = json_encode(array('status'=>'true', 'message' => $success));
        die($response);
      }
      echo json_encode($response);

    } else {
      $response = json_encode(array('status'=>'false', 'message' => '<strong>There is some error !</strong> Please Contact webmaster :) '));
      die($response);
    }

  }
?>
