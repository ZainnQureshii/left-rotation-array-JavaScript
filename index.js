function leftRotationArray(tmpArr, rotation){
  let arr = [];
  let newArray = [];
  let lastIndex = 0;

  // Creating Array from the given input: tmpArr
  for(let i = 1; i<=tmpArr; i++){
    arr.push(i);
  }
  console.log('Original Arr',arr)

  // Repeating Rotations by 1 according to user input: rotation
  for(i = 1; i<=rotation; i++) {

    newArray = [...arr];
    
    // Assigning the rotated values of arr to newArray
    for(let j = newArray.length - 1; j >= 0; j--){
      if(newArray[j-1] >= 0) {
        newArray[j-1] = arr[j];
      } else {
        lastIndex = newArray.length-1; 
        newArray[lastIndex] = arr[0];
      }
    }
    console.log('Rotation ',i ,newArray)
    arr = [...newArray];
  }
}

// 1st Parameter is length of the Array
// 2nd Parameter is the rotations to the left
leftRotationArray(5, 2);