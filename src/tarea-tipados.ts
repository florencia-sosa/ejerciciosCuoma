/*
    ===== Código de TypeScript =====
*/

interface Superheroe {
  nombre: string;
  edad: number;
  direccion: Direccion;
  mostrarDireccion: () => string;
}
interface Direccion {
  calle: string;
  pais: string;
  ciudad: string;
}
const superheroe: Superheroe = {
  nombre: 'Spiderman',
  edad: 30,
  direccion: {
    calle: 'Main St',
    pais: 'USA',
    ciudad: 'NY',
  },
  mostrarDireccion() {
    return (
      'El ' +
      this.nombre +
      ',vive en' +
      this.direccion.pais +
      ',' +
      this.direccion.ciudad
    );
  },
};
/*Desestructuración de objetos*/
/*Desestructuración de arrays es por posicionamiento*/
const {nombre:nombreDeHeroe, edad:edadDeHeroe } = superheroe;
const {calle, pais, ciudad}= superheroe.direccion
console.log("El nombre del Heroe es: " + nombreDeHeroe);
console.log("La edad es: " + edadDeHeroe);
console.log(nombreDeHeroe + " vive en la calle " + calle + ", en la ciudad de " + ciudad + " en " + pais )

