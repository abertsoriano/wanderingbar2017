<?php
$json = ['load' => true];
$params = [
	'nombre' => FILTER_SANITIZE_STRING,
	'correo' => FILTER_VALIDATE_EMAIL,
	'celular' => FILTER_SANITIZE_STRING,
	'fecha' => FILTER_SANITIZE_STRING,
	'nro_personas' => FILTER_VALIDATE_INT,
	'barra' => FILTER_SANITIZE_STRING
];

$values = filter_input_array(INPUT_POST, $params);

if (empty($values['nombre']))
{
	$json = ['load' => false, 'error_message' => 'El nombre y apellido es requerido'];
}
else if (!$values['correo'])
{
	$json = ['load' => false, 'error_message' => 'Debe poner un correo válido'];
}
else if (empty($values['celular']))
{
	$json = ['load' => false, 'error_message' => 'El teléfono es requerido'];
}
else if (empty($values['fecha']))
{
	$json = ['load' => false, 'error_message' => 'Escriba la fecha'];
}
else
{
	require 'mailer/PHPMailerAutoload.php';

	$mail = new PHPMailer(true);

	$correo = 'contacto@wanderingbar.com';
	$nombre = 'Albert Thais';

	//$mail->SMTPDebug = 3;                               // Enable verbose debug output

	try {
		$mail->isSMTP();
		$mail->SMTPAuth = true;
		$mail->Host = 'smtp.zoho.com';
		$mail->SMTPSecure = 'tls';
		$mail->CharSet = 'UTF-8';
		$mail->Username = $correo;
		$mail->Password = '';
		$mail->Port = 587;
		$mail->isHTML(true);

		$mail->From = $correo;
		$mail->FromName = $values['nombre'];
		$mail->addAddress($correo, $nombre);
		$mail->addReplyTo($correo, $nombre);

		$message = '<br>'
			.'<strong>FECHA: '.$values['fecha'].'</strong><br>'
			.'<b>Nombre</b>: '.$values['nombre'].'<br>'
			.'<b>Correo</b>: '.$values['correo'].'<br>'
			.'<b>Celular</b>: '.$values['celular'].'<br>'
			.'<b>Cantidad personas</b>: '.$values['nro_personas'].'<br>'
			.'<b>Barra</b>: '.$values['barra'].'<br><br>';

		$mail->isHTML(true);
		$mail->Subject = 'Formulario Web Contacto :: Wanderingbar';
		$mail->Body    = $message;

		// para pruebas nomás..
		if ($mail->send()) {
			http_response_code(201);
			$json['success_message'] = 'La siguiente solicitud está siendo procesada';
		} else {
			http_response_code(500);
			$json = ['load' => true, 'error_message' => 'El mensaje no pudo ser enviado, intentelo de nuevo, error: '.$mail->ErrorInfo];
		}

	} catch (phpmailerException $pex) {
		http_response_code(500);
		$json = ['load' => false, 'error_message' => $pex->getMessage()];
	}
}

echo json_encode($json);