const formP = document.getElementById("primeForm")
const n = formP.elements["N"]

function getPrimes(event) {
  event.preventDefault()
  let list = []
  console.log(n)
  console.log(n.value)
  nextPrime:
  for (let i = 1; i <=n.value; i++) {

    for (let j = 2; j < i; j++) {//find a divider
      if (i % j == 0) continue nextPrime; // if it found it not a prime and try the next number
    }
    
    list.push(i) // It is a prime add to the list
  }
  console.log(list)
  //nextPrime
  
}


formP.addEventListener('click', getPrimes)
