export default async ({ f, a, b, d, e }) =>
  new Promise((resolve, reject) => {
    let l = a;
    let r = b;
    for (let i = 1; r - l >= e && i < 9999; i += 1) {
      const m = (l + r) / 2;
      const x = m - d;
      const z = m + d;
      if (f(x) > f(z)) l = x;
      else r = z;
    }
    if (r - l >= e) return reject(new Error('Não foi possível determinar o mínimo da função'));
    return resolve((l + r) / 2);
  });
