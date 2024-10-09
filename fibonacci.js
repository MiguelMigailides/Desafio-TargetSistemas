function fibonacciGenerator(num) {
    let fib = [0, 1];
  
    for (let i = 2; i < num; i++) {
      let next = fib[fib.length - 1] + fib[fib.length - 2];
      if (next > num) {
        break;
      }
      fib.push(next);
    }
    return fib;
  }
  
  function fibonacciCheck(num) {
    const fib = fibonacciGenerator(num);
    if (fib.includes(num)) {
      return `O núemro ${num} pertence à sequência de fibonacci`;
    } else {
      return `O núemro ${num} não pertence à sequncia de fibonacci`;
    }
  }
  
  let numero = 34;
  console.log(fibonacciCheck(numero));
  