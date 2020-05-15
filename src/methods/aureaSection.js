export default async ({ f, a, b, e }) =>
  new Promise((resolve, reject) => {
    let alfa = (-1 + Math.sqrt(5))/2;
    let beta = 1 - alfa;

    for (let i = 1; b - a >= e && i < 9999; i += 1){
        const mi = a + beta*(b-a);
        const lambda = a + alfa*(b-a);

        if(f(mi) > f(lambda)) a = mi;
        else b = lambda;
    }

    if (b - a >= e) return reject(new Error('Não foi possível determinar o mínimo da função'));
    return resolve((b + a) / 2);
  });
