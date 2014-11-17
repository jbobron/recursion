// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var result = [];

	var helperFunc = function(myNodes){
		for(var i = 0; i < myNodes.length; i++){
			if(_.contains(myNodes[i].classList, className)){
				result.push(myNodes[i]);		
			}
			helperFunc(myNodes[i].childNodes);
		}
	}
	helperFunc(document.childNodes);
	return result;
};





/*

<body class = "target class">
	 <div class = "target class">
		<p>
	 <div>
		<p>
	 <div class = "target class">
	 	<ul>
			<li class = "target class">
			<li class = "target class">
			<li class = "target class">
		<ul>
</body>

*/