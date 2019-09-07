const n1 = [];
let n2 = [];
var r = []

function rotate(arr, rotations) {
  for(let l = 1; l<=arr; l++) {
    n1.push(l);
  }

  console.log('Original Array', n1)

  n2 = [...n1];

  for (let s = 1; s <= rotations; s++) {
    r = [...n2]

    for (let i = n2.length - 1; i >= 0; i--) {
      let tempIn = r[i - 1];

      if (tempIn == r[-1]) {
        tempR = r.lastIndexOf(n2[r.length - 1]);
        r[tempR] = n2[i]

      } else {
        r[i - 1] = n2[i]
      }
    }
    n2 = r;
  }

}


rotate(6,2);

console.log('After Rotation ', r)