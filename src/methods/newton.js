import { create, all } from 'mathjs';

export default async ({ f, fn, a, b, e }) =>
  new Promise((resolve, reject) => {
    
    const config = { };
    const math = create(all, config);
    
    alert(math.derivative(fn,'x').evaluate({x:a}));
    let xn = a;
    let lim = b;
    
    //if () return reject(new Error('Não foi possível determinar o mínimo da função'));
    
    return resolve('a');
  });
