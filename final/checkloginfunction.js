function checkloginfunction() {
//document.getElementById("demo").innerHTML = "Hello World";
var xmlhttp;
var useremail,userpassword;
useremail = document.getElementById("inputemail").value;
userpassword = document.getElementById("inputpassword").value;

    if (window.XMLHttpRequest){ 
        xmlhttp = new XMLHttpRequest();
        }else{ // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
        
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
   alert(xmlhttp.responseText);
    }
  }
xmlhttp.open("POST","checklogin.php",true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("Email="+useremail+"&Password="+userpassword);

}
