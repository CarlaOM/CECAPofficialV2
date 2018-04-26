import { Rol } from "../../modelo/rol";
import { Sucursal } from "../../modelo/sucursal";
import { Cartera } from "../../modelo/cartera";

export class Ejecutivo {

    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public cell:number,
        public email:string,        
        public rol:string,
        public sucursal:string,
        public cartera:string,
        
      ) {  }
}
