import { Rol } from "../../modelo/rol";
import { Sucursal } from "../../modelo/sucursal";
import { Cartera } from "../../modelo/cartera";

export class Ejecutivo {

    constructor(
        public _id: string,
        public name: string,
        public password_hash:string,
        public active:boolean,
        public lastname: string,
        public cell:number,
        public correo:string,        
        public rol:string,
        public offices:string,
        public cartera:string,
        
      ) {  }
}
