// www.codewars.com
// KATA 1 7kyu

// H hearts S Spades C clubs D Diamonds
const solve = arr => arr.filter((el,i) => el > Math.max(...arr.slice(i + 1)));

console.log(solve([1,21,4,7,5]));
console.log(solve([5,4,3,2,1]));

// KATA 2 7kyu
const spinAround = turns => {
  let count = 0
  turns.forEach(turn => {
    return turn == 'right' ? count += 90 : count -= 90
  })
  return Math.floor(Math.abs(count)/ 360)
};

console.log(spinAround(['left', 'right', 'left', 'right']));
console.log(spinAround(["right", "right", "right", "right", "right", "right", "right", "right"] ));
console.log(spinAround(["left", "left", "left", "left"] ));
console.log(spinAround(["right", "right", "right", "right"] ));

// KATA 3 8kyu
const evenNumbers = (array, number) => {
  let test = []
  array.forEach((n, i) => {
    if (n % 2 === 0) {
      test.push(n)
    }
  })
  return test.splice(test.length-number, number)
};

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
