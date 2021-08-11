/*
    ===== Código de TypeScript =====
*/
export interface Producto {
  descripcion: string;
  precio: number;
}

const telefono: Producto = {
  descripcion: 'telefono',
  precio: 100,
};

const celular: Producto = {
  descripcion: 'Celular',
  precio: 100,
};

const articulos = [telefono, celular];

export function calculaISV(productos: Producto[]): [number, number, string] {
  let total = 0;
   let compra = '';
  articulos.forEach((producto) => {
    total += producto.precio;
     compra += producto.descripcion
  });
  return [total, total * 0.15, compra];
}
console.log(calculaISV(articulos))
