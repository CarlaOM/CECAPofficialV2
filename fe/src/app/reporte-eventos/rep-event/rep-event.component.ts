import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';
// import { Person } from '../../modelo/person';
import { Identity, Roles } from '../../services/global';
// import { forEach } from '@angular/router/src/utils/collection';
// import { StateKey } from '@angular/platform-browser';

@Component({
      selector: 'app-rep-event',
      templateUrl: './rep-event.component.html',
      styleUrls: ['./rep-event.component.css'],
      providers: [PeticionesService]
})
export class RepEventComponent implements OnInit, AfterViewInit {
      public lista_personasPorModulo = [];

      public lista_modulos;
      public event;
      public modules;
      public inscriptions;

      public modularForAssist;
      public personId;
      public role;
      public activeEvent;
      /////////////////para jlistar por modulos////
      public moduleId;
      public eventId;
      public moduleName;

      public certificateData;
      //////////////////////////////////////////////
      public page;
      public total;
      public totalPag;
      public mostrar = [];
      ///////////////////////////////////////
      constructor(
            private route: ActivatedRoute,
            private router: Router,
            private _peticionesService: PeticionesService
      ) { }

      ngOnInit() {
            console.log('esta aca')
            this.route.params.subscribe(params => {
                  this.eventId = params.id;
                  //    console.log(this.eventId)
                  this.queryRol();

            });
            this.queryEventInscription();
      }
      queryEventInscription() {
            this._peticionesService.getEventInscriptions(this.eventId).subscribe(
                  result => {
                        this.event = result;
                        this.activeEvent = this.event.active;
                        this.queryModules();

                        // console.log(this.event);
                        this.inscriptions = this.event.inscriptions;
                        var total = this.event.total;
                        this.lista_personasPorModulo = this.inscriptions;
                        // console.log('Esta es la inscripción de la persona');
                        // console.log(this.lista_personasPorModulo); 
                        this.mostrarPer()
                  },
                  error => {
                        var errorMessage = <any>error;
                        console.log(errorMessage);
                  }
            );
      }

      queryModules() {
            this._peticionesService.getModulos(this.event.programs).subscribe(
                  result => {
                        this.modules = result;
                        this.modules.sort((left, right) => {
                              if (left.name < right.name) return -1;
                              if (left.name > right.name) return 1;
                              return 0;
                        });
                  }
            )
      }
      dis() {
            this.page = this.page - 1;
            var inicio = (8 * (this.page - 1));
            var final = (8 * (this.page - 1)) + 8;
            this.mostrar = [];
            for (var a = inicio; a < final; a++) {
                  this.mostrar.push(this.lista_personasPorModulo[a]);
            }
      }
      aum() {
            this.page = this.page + 1;
            // console.log(this.page)
            var inicio = (8 * (this.page - 1));
            // console.log(inicio)
            var final = (8 * (this.page - 1)) + 8;
            if (final > this.total) {
                  final = this.total;
            }
            // console.log(final)
            this.mostrar = [];
            for (var a = inicio; a < final; a++) {
                  this.mostrar.push(this.lista_personasPorModulo[a]);
            }
      }
      mostrarPer() {
            this.page = 1;
            this.total = this.lista_personasPorModulo.length;
            this.totalPag = Math.ceil(this.total / 8);
            this.mostrar = []
            // console.log(this.totalPag)
            if (this.totalPag > 1) {
                  for (var a = 0; a < 8; a++) {
                        this.mostrar.push(this.lista_personasPorModulo[a]);
                  }
                  //   console.log("entro")
            } else {
                  this.mostrar = this.lista_personasPorModulo;
            }
            // console.log(this.mostrar)
      }
      setListInscriptions(_id: string, nameModule: string) {

            this.lista_personasPorModulo = [];
            this.moduleId = _id;
            this.moduleName = nameModule;

            this.certificateData = this.eventId + '-' + this.moduleId;

            for (let i of this.inscriptions) {


                  let persona = {} as PersonItem;
                  persona.persons = i.persons;
                  persona.name = i.name;
                  persona.ci = i.ci;
                  persona.cellphone = i.cellphone;
                  persona.canceled_price = i.canceled_price;
                  persona.price_event = i.price_event;
                  let personEventModule = {} as PersonEventModule;
                  personEventModule.personId = i.persons
                  personEventModule.moduleId = this.moduleId;
                  personEventModule.eventId = this.eventId;
                  // console.log(personEventModule);
                  this._peticionesService.getAsistenciaOfPerson(personEventModule).subscribe(response => {

                        this.modularForAssist = response;
                        persona.assist = this.modularForAssist.assist;
                  })

                  this.lista_personasPorModulo.push(persona);
            }
            this.mostrarPer();
            // console.log(this.lista_personasPorModulo);
            // console.log(this.moduleId);



      }
      viewProfile(personId) {
            this.router.navigate(['home/profilePerson', personId]);
      }
      edit(personId) {
            this.router.navigate(['home/persons/edit', personId])
      }
      asistence(_id) {
            this.personId = _id;
            var idEvenPers = _id + '-' + this.eventId;
            this.router.navigate(['home/event/asistencia', idEvenPers]);
      }
      control(_id) {
            this.personId = _id;
            var idEvenPers = _id + '-' + this.eventId;
            this.router.navigate(['home/event/controPago/', idEvenPers]);
      }
      marcarAsistencia(idperson) {
            let personEventModule = {} as PersonEventModule;
            personEventModule.personId = idperson;
            personEventModule.moduleId = this.moduleId;
            personEventModule.eventId = this.eventId;

            this._peticionesService.marcarAsistencia(personEventModule).subscribe(response => {
                  this.setListInscriptions(this.moduleId, this.moduleName);

            });


      }
      cancelar() {
            //window.history.back();
            this.router.navigate(['home/events'])
      }
      cerrarEvento(eventId: string) {

            this._peticionesService.cerrarEvento(eventId).subscribe(response => {

                  let eventocerrado = response;
                  // this.router.navigate(['home/events']);
                  window.history.back();
            })
      }

      ngAfterViewInit() { }

      queryRol() {
            //console.log(Identity.rol)
            this._peticionesService.getRole(Identity.rol).subscribe(
                  result => {
                        this.role = result;



                  },
                  error => {
                        var errorMessage = <any>error;
                        console.log(errorMessage);
                  }
            );
      }


}
export interface PersonEventModule {

      personId: string,
      eventId: string,
      moduleId: string,
}
export interface PersonItem {

      persons: string,
      name: string,
      ci: number,
      cellphone: number,
      canceled_price: number,
      price_event: number,
      assist: boolean
}
