
interface Superheroe {
  nombre: string;
  edad: number;
  direccion: Direccion; 
  mostrarDireccion: () =>string;
}
 interface Direccion{
    calle: string;
    pais: string;
    ciudad: string;

 }
const superHeroe: Superheroe = {
  nombre: 'Spiderman',
  edad: 30,
  direccion: {
    calle: 'Main St',
    pais: 'USA',
    ciudad: 'NY',
  },
  mostrarDireccion(){
      return "El " + this.nombre + ',vive en' + this.direccion.pais + ',' + this.direccion.ciudad;
  },
};


console.log(superheroe.mostrarDireccion())