

const tail = function(array) {
  let arrayTail = [];
  if (array.length === 0) {
    return arrayTail;
  } else if (array.length === 1) {
    return arrayTail;
  } else {
    for (let i = 1; i < array.length; i++) {
      arrayTail.push(array[i]);
    }
    return arrayTail;
  }
};

// console.log(tail([1, 3, 5]));

module.exports = tail;