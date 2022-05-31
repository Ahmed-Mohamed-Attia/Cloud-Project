<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers: *');
$db = mysqli_connect("localhost", "root", "", "cloud_store");
$uname= $_POST["username"];
$pass= $_POST["password"];
$mail= $_POST["email"];
$phone= $_POST["phone"];
$location= $_POST["location"];



if($uname=="" || $pass=="" || $phone==""|| $mail==""||$location=="")
{
    echo '<script> alert("Empty Field") </script>';
    require "http://localhost:3000/Signup";
}
else
{
$sql="select * from user where name= '$uname'";
$res=mysqli_query($db,$sql) or die(mysqli_error($con));
        if(mysqli_num_rows($res)>=1)
        {
            echo '<script> alert("username already taken") </script>';
            header("Location: http://localhost:3000/Signup");
            
        }
        else
        {
            mysqli_query($db,"INSERT INTO user (name, email, pass, location,phone) VALUES ('$uname', '$mail' , '$pass','$location','$phone')");
            echo '<script> alert("reg. success") </script>';
            header("Location: http://localhost:3000/");



        }
}


?>