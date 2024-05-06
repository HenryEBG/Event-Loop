/**
 *  PART 1
 *  Find the overflow stack and print the error and number
 */


let count=0
try {
  function recursive(){
    count++
    //console.log(count)
    recursive()
  }
  recursive()
} catch (error) {
  console.log(`System give the message ${error.message} when reach ${count}`) 
 // console.log(count)

}

/**
 * PART 2
 * Usin Trampoline to 
 */

const trampoline = (f, ...args) => {
  let result = f(...args);
  while (typeof result === "function") {
    result = result();
  }
  return result;
}

unflattenArray=[1,2,3,['a','b',[1.2,2.3['hello','cruel','world',[{name:'Henry',lastName:'Berganza'},{name:'Mario',lastName:'Baracus'}]],3.5]],6,7]
flattenArray=[]

function unFlattingArray(index,nextArray){
  if(index>=nextArray.length) return
  if(Array.isArray(nextArray[index])){
    unFlattingArray(0,nextArray[index])
  } else {
    flattenArray.push(nextArray[index])
  }
  unFlattingArray(index+1,nextArray)
}

unFlattingArray(0,unflattenArray)
console.log(flattenArray)