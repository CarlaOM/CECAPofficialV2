import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';
import { Identity, } from "../../services/global";
import { Ejecutivo } from "../../modelo/Ejecutivo";

@Component({
  selector: 'app-add-ejecutivo',
  templateUrl: './add-ejecutivo.component.html',
  styleUrls: ['./add-ejecutivo.component.css'],
  providers: [PeticionesService]
})
export class AddEjecutivoComponent implements OnInit {
  public carteras;
  public cartera = '';
  public sucursales;
  public carteraSeleccionada;
  public carteraObject;
  public rolid;
  public newUser;
  public roles;

  constructor(
    private _peticionesService: PeticionesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  /////////////////////////////////////////////////


  model = new Ejecutivo(Identity._id, "", "", "", true, undefined, "", "", "", "");
  // model=new Ejecutivo();
  get diagnostic() { return JSON.stringify(this.model); }
  /////////////////////////////////////////////////
  submitted = false;


  ngOnInit() {
    this._peticionesService.getCarterasLibres().subscribe(response => {
      this.carteras = response;
      // console.log(this.carteras);
    });
    this._peticionesService.getSucursales().subscribe(response => {
      this.sucursales = response;
      // console.log(this.sucursales)
    });
    this._peticionesService.getRoles().subscribe(response => {
      this.roles = response;
      // console.log(this.roles);
    });


  }
  onSubmit() {
    this.submitted = true;
    this._peticionesService.addUser(this.model).subscribe(response => {
      this.newUser = response;
      this.findCartera();
    }, error => {
      var errorMessage = <any>error;
      console.log(errorMessage);
    })
  }

  select() {
    this.carteraSeleccionada = this.model.cartera;
  }
  findCartera() {
    var i = 0;
    while (i < this.carteras.length) {
      if (this.carteras[i]._id == this.carteraSeleccionada) {
        this.carteraObject = this.carteras[i];
        this.asignarCartera();
      } else console.log('no encontro')
      i++;
    }
  }
  asignarCartera() {
    this.carteraObject.user = this.newUser._id;
    this.carteraObject.active = true;
    this._peticionesService.updateCarteraEjec(this.carteraObject).subscribe(
      result => {
        var res = result;
        this.router.navigate(['/home/ejecutivo/']);
      }, error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    )
  }
  cancel() {
    this.router.navigate(['home/ejecutivo']);
  }

}

