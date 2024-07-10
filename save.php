<?php

$data = $_POST['img'];
$filename = $_POST['filename'];

$data = str_replace('data:image/png;base64,', '', $data);
$data = str_replace(' ', '+', $data);
$img = base64_decode($data);

if ($img !== false) {
    header('Content-Type: image/png');
    header('Content-Disposition: attachment; filename="'.$filename.'"');
    echo $img;
} else {
    header("HTTP/1.1 500 Internal Server Error");
}

?>
