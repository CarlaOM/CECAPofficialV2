export class Inscription {
   constructor(
      public name: string,
      //public description: string,
      //public state: string,
      public total_price: Number,
      public module_price: Number,
      public canceled_price: Number,
      public persons: string,
      public users:string
   ) { }
}