export class Person {
   constructor(
      public first_name: string,
      public last_name: string,
      public ci: number,
      public phone: number,
      public cellphone:number,
      public email:string,
      public ocupation: number,  //1 = universitario, 2=Profecional, 3=particular
      public descOcupation: {
        //universitario
        carrera: String,
        universidad: String,
        semestre: String,
        //Particular
        areaTrabajo: String,
        //Profesional
        profesion: String,
        empresa: String,
        cargo: String,
     },
     // public user: string,
      public carteras:string
   ) { }
}
