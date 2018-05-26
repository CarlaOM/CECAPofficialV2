import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';
import { Identity } from '../services/global';

@Component({
  selector: 'app-accounts-modulars',
  templateUrl: './accounts-modulars.component.html',
  styleUrls: ['./accounts-modulars.component.css'],
  providers: [PeticionesService]
})
export class AccountsModularsComponent implements OnInit {
  public eventId;
  public modulos;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    console.log(Identity._id); 
      this.queryEventId();
      this.queryModulos();
  }
  queryEventId() {
    this.route.params.subscribe(params => {
       this.eventId = params.id;
       // console.log(this.eventId)
    });
  }
  queryModulos(){
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
}
