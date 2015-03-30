<?php 
session_start();
$value = isset($_POST['value']) ? $_POST['value'] : '';
$host="127.0.0.1"; // Host name 
$username="root"; // Mysql username 
$password=""; // Mysql password 
$db_name="Advertisment"; // Database name 
$tbl_name="User"; // Table name 
// Connect to server and select databse.
mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db_name")or die("cannot select DB");

// username and password sent from form 
$myusername=$_POST['Email']; 
$mypassword=$_POST['Password']; 
$error_message='';
    //if(isset($_POST['myusername'])){ $notify = $_POST['notify_box']; }
    //if(isset($_POST['mypassword'])){ $notify = $_POST['notify_box']; }
error_reporting(E_ALL ^ E_NOTICE);
// To protect MySQL injection (more detail about MySQL injection)
$myusername = stripslashes($myusername);
$mypassword = stripslashes($mypassword);
$myusername = mysql_real_escape_string($myusername);
$mypassword = mysql_real_escape_string($mypassword);
$sql="SELECT * FROM " . $tbl_name . " WHERE Email='" . $myusername . "' and Password='". $mypassword . "'";

$result=mysql_query($sql);

// Mysql_num_row is counting table row
$count=mysql_num_rows($result);

// If result matched $myusername and $mypassword, table row must be 1 row
if($count==1){

// Register $myusername, $mypassword and redirect to file "login_success.php"//
//session_register("myusername");
//session_register("mypassword"); 

    $_SESSION['myusername'];
    $_SESSION['mypassword'];
    echo "you have successfully login";
}
else {
	echo "your password or email is not correct";

    $_SESSION['myusername'];
    $_SESSION['mypassword'];
    $_SESSION['error_message']=null;
}
?>
