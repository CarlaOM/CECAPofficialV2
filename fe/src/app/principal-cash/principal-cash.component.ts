import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationEnd } from "@angular/router";
import {PeticionesService } from './../services/peticiones.service';
import { Identity, } from "./../services/global";


@Component({
  selector: 'app-principal-cash',
  templateUrl: './principal-cash.component.html',
  styleUrls: ['./principal-cash.component.css'],
  providers:[PeticionesService]

})
export class PrincipalCashComponent implements OnInit {
  public principalCash;
  public details;

  constructor(

    private _peticionesService:PeticionesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._peticionesService.getPrincipalCash(Identity).subscribe(res=>{
      this.principalCash=res;
      this.details=this.principalCash.details;
    })    

  }

}
