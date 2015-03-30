<?php 
$arr = array(
	'id'=>1234,
	'choosed'=>false,
	'image' =>$_POST['coupon-file'],
	'title'=>$_POST['coupon-name'],
	'page'=>"#",
	'describe'=>$_POST['coupon-describ'],
	'category'=>"Cosmetic",
	'postdate'=>$_POST['start-date'],
	'popular'=>10);
$file="coupons.json";
$json = json_decode(file_get_contents($file), true);
array_push($json, $arr);
file_put_contents(($file), json_encode($json));
echo "Your upload is successfully";
?>