// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // should return an array of all elems that have the same className
  // get an array of all nodes
  // check if that node has other nodes
  // yes, recurse the f(x) - should pass current Node as arg, NOT CLASSNAME
  // no, check if that node class is the same as className
  // yes, push into result array

  var result = [];

  var checkClass = function(className, currNode, resultArr) {
    // check if currNode has class(es)
    if (currNode.classList) {
        if (currNode.classList.contains(className)) {
            resultArr.push(currNode);
        }

    }

    // then check if currNode has children nodes
    if (currNode.childNodes) {
        for (var child of currNode.childNodes) {
            // check if the child node is an elem or text
            // if elem, run the func again
            if (child.nodeType === 1) {
                checkClass(className, child, result);
            }
        }
    }
  }

  // call checkClass to start the recursive func
  checkClass(className, document.body, result);

  return result;

};
