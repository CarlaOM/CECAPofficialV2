import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';
import { Identity } from "../services/global";
//import { Identity } from '../services/global';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css'],
  providers: [ PeticionesService]
})
export class ProgramaComponent implements OnInit {
    public programs;
    public role;
    /////////////////////////////////////////
    public page;
    public total;
    public totalPag;
    public mostrar = [];
    //////////////////////////////////////////
    public modules;
    public modulesDisp = [];

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this.queryRol();
    this._peticionesService.getPrograms().subscribe(
      result => {
         this.programs = result;
         console.log(result)
         
         this.messageForModules()
         this.mostrarProg()
      },
      error => {
         console.log(<any>error);
      });
  }
  messageForModules(){
    for(let i=0; i<this.programs.length; i++){
      var idProgram = this.programs[i]._id

      this._peticionesService.getModulos(idProgram).subscribe(
        result => {
          this.modules = result;
          // console.log(result)  
           
          // this.modulesDisp[i] = this.modules.length;
          this.programs[i].cantModules = this.modules.length;
          // console.log(this.programs)
        },
        error => {
           console.log(<any>error);
        });
    }
  }
  dis(){
    this.page = this.page-1;
    var inicio = (8*(this.page-1));
    var final = (8*(this.page-1))+8;
    this.mostrar = [];
    for(var a = inicio  ; a < final ; a++ ){
      this.mostrar.push(this.programs[a]);
  }
  }
  aum(){
    this.page = this.page+1;
    console.log(this.page)
    var inicio = (8*(this.page-1));
    console.log(inicio)
    var final = (8*(this.page-1))+8;
    if(final > this.total){
      final = this.total;
    }
    console.log(final)
    this.mostrar = [];
    for(var a = inicio  ; a < final ; a++ ){
        this.mostrar.push(this.programs[a]);
    }
  }
  mostrarProg(){
    this.page = 1;
    this.total = this.programs.length;
    this.totalPag = Math.ceil(this.total/8);
    this.mostrar = []
    // console.log(this.totalPag)
    if(this.totalPag > 1){
      for(var a = 0 ; a < 8 ; a++){
      this.mostrar.push(this.programs[a]) ;}
      console.log("entro")
    } else{
      this.mostrar = this.programs;
    }
    // console.log(this.mostrar)
  }
  volver(){
    this.router.navigate(['home/events']);    
  }
  send(_id:string) {
    this.router.navigate(['home/modulos', _id]);
  }
  editProgram(_id:string){
    this.router.navigate(['/home/program/edit', _id]);
  }
  addProgram(){
    this.router.navigate(['/home/program/add']);
  }

  queryRol(){
        //console.log(Identity.rol)
      this._peticionesService.getRole(Identity.rol).subscribe(
          result => {
            this.role = result;
          },
          error=>{
            var errorMessage = <any>error;
            console.log(errorMessage);
          }
      );
    }
}