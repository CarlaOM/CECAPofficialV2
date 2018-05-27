import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-accounts-modulars',
  templateUrl: './accounts-modulars.component.html',
  styleUrls: ['./accounts-modulars.component.css'],
  providers: [PeticionesService]
})
export class AccountsModularsComponent implements OnInit {
  public eventId;
  public event;
  public modules;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this.queryModulos();
  }
  queryModulos(){
    this.route.params.subscribe(params => {
        this.eventId = params.id;
        // console.log(this.eventId)
    });
    this._peticionesService.getEventModuls(this.eventId).subscribe(
      result => {
        this.modules = result;
        console.log(this.modules);

        this.queryEvent();
        },
        error => {
          console.log(<any>error);
        });
  }
  queryEvent() {
    this._peticionesService.getEvent(this.eventId).subscribe(
       result => {
          this.event = result;
          // console.log(this.event);
       },
       error => {
          console.log(<any>error);
       });
  }
  filterModular(modular_id){
    console.log(modular_id);
 }
}
