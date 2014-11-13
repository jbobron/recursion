// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var result = "";
  var temp = true;
  // your code goes here
  var emptyObj = {};
  if(typeof obj === "number"){
  	//return obj.toString();
  	result += obj.toString();
  }
  if(typeof obj === "string"){
  	result += "\"" + obj + "\"";
  }
  //empty array []
  if(typeof obj === undefined){
  	result += emptyObj;
  }
  if(typeof obj === "function"){
  	return {};
  }
  if(obj === null){
  	result += "null";
  	temp = false;
  }
  if(typeof obj === "boolean"){
  	result += obj.toString();
  }
  if(temp){
	  if(typeof obj === "object"){
	  	 if(Array.isArray(obj) === true){
	  	  	if(obj.length === 0){
	  	  		result += '[' + ']';
	  	  	}
	  	  	else{   								//NON EMPTY ARRAY
	  	  		result += '['
	  	  		for(var i = 0; i<obj.length; i++){
	  	  			result += stringifyJSON(obj[i]);
	  	  			if(i != obj.length-1){
	  	  				result += ",";
	  	  			}
	  	  		}
	  	  		result += ']';
	  	  	}
	  	  }  //should i change below statement to check if it is a object?
	  	  else{
	  	  	var size = Object.keys(obj).length;
	  	  	var count = 0;
	  	  	result += '{';
	  	  		for(key in obj){
	  	  			if(typeof obj[key] === undefined || typeof obj[key] === "function"){
	  	  				return '{}';
	  	  			}
	  	  			count +=1;
	  	  			result += "\"" + key + "\"" + ":" + stringifyJSON(obj[key]);
	  	  			if(count != size){
	  	  				result += ",";
	  	  			}
	  	  		}
	  	  	result += '}'
	  	  }
	  }
	}
  	return result;
  	//null is of type object
  	//EVERYTHING ELSE

  	//if its a function or undefined it should return an empty object
  };

  //JSON.stringify(stringifiableObjects);  LOOK AT THIS IN THE CONSOLE
// '[' + ']' === "[]" proved in console


