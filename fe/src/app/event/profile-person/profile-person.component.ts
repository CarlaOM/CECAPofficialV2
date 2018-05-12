import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';
import { Person } from '../../modelo/person';
import { DescOcupation } from '../../modelo/descOcupation';
import { Inscription } from '../../modelo/inscription';
import { Registro } from '../../modelo/registro';

@Component({
  selector: 'app-profile-person',
  templateUrl: './profile-person.component.html',
  styleUrls: ['./profile-person.component.css'],
  providers: [ PeticionesService]
})
export class ProfilePersonComponent implements OnInit {
  public person;
  public personId;
  public date;
  public carteras;
  public carteraReturned;
  public registro: Registro;
  public inscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { this.date = new Date(); }

  ngOnInit() {
    this._peticionesService.getCarteras().subscribe(response=>{
      this.carteras=response;
      console.log(this.carteras);
    });
    this.queryPersonId();
    this.findPerson();
  }
  queryPersonId(){
    this.route.params.subscribe(params => {
    this.personId=params.id;
     });
  }
  findPerson(){
    console.log(this.personId)
    this._peticionesService.getPerson(this.personId).subscribe(
      result => {
         this.person = result;
         console.log(result)
         this.findCartera(this.personId);
      },
      error => {
         console.log(<any>error);
      });
  }
  findCartera(personId){
    this._peticionesService.getCartera(this.person.carteras).subscribe(
    result =>{
      this.carteraReturned=result;
      //console.log(this.carteraReturned)
    },
    error =>{
      console.log(<any>error);
    });
  }
  fillModulars(){}
  fillFinalWork(){}
  fillRequirements(){}
}
