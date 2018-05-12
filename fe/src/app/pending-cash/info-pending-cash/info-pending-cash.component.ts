import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {PeticionesService } from '../../services/peticiones.service';
import { Identity, } from "../../services/global";




@Component({
  selector: 'app-info-pending-cash',
  templateUrl: './info-pending-cash.component.html',
  styleUrls: ['./info-pending-cash.component.css'],
  providers:[PeticionesService]
 
  
})
export class InfoPendingCashComponent implements OnInit {

  public pendingCashId;
  public cash;
  public detalles;
  public total;

  public btnInactiveConfirm;

  public confirmedCash;

  constructor(
    private _peticionesService:PeticionesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.pendingCashId = params.id;
     });

     this._peticionesService.getCashFlowUser(this.pendingCashId).subscribe(response=>{
      this.cash=response;
      this.detalles=this.cash.details;
      this.total=this.cash.amount;
      if(this.cash.state==1){

        this.btnInactiveConfirm=true;
      }

     })
  }
  goPendingCash(){

    this.router.navigate(['home/pendientes']);
  }

  confirmPendingCash(){

    this._peticionesService.confirmCashFlowUser(this.pendingCashId).subscribe(response=>{
      this.confirmedCash=response;
      console.log(this.confirmedCash);
      this.router.navigate(['home/pendientes']);
      this.router.navigate(['home/pendientes']);

      this.router.navigate(['home/pendientes']);

      this.router.navigate(['home/pendientes']);


    })
  }
}
