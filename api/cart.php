<?php
header("Access-Control-Allow-Origin:*");
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods:*');
header('Access-Control-Max-Age:3600');
header('Access-Control-Allow-Headers:*');

// $username="root";
// $password="";
// $database=new PDO("mysql:host=localhost;dbname=  ;charset=utf8;",$username,$password);

$db = mysqli_connect("localhost", "root", "", "cloud_store");



$query = "SELECT * FROM product WHERE id IN(SELECT pro_id FROM cart WHERE user_id = 1) ";
$items = mysqli_query($db,$query);
//$items = mysqli_fetch_array($items);
$num_rows = mysqli_num_rows($items);
$rows=[];
while($item= mysqli_fetch_assoc($items)){
    // This will return multiple rows
    $rows[] = $item;
}

//$items = mysqli_fetch_assoc($items);
//echo implode(" ",$items); 
print_r(json_encode($rows));