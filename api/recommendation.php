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
$query_of = "SELECT cat_id FROM product 
    WHERE id  IN (SELECT pro_id FROM bill_product
            WHERE bill_id  IN (SELECT id FROM bill 
                           WHERE user_id = 1))";
$result = mysqli_query($db,$query_of);
$category_ids = mysqli_fetch_assoc($result);                
//  /*           1 2 3
//    votes = [0,1,3,1]*/

$max = 0;

$best_cat_id = 0;

var_dump($category_ids);

$votes = array();
for($i = 0; $i<count($category_ids);$i++)
{
    $votes[$category_ids[$i]] =$votes[$category_ids[$i] ]+1;
}
    $best_cat_id = array_search(max($votes),$votes);  
 

// $query = "SELECT * FROM product ORDER BY id ";
$items = mysqli_query($db,$query_of);
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
