
<html ng-app="main" lang="en">
<head>
  <meta charset="UTF-8">
  <title>Angular App</title>
  <link rel="stylesheet" href="css/app.css">
  <script src="components/angular/angular.js"></script>
  <script src="components/angular-route/angular-route.js"></script>
  <script type="text/javascript" src="js/angular/application.js"></script>
</head>
<body>
  Hello, World, this is angular and to prove it, there is a computation: 5 + 3 == {{ 5 + 3 }}

  <div>
  	<ul>
  		<li><a href="#pro">projects</a></li>
  	</ul>
  </div>

  <div ng-view>
  	
  </div>
 
</body>
</html>