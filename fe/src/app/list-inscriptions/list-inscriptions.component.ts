import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-list-inscriptions',
  templateUrl: './list-inscriptions.component.html',
  styleUrls: ['./list-inscriptions.component.css'],
  providers: [PeticionesService]
})
export class ListInscriptionsComponent implements OnInit {
  public eventId;
  public event;
  public eventPro;
  public programa;
  // public programId = this.eventPro.programs;
  public inscriptions;
  public states: Array<any> = [];
  public modulos;
  //  Array<any> = ['mod','mod','mod'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this.findEventId();
    // this.findEventPro();
    // this.findPrograma();
    this.findModulos();
    this.query();

  }
  findEventId() {
    this.route.params.subscribe(params => {
       this.eventId = params.id;
       console.log(this.eventId)
    });
  }
  findEventPro(){
    this._peticionesService.getEvent(this.eventId).subscribe(result => {
      this.eventPro = result;
      console.log(this.eventPro);
    },
    error => {
      console.log(<any>error);
    });
  }
  // findPrograma(){
  //   this._peticionesService.getProgram(this.programId).subscribe(result=>{
  //     this.programa = result;
  //   },
  //   error=>{
  //     console.log(<any>error);
  //   });
  //   }
  findModulos(){
    this.route.params.subscribe(params => {
      this.eventId = params.id;
      // console.log(this.eventId)
   });
  this._peticionesService.getEventModuls(this.eventId).subscribe(//consulta para obt todo modulos
    result => {
        this.modulos = result;
        console.log(this.modulos);
    },
    error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
    });
  }
  
  query(){
    this._peticionesService.getEventInscriptions(this.eventId).subscribe(
       result => {
          this.event = result;
          // this.queryModules();

          console.log(this.event);
          this.inscriptions = this.event.inscriptions;

          //prueba total
          // var total = this.event.total;
          //console.log(this.inscriptions);
          this.todos();
          // console.log(total);
       },
       error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
       });
  }
  todos() {
    for (let i = 0; i <= this.states.length; i++) {
      this.states.pop(); i = 0;
    }
    for (let i of this.inscriptions) {
      this.states.push(i);
    }
  }
}
