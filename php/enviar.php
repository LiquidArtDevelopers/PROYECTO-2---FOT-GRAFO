<?php

/* 1- recoger datos y comprobar */
$destino = "aranaz@gmail.com";  /* correo del admin */

$nombre = $_POST["nombre"];/* datos del usuario */
$correo = $_POST["correo"];
$telefono = $_POST["telefono"];
$mensaje = $_POST["mensaje"];

/* datos que cogemos de su cliente */
/* ip */
$ip = $_SERVER['REMOTE_ADDR'];

/* datos que cogenmos del sistema */
/* fecha */
$datetime = date("Y-m-d H:i:s");


/* mensaje concatenado para enviar por correo */
$contenido = "Fecha de envío: " . $datetime . "\nIP: " . $ip . "\nNombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono: " . $telefono . "\nMensaje: " . $mensaje;



/* 9- enviar corres de confirmación */
mail($destino,"Consulta de la Web",$contenido); /* correo que recibo yo */
mail($correo,"Hemos recibido tu consulta",$contenido); /* correo que recibe el cliente */

/* 10- redirigir a gracias.html y salir de aquí */
header("location:../index.html?enviado=ok");


?>