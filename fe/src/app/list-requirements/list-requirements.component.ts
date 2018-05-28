import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-list-requirements',
  templateUrl: './list-requirements.component.html',
  styleUrls: ['./list-requirements.component.css'],
  providers: [PeticionesService]
})
export class ListRequirementsComponent implements OnInit {
  public eventId;
  public event;
  public inscriptions;
  public states: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this.findEventId();
    this.query();
  }
  findEventId() {
    this.route.params.subscribe(params => {
       this.eventId = params.id;
       console.log(this.eventId)
    });
  }
  query() {
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
  catchRequeriment(){
    
  }
  cancelar(){

    window.history.back();
  }
}
