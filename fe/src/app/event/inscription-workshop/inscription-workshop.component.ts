import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';
import { Identity } from '../../services/global';
import { Person } from '../../modelo/person';
import { Inscription } from '../../modelo/inscription';
import { Registro } from '../../modelo/registro';
import { DescOcupation } from '../../modelo/descOcupation';
import { Cashflowusers } from "../../modelo/cashflowusers";
import { Lists } from '../../modelo/lists';



@Component({
  selector: 'app-inscription-workshop',
  templateUrl: './inscription-workshop.component.html',
  styleUrls: ['./inscription-workshop.component.css'],
  providers: [PeticionesService]

})
export class InscriptionWorkshopComponent implements OnInit {
  public person: Person;
  public personRecived;
  public eventId;
  public cashFLowUser;
  public modulos;
  public montoPago;
  public recibo;
  public modulsObject;

  public ingresoPorInscripcion;


  constructor(
    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.person = new Person('', '', null, null, null, '', '', null, '');
    this.ingresoPorInscripcion = new Cashflowusers(new Date(), new Date(), 0, 0, 0, "", "", "", "", "", "");
  }

  ngOnInit() {
    this.currentCashFlow();
    this.queryEventId();
    this.queryModulars();
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      // console.log(this.person.ci > 999999);
      if (this.person.ci > 999999) {
        this._peticionesService.getCi(this.person.ci).subscribe(result => {
          // console.log(result);
          this.personRecived = result;
          this.person.first_name = this.personRecived.first_name;
          this.person.last_name = this.personRecived.last_name;

        })
      }

    }
  }
  queryEventId() {
    this.route.params.subscribe(params => {
      this.eventId = params.id;
      // console.log(this.eventId)
    });
  }

  currentCashFlow() {
    this._peticionesService.getCashFlowUserByUser(Identity._id).subscribe(response => {

      this.cashFLowUser = response;
    })
  }

  queryModulars() {
    this._peticionesService.getModulars(this.eventId).subscribe(
      result => {
        this.modulos = result;
        this.modulos.sort((left, right) => {
          if (left.name < right.name) return -1;
          if (left.name > right.name) return 1;
          return 0;
        });
        for (let i of this.modulos) {
          if (null == i.modules) {
            this.modulos.splice(i, 1);
            //this.modulos.pop(i);
          }
        }
        // console.log('aqui los modulos Objedts');
        //  console.log(this.modulos);
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }

  guardar() {

    let arrayIds = this.modulsObject.split('-');
    let modularsId = arrayIds[0];
    let moduleId = arrayIds[1];

    let nuevoTaller = {} as Taller;
    nuevoTaller.events = this.eventId;
    nuevoTaller.modulars = modularsId;
    nuevoTaller.modules = moduleId;
    nuevoTaller.receipt = this.recibo;
    nuevoTaller.amount = this.montoPago;
    nuevoTaller.persona = this.person;

    this._peticionesService.addNewTaller(nuevoTaller).subscribe(resp => {

      let respuesta = resp;

      /////////////   Ingreso por inscripcin a caja Chica////////////////

      this.ingresoPorInscripcion.receipt = this.recibo
      this.ingresoPorInscripcion.title = 'Inscripcion Taller';
      this.ingresoPorInscripcion.description = this.person.first_name + ' ' + this.person.last_name;
      this.ingresoPorInscripcion.detail_amount = this.montoPago
      this.ingresoPorInscripcion.user = Identity._id;
      this.ingresoPorInscripcion.events = this.eventId;
      this.ingresoPorInscripcion.modulars = arrayIds[0];//
      ////////////////////////////////////

      this._peticionesService.addCashFlowUserIngreso(this.ingresoPorInscripcion).subscribe(
        result => {
          var returned = result;

          this.router.navigate(['home/events']);
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
          alert('Error al Crear cashflowuseringreso');
        }
      );

      ///////////////////////////////////////////////////////////////////




    })


  }
  cancel() {
    // this.router.navigate(['home/events']);
    window.history.back();
  }
}

export interface Taller {

  events: string,
  modulars: string,
  modules: string,
  amount: Number,
  receipt: string,
  persona: {},

}
