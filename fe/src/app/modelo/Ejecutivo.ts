export class Ejecutivo {

    constructor(
        public _id: string,
        public name: string,
        public lastname:string,
        public password_hash:any,
        public active:boolean,    
        public cell:number,
        public correo:string,        
        public rol:string,
        public offices:string,
        public cartera:string,
        
      ) {  }
}
