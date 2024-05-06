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

//example array
let unflattenArray=[1,2,3,['a','b',[1.2,2.3,['hello','cruel','world'],3.5]],6,7]
//empty array
let flattenArray=[]

// //recursive function that flat an array
// function unFlattingArray(index,nextArray){
//   if(index>=nextArray.length) return
//   if(Array.isArray(nextArray[index])){
//     unFlattingArray(0,nextArray[index])
//   } else {
//     flattenArray.push(nextArray[index])
//   }
//   unFlattingArray(index+1,nextArray)
// }

// //trying the unflatting function
// unFlattingArray(0,unflattenArray)
// console.log(flattenArray)


 flattenArray=[]

 //changing to a control recursive function
function unFlattingArray(n,index,nextArray){
  if(n===0) return
  if(index>=nextArray.length) return
  if(Array.isArray(nextArray[index])){
    unFlattingArray(n-1,0,nextArray[index])
  } else {
    flattenArray.push(nextArray[index])
  }
  unFlattingArray(n,index+1,nextArray)
}

//trying the unflatting function
unFlattingArray(3,0,unflattenArray)
console.log(flattenArray)

