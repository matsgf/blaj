function multiplyTrio(a,b,c) {
    return a*b*c;
}

function maxOf2(a,b) {
    return a >= b ? a : b;
}



function getMax(idA,idB) {
    var val1 = document.getElementById(idA).value;
    var val2 = document.getElementById(idB).value;
    alert(maxOf2(val1, val2))
}



function mystery(x, y) {
  var a = 4 * x * y;
  var b = 3 * y + 5;
  var c = a + b;
  return c;
}


function mystery(x, y) {
  return (4 * x * y) + (3 * y + 5) ;
}
