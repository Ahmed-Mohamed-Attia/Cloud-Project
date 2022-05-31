<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods:*');
header('Access-Control-Max-Age:3600');


// $username="root";
// $password="";
// $database=new PDO("mysql:host=localhost;dbname=  ;charset=utf8;",$username,$password);

$db = mysqli_connect("localhost", "root", "", "cloud_store");
$username=$_POST["username"];
$pass= $_POST["password"];

$query="select * from user where name = '$username' and pass= '$pass'";
$res=mysqli_query($db, $query);
if(mysqli_num_rows($res)>=1)
{
    echo '<script> alert("you are a validated user. logged in successfully") </script>';
    header("Location: http://localhost:3000/Home");
}
else
{
    echo '<script> alert("Invalid username/password") </script>';
    header("Location: http://localhost:3000/");

}
