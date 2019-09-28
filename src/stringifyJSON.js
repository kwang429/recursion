// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// turns an object or value into a string

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === "number") {
  	return obj.toString();

  } else if (obj === null) {
  	return "null";

  } else if (typeof obj === "boolean") {
  	return obj.toString();

  } else if (typeof obj === "string") {
	return '"' + obj + '"';		// add quotes to each side
 
  } else if (Array.isArray(obj)) {
	var stringedArray = "";

	if (obj.length === 1) {	// if the array isn't empty
		return "[" + stringifyJSON(obj[0]) + "]";

	} else if (obj.length > 1) {	// if the array is empty
		for (var i = 0; i < obj.length; i++) {
			if (i === 0) {
				stringedArray = "[" + stringifyJSON(obj[i]) + ",";

			} else if (i === obj.length - 1) {
				stringedArray += stringifyJSON(obj[i]) + "]";

			} else {
				stringedArray += stringifyJSON(obj[i]) + ",";

			}
		}
		return stringedArray;

  	} else {
		return "[]";
	}

  } else if (typeof obj === "object") {
	  var stringedObj = "";

  	if (Object.keys(obj).length === 0) {
		return "{}"

	}
}

};
