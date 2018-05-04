import { Rol } from "../../modelo/rol";
import { Offices } from "../../modelo/offices";
import { Cartera } from "../../modelo/cartera";

export class Persona {

    constructor(
        public _id: string,
        public name: string,
        public lastname:string,
        public ci:string,  
        public cell:number,
        public correo:string,        
        public ocupacion:string        
      ) {  }
}
