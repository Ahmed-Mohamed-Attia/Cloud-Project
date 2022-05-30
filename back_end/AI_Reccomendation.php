<?php

$query = "SELECT cat_id FROM product 
    WHERE id = (SELECT pro_id FROM bill_product
            WHERE bill_id =(SELECT id FROM bill 
                           WHERE user_id = 1))";

$mysqli = new  mysqli('localhost','root','root','cloud_store');
if ($mysqli->connect_errno != 0) 
{
    echo $mysqli->connect_error;
    exit();
} 

$result = mysql_query($query);
$category_ids = mysql_fetch_array($result);                
 /*           1 2 3
   votes = [0,1,3,1]*/

$max = max($category_ids);
$best_cat_id = 0;
best_category();

 function best_category ()
 {
    $votes = array($max+1);
    foreach ($id as $category_ids) 
    {
        $votes[$id] +=1;
    }
    $best_cat_id = array_search(max($votes),$votes);  
 }

 $query2 = 'SELECT * FROM product WHERE cat_id = '. $best_cat_id;

 $Recommended = mysql_query($query2);
 $Recommended_list= mysql_fetch_array($Recommended);

