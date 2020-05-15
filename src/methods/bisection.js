import { create, all } from 'mathjs';

export default async ({ f, fn, a, b, e }) =>
  new Promise((resolve) => {
   
    //ENCONTRA N
    let n = 0;
    for (let i = 0; i < 9999; i++) {
      if(Math.pow(2, i)>= 1/(e/(b-a))){
        n = i;
        break;
      }
    }

    //CALCULA
    for (let i = 0; i < n; i++) {
      let x = (a+b)/2; 
      let valorDerivada = derivada(fn, x);
      if(valorDerivada < 0) a = x;
      else if(valorDerivada > 0) b = x;
      else break;
    }

    return resolve((a+b)/2);
  });

  function derivada(fn, num){
    const math = create(all);
    return math.derivative(fn,'x').evaluate({x:num})
  }
