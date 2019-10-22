<?php
$user="localhost";
$se="17bcn7025";
$pa="potatonoob";
$db="vitap17bcn7025";
$conn=new mysqli($user,$se,$pa);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
