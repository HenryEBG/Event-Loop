/***********************************************************
 * variables pointing to the elements in the html file
 ***********************************************************/
const formP = document.getElementById("primeForm")
const n = formP.elements["N"]
const result=document.getElementById("result")

/*****************************************************************
 * Function that iterate until find prime numbers between 1-N
 * @param {*} event 
 *****************************************************************/
function getPrimes(event) {
  event.preventDefault()
  if(event.target)
  
   nextPrime:
  for (let i = 2; i <=n.value; i++) {

    for (let j = 2; j < i; j++) {//find a divider
      if (i % j == 0) continue nextPrime; // if it found it not a prime and try the next number
    }
    //adding the setTimeout Function
    setTimeout(function(){
      result.textContent+=` ${i}`
  }, 2000);
    
  }
  alert('All the numbers are calculated')
}

/**
 * Event listener that calculates primes clicking in the submit button
 */
formP.addEventListener('submit', getPrimes)
