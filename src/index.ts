import { calculaISV, Producto } from './desestructuracion-de-argumentos';

const carritoCompras: Producto[] = [
  {
    descripcion: 'celular',
    precio: 500,
  },
  {
    descripcion: 'telefono',
    precio: 100,
  },
  {
    descripcion: 'pc    ',
    precio: 100,
  }
];

const [total, isv] = calculaISV(carritoCompras);

console.log('total:', total)
console.log('ISV: ', isv)