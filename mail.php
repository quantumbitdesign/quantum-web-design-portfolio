<?php
$to = "kevingoudswaard@gmail.com";
$subject = "You have a new Contact Request!";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	
	if (empty($_POST["name"])) {
    $nameErr = "Please put your name on the form.";
	echo $nameErr;
  } else {
    $name = $_POST["name"];
	
    }
	
	$phone = $_POST["phone"];
	$email = $_POST["email"];
	$address = $_POST["address"];
	$city = $_POST["city"];
	$state = $_POST["state"];
	$zip = $_POST["zip"];
	$comment = $_POST["comment"];
	
}

$message = '<html><body>';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($name) . "</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($email) . "</td></tr>";
$message .= "<tr><td><strong>Street:</strong> </td><td>" . strip_tags($address) . "</td></tr>";
$message .= "<tr><td><strong>City:</strong> </td><td>" . strip_tags($city) . "</td></tr>";
$message .= "<tr><td><strong>State:</strong> </td><td>" . strip_tags($state) . "</td></tr>";
$message .= "<tr><td><strong>Zip Code:</strong> </td><td>" . strip_tags($zip) . "</td></tr>";
$message .= "</table>";
$message .= "<p><strong>" . strip_tags($comment) . "</p></strong>";
$message .= "</body></html>";

$headers = "From: " . strip_tags($email) . "\r\n";
$headers .= "Reply-To: ". strip_tags($email) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

mail($to,$subject,$message,$headers);
?>

<html>
<head>
	<meta charset="UTF-8">
	<link href="https://fonts.googleapis.com/css?family=Baloo" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet">
	<link rel="stylesheet" href="normalizecss.css">
	<link rel="stylesheet" href="stylecss.css">
	<link rel="stylesheet" href="responsivecss.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<title>Thanks for Contacting Me!</title>
<body>
	<div onclick="openNav()" id="navHamburger">&#9778;</div>
<div class="pageWrapper">
	<header>
	
	</header>
	<nav id="mainSideNav" class="sideNav">
		<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
		<ul>
			<li><a href="index.html" onclick="closeNav()" id="home">Home</a></li>
			<li><a href="sandbox.html" onclick="closeNav()" id="sandbox">Javascript</br>Sandbox</a></li>
			<li><a href="contact.html" onclick="closeNav()" id="contact">Contact</a></li>
			<li><a href="about.html" onclick="closeNav()" id="about">About Me</a></li>
			<li><a href="eloquent.html" onclick="closeNav()" id="eloquent">Eloquent JS</br>Exercise Solutions</a></li>
		</ul>
	</nav>
	<div id="overlay" onclick="closeNav()"></div>
	</header>
	<h1>Thank you for contacting me!</h1>
	<article class="mailMainContent">
		<section>
			<h3>Connection</h3>
			<p>In today's age of technology, it is vitally important to stay connected as human beings. Although our tools grow more advanced by the day, they only empower our own intrinsic imagination, knowledge, and ability. If we resigned to be nothing more than our tools, we betray a greater sense of purpose inherit to us all, and arrest our own potential to be more.</p>
			<p>Your inquiry will be responded to as soon as possible. If it is urgent, please call! <span>&#9742;<a href="tel:209-559-9323">209.559.9323</a></span></p>
		</section>
	</article>
</div>
	<footer>
	
		<div id="footerSection1">
		<p>&copy; QuantumBit Design</p>
		<p>If you have a question about the site, or just simply want to chat, please <a href="contact.html">Contact Me</a>.</p>
		<p>This site makes use of cookies and log data to optimize your experience while here, and while visiting this site, you agree to have this data collected. Use of the site without permission is prohibited.</p>
		</div>
		<div id="footerSection2">
		<a href="https://twitter.com/QBit_Design" target="_blank"><img src="images/twitter.png" alt="twitter's icon, a blue bird chirping"></a>
		<a href="https://www.linkedin.com/in/quantumbitdesign/" target="_blank"><img src="images/linkedin.png" alt="linked in's icon, the word 'in' with a blue background"></a>
		</div>
		
	</footer>


	
<script src="quantum.js"></script>	
</body>
</html>