import { Component, OnInit } from '@angular/core';
import {PeticionesService } from '../../services/peticiones.service';
import {Cartera} from '../../modelo/cartera';
import { Identity } from "../../services/global";
// import {User} from '../../modelo/user';
import { Offices } from "../../modelo/offices";
import { facilitador } from "../../modelo/facilitador";
@Component({
  selector: 'app-add-facilitador',
  templateUrl: './add-facilitador.component.html',
  styleUrls: ['./add-facilitador.component.css'],
  providers:[PeticionesService]
})
export class AddFacilitadorComponent implements OnInit {
  public facilitadorName;
  public facilitadorlastname;
  public facilitadorcell;
  public facilitadorjob;
  public facilitadoroffices;
  public sucursales;
  public facilitador;
  public facilitadorNuevo;
  constructor(private _peticionesService:PeticionesService) { }


  submitted = false;
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  model = [, '','', ,"",'', ''];
  onSubmit() { this.submitted = true;
    this.facilitador = new facilitador(this.facilitadorName, this.facilitadorjob);
    this._peticionesService.addFacilitador(this.facilitador).subscribe(response=>{
      this.facilitadorNuevo=response;
      console.log(this.facilitadorNuevo);
      // this.MessageEvent.emit();
    })
  }
  ngOnInit() {
    this._peticionesService.getSucursales().subscribe(response=>{
      this.sucursales=response;
      console.log(this.sucursales)
    });
  }

}
