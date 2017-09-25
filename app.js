// The FizzBuzz problem is a common interview question, and it tests basic programming skills, including the concept of the for loop.

  // Write a program that prints numbers from 1 to 15.
  // For multiples of 3 print “Fizz” instead of the number. To test multiples of 3, I set i //modulo 3 equal to zero.
  // For the multiples of 5 print “Buzz” instead of the number. To test multiples of 5, I set i //modulo 5 equal to Zero.
  // For numbers which are multiples of both 3 && (and) 5 print “FizzBuzz”. To test both 3 and // 5, we combine the 2 above.
  //else print the number itself: console.log(i)

  //this was my solution for the FizzBuzz test:

  function fizzBuzz(num){
    for (var i = 1; i<=num; i++){
      if (i%3 === 0 && i%5 ===0){
        console.log("FizzBuzz");
      }
      else if (i%3 === 0){
        console.log("Fizz");
      }
      else if(i%5 === 0){
        console.log("Buzz");
      }
      else{
        console.log(i);
      }
    }
  }
  var num = 15
  fizzBuzz(num);
