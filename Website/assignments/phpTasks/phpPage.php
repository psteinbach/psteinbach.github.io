
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="stylesheet" type="text/css" href="phpStyle.css">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Task Table</title>
</head>
<header>
	Task Table  
</header>


<body>

    
<center>
<div class="page">
    <div class="pgtxt">
        Login
    </div>
    <form>
        Username: <input type="text" name="username" autofocus>
    <br>
        Password: <input type="password" name="password">
    </form>

    <div class="submitFailed" id="submitID">
        <div class="buttonText">Submit</div>
    </div>
</div>
    
<?php
    $txt1 = "check em ";
    $txt2 = "sup nerd";
    print "<p>Hello World</p>";
?>
<?php
    print "<p>".$txt1."</p>";
    include('phpDoc.php');
?>
</center>
</body>
</html>
