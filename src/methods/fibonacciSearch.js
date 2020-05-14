export default async ({ f, a, b, e }) =>
  new Promise((resolve) => {
    
    let n = 0;
    for (let i = 1; i < 9999; i++) {
        if(fibonacci(i) >= (b-a)/e){
          n = i;
          break;
        }
    }

    for (let k = 0; k < n; k++) {
        let mi = calculaValor(a, n-k-2, n-k, b);
        let lambda = calculaValor(a, n-k-1, n-k, b);

        if(f(mi) > f(lambda)){
          a = mi;
          mi = lambda;
          lambda = calculaValor(a, n-k-1, n-k, b);
        }

        else{
          b = lambda;
          lambda = mi;
          mi = calculaValor(a, n-k-2, n-k, b);
        }
    }

    return resolve((a+b)/2);
  });

function fibonacci(num, memo) {
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

function calculaValor(a, fn1, fn2, b){
  let divisao = fibonacci(fn1)/fibonacci(fn2);
  return a + divisao*(b-a);
}
