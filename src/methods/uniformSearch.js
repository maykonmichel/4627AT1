export default async ({ f, a, b, d }) =>
  new Promise((resolve, reject) => {
    //a é o primeiro valor de x e b o limite
    let x = a;
    let lim = b;
    let parada = true;
    let numDecimais = d.toString().length - d.toString().indexOf('.');
    //Primeira Busca
    for (let i = 1; parada && i <= 9999; i += 1) {
      const xk = parseFloat((x + d).toFixed(numDecimais));
      if (f(xk) > f(x) || xk >= lim) {
        parada = false;
        x = Math.max(a, x - d);//x de 2 intervalos passados
      } else if (i === 9999) return reject(new Error('Não foi possível determinar o mínimo da função, digite um Δ maior ou diminua o intervalo de busca!'));
      else x = xk;
    }
    //Refinamento de busca
    d /= 10; //divide delta por 10
    parada = true;
    for (let i = 1; parada && i <= 9999; i += 1) {
      const xk = parseFloat((x + d).toFixed(numDecimais));
      if (f(xk) > f(x) || xk >= lim) parada = false;
      else if (i === 9999) return reject(new Error('Não foi possível determinar o mínimo da função, digite um Δ maior ou diminua o intervalo de busca!'));
      else x = xk;
    }
    return resolve(x);
  });
