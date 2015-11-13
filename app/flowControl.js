exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //  if no number is given or the value isn't a number, return false
    // else, return the number
    if (num % 15 === 0) {
     return 'fizzbuzz';
   }
    if (num % 3 === 0) {
      return 'fizz';
    }
     if (num % 5 === 0){
      return 'buzz';
    }
    if (typeof num !== 'number'){
      return false;
    }
    return num;
  }

};
