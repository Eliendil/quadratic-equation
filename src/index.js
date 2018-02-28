module.exports = function solveEquation(equation) { 


var expression = equation.replace(/\s/g, '');
var a = Number.parseInt( expression.match(/-?[0-9]+(?=\*[A-z]\^2)/) );
var b = Number.parseInt( expression.match(/-?[0-9]+(?=\*[A-z](?!\^))/) );
var c = Number.parseInt( expression.replace(a,'').replace(b,'').replace('x^2','').match(/-?[0-9]+/) );


var result = Math.round(-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
var result2 = Math.round(-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

var x = [result, result2];
x.sort(function(result, result2) {
    return result - result2;
  });
return (x);
}
