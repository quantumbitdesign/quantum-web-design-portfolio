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

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta http-equiv="x-ua-compatible" content="IE=edge">
		<meta name="description" content="This is a portfolio to showcase what I have learned in front-end development, and to provide a place for people to get to know me more.">
		<meta name="keywords" content="quantumbit, quantumbitdesign.com, portfolio">
		<meta name="author" content="Kevin Goudswaard, Twitter @QBit_Design">
		<link href="https://fonts.googleapis.com/css?family=Baloo|Permanent+Marker|Racing+Sans+One|Ubuntu|Exo+2" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
		<link rel="stylesheet" href="stylecss.css">
		<link rel="stylesheet" href="responsivecss.css">
		<title>QuantumBit Web Solutions</title>
	</head>
	
	<header>
		<a href="index.html"><div class="headerClick">
		<p>QuantumBit Design</p>
		<p>Naturally Inspired Craft</p>
		</div></a>
		
		
		<div id="navHamburger">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</header>
	
	<nav class="dropNav">
		<ul>
			<li><a href="index.html" id="home">Home</a></li>
			<li><a href="sandbox.html" id="sandbox">Javascript</br>Sandbox</a></li>
			<li><a href="contact.html" id="contact">Contact</a></li>
			<li><a href="about.html" id="about">About Me</a></li>
			<li><a href="eloquent.html" id="eloquent">Eloquent Javascript</a></li>
		</ul>
		<div class="nav-phoneNumber">
			<a href="tel:209-559-9323">209.559.9323</a>
		</div>
	</nav>
	
	<div id="overlay">
	</div>

<body>
<div class="pageWrapper container-fluid">

	
	<div class="rightTabClickElement tabOpener">
			<p class="TabOpener">contact</p>
	</div>
	
	<div class="rightTab">
		<span class="closebtn">&times;</span>		
		<div class="homePageContactInfo">
			<span>&#9742; &ensp;<a href="tel:209-559-9323">209.559.9323</a></span>
			<span>&#9993; &ensp;<a href="mailto: kevingoudswaard@gmail.com">kevingoudswaard@gmail.com</a></span>
			<span><address>&#9873; &ensp;15528 Buena Vista Avenida</br> Sonora, CA 95370</address></span>
		</div>
	</div>
	
	

	
		<div class="row">
			
			<div class="centerH2">
				<h2>Thank you for contacting me!</h2>
			</div>
		
			<article class="card">
				<section>
					<h4>Connection</h4>
					<p>In today's age of technology, it is vitally important to stay connected. Although our tools grow more advanced by the day, they only empower our own intrinsic imagination, knowledge, and ability. If we resigned to be nothing more than our tools, we betray a greater sense of purpose inherit to us all, and arrest our own potential to be more.</p>
					<p>Your inquiry will be responded to as soon as possible. If it is urgent, please call!<a href="tel:209-559-9323">&ensp;209.559.9323</a></p>
				</section>
			</article>
		</div>
</div>

	<footer>
		<div id="footerSection1">
			<p>&copy; 2017 QuantumBit Design</p>
			<p>This website makes use of cookies and log data to optimize your experience. Upon visiting this site, you agree to have this data collected. Use of the site, or its contents, without permission from the creator, is prohibited.</p>
			<a href="index.html">Home</a>
			<a href="about.html">About</a>
			<a href="sandbox.html">Sandbox</a>
			<a href="eloquent.html">Eloquent JS</a>
		</div>
		<div id="footerSection2">
			<a href="https://twitter.com/QBit_Design" target="_blank"><img src="images/twitter.png" alt="twitter logo"></a>
			<a href="https://www.linkedin.com/in/quantumbitdesign/" target="_blank"><img src="images/linkedin.png" alt="linked in logo"></a>
		</div>		
	</footer>


	
<script src="quantum.js"></script>	
</body>
</html>