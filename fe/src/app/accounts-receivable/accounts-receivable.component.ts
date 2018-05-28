import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-accounts-receivable',
  templateUrl: './accounts-receivable.component.html',
  styleUrls: ['./accounts-receivable.component.css'],
  providers: [PeticionesService]
})
export class AccountsReceivableComponent implements OnInit {
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
      //  console.log(this.eventId)
    });
  }
  query() {
    this._peticionesService.getEventInscriptions(this.eventId).subscribe(
       result => {
          this.event = result;
          // this.queryModules();

          console.log(this.event);
          this.inscriptions = this.event.inscriptions;
          console.log(this.inscriptions)          
          //prueba total
          // var total = this.event.total;
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
  cancelar(){
    window.history.back();
  }
}