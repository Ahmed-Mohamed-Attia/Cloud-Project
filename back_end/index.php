<?php
header("Access-Control-Allow-Origin:*");
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods:*');
header('Access-Control-Max-Age:3600');
header('Access-Control-Allow-Headers:*');

// $username="root";
// $password="";
// $database=new PDO("mysql:host=localhost;dbname=  ;charset=utf8;",$username,$password);

$db = mysqli_connect("localhost", "root", "root", "cloud_project");



$query = "SELECT * FROM user ORDER BY id ";
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







// if (!$db) {
// print "Error - Could not connect to MySQL";
// exit;
// }
// else{
// print "success";
// }

//$items= $db -> prepare( $db ,"SELECT* FROM user ");
//$items ->execute();
// $items=$items-> mysqli_fetch_array(PDO::FETCH_ASSOC);s


//$num_rows = mysqli_num_rows($items);
 //for ($row_num = 1; $row_num <= $num_rows; $row_num++)
 //{
    // $items = mysqli_fetch_array($items);
    // print_r(json_encode($items));

// $row = mysqli_fetch_array($items);
// print "Name: ";
// print $row["name"];
// print "Email: ";
// print $row["email"];
// print "password: ";
// print $row["pass"];
// print"location:";
// print $row["location"];
// print"phone:";
// print $row["phone"];
// print "</p>";
// }




// $query = "SELECT* FROM user ";
// $result = mysqli_query($db,$query);
// $num_rows = mysqli_num_rows($result);
// $row = mysqli_fetch_array($result);

