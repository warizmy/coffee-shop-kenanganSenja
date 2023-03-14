<?php
$hostName = "localhost";
$username = "root";
$password = "";
$dbName = "coffee-shop";

$conn = mysqli_connect($hostName, $username, $password, $dbName);

if (!$conn) {
  echo "koneksi gagal";
} else {
  echo "koneksi berhasil";
}

?>