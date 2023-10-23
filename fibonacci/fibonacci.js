/// fibonacci sequence generator
/// using iterative method
const fibs = (n) => {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  }
  return sequence;
};

/// using recursion
/// using recursion
/// using recursion

const fibsRec = (n, sequence = [0, 1]) => {
  // base case :
  if (n === 2) return sequence;
  if (n === 1) return [sequence[0]];
  if (n === 0) return [];

  // recursive call

  return fibsRec(
    --n,
    sequence.concat(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    )
  );
};
console.log(fibsRec(2));
