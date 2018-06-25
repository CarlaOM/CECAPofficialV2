import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../../services/persona.service';
import { PeticionesService} from '../../services/peticiones.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from "./filter.pipe";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers:[PersonaService,PeticionesService]

})
export class PersonaComponent implements OnInit {
  public listado_personas;
  public busqueda;
   public name: string;
   public searchText: string = "";
  public color='rojo';
  public page;
  public total;
  public totalPag;
  public mostrar = [];
  constructor(
     private router: Router,
     private route: ActivatedRoute,
     private _personaService: PersonaService,
     private _peticionesService: PeticionesService
  ) {}

  ngOnInit() {
    this.query();    
  }
  query() {
    
    this._peticionesService.getPersons().subscribe(
       result => {
          this.listado_personas = result;
          console.log(this.listado_personas);
          this.mostrarPer();
       },
       error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
       }
    );
 }
 dis(){
    this.page = this.page-1;
    var inicio = (8*(this.page-1));
    var final = (8*(this.page-1))+8;
    this.mostrar = [];
    for(var a = inicio  ; a < final ; a++ ){
      this.mostrar.push(this.listado_personas[a]);
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
        this.mostrar.push(this.listado_personas[a]);
    }
  }
  mostrarPer(){
    this.page = 1;
    this.total = this.listado_personas.length;
    this.totalPag = Math.ceil(this.total/8);
    console.log(this.totalPag)
    if(this.totalPag > 1){
      for(var a = 0 ; a < 8 ; a++){
      this.mostrar.push(this.listado_personas[a]) ;}
    } else{
      this.mostrar = this.listado_personas;
    }
    
  }
  edit(_id) {
    this.router.navigate(['home/persons/edit', _id]);
  }
  viewProfile(_id) {
    this.router.navigate(['home/profilePerson', _id]);
  }
  asistence(_id){
    this.router.navigate(['home/persons/asistencia', _id]);
  }
  // viewFinalWork(_id){
  //   this.router.navigate(['home/finalWork', _id]);
  // }
  // butonv(){
  //  if(this.color == 'rojo') this.color='verde'
  //  else{this.color = 'rojo'}
  // }
  butonv(_id){
    if(this.color == 'rojo') {
      this.router.navigate(['home/persons/asistencia', _id]);
      this.color='verde'
    }
    else{this.color = 'rojo'}
   }
  
  clearFilter() {
    this.searchText = "";
  }
  
}

