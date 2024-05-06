const formP = document.getElementById("primeForm")
const n = formP.elements["N"]
const result=document.getElementById("result")


function getPrimes(event) {
  event.preventDefault()
  
  result.textContent="2"

  nextPrime:
  for (let i = 3; i <=n.value; i++) {

    for (let j = 2; j < i; j++) {//find a divider
      if (i % j == 0) continue nextPrime; // if it found it not a prime and try the next number
    }
    setTimeout(function(){
      result.textContent+=`, ${i}`
  }, 2000);
    

  }
  
}


formP.addEventListener('click', getPrimes)
