import { create, all } from 'mathjs';

export default async ({ f, fn, a, b, e }) =>
  new Promise((resolve, reject) => {
    
    const config = { };
    const math = create(all, config);

    let i = 1;
    let xn = a;
    let derP = math.derivative(fn,'x');
    let derS = math.derivative(derP,'x');
    let crit1;
    let crit2;
    if(math.abs(derP.evaluate({x:xn}))>e){
      do{
        i++;
        const f1 = derP.evaluate({x:xn});
        const f2 = derS.evaluate({x:xn});
        if(!f2 || i == 9999) return reject(new Error('Não foi possível determinar o mínimo da função'));
        const xn1 = xn - f1/f2;
        crit1 = math.abs(derP.evaluate({x:xn1}))>e;
        crit2 = math.abs(xn1-xn)/math.max(math.abs(xn1),1)>e;
        xn = xn1;
      }while(crit1 && crit2 && i<9999);
    }
    
    return resolve(xn);
  });
