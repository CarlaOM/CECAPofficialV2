import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
//import { UserService } from '../services/user.service';
import { Identity } from '../services/global';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css'],
    providers: [PeticionesService]

})
export class EventsComponent implements OnInit {

    public lista_eventos = [];
    public events;
    public role;
    public program;
    ////////////////////////////////////////////////////
    public page;
    public total;
    public totalPag;
    public mostrar = [];
    ////////////////////////////////////////////////////
    constructor(
        private router: Router,
        private _peticionesService: PeticionesService
    ) { }
    ngOnInit() {
        this.queryRol();
        //    this.queryEventsOfSucursal();
    }
    dis(){
        this.page = this.page-1;
        var inicio = (8*(this.page-1));
        var final = (8*(this.page-1))+8;
        this.mostrar = [];
        for(var a = inicio  ; a < final ; a++ ){
          this.mostrar.push(this.lista_eventos[a]);
      }
      }
      aum(){
        this.page = this.page+1;
        // console.log(this.page)
        var inicio = (8*(this.page-1));
        // console.log(inicio)
        var final = (8*(this.page-1))+8;
        if(final > this.total){
          final = this.total;
        }
        // console.log(final)
        this.mostrar = [];
        for(var a = inicio  ; a < final ; a++ ){
            this.mostrar.push(this.lista_eventos[a]);
        }
      }
      mostrarEvent(){
        this.page = 1;
        this.total = this.lista_eventos.length;
        if(this.total == 0){
          this.totalPag = 1;
        } else{
        this.totalPag = Math.ceil(this.total/8);
        }
        this.mostrar = []
        // console.log(this.totalPag)
        if(this.totalPag > 1){
          for(var a = 0 ; a < 8 ; a++){
          this.mostrar.push(this.lista_eventos[a]) ;}
        } else{
          this.mostrar = this.lista_eventos;
        }
        
      }
    addPerson() {
        this.router.navigate(['home/event/persons/add']);
    }
    send(_id: string) {
        this.router.navigate(['home/event', _id]);
    }

    personsOfEvents(_id: string) {
        this.router.navigate(['home/events/persons', _id]);
    }

    queryEventsOfSucursal() {
        this._peticionesService.getEventsOfSucursal(Identity._id).subscribe(
            result => {
                this.events = result;
                //    console.log(this.events)
                this.events.map(event => {
                    var sum = 0;
                    event.inscriptions.forEach(e => {
                        if (e.state == 1) sum++;
                    });
                    event.cupos = event.total - sum;
                });


                for (let e of this.events) {
                    let eventoItem = {} as EventoItem;

                    eventoItem.name = e.name;
                    eventoItem.date_start = e.date_start;
                    eventoItem.cupos = e.total;
                    eventoItem._id = e._id;
                    eventoItem.programaId = e.programs;
                    eventoItem.active = e.active;
                    this._peticionesService.getProgram(e.programs).subscribe(result => {
                        this.program = result;
                        eventoItem.programa = this.program.name;
                        this.lista_eventos.push(eventoItem);
                        this.mostrarEvent();

                    });

                }


            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        )
    }

    queryEventsAdmin() {
        this._peticionesService.getAllEventsActive(Identity._id).subscribe(
            result => {
                this.events = result;
                //    console.log(this.events)
                this.events.map(event => {
                    var sum = 0;
                    event.inscriptions.forEach(e => {
                        if (e.state == 1) sum++;
                    });
                    event.cupos = event.total - sum;
                });


                for (let e of this.events) {
                    let eventoItem = {} as EventoItem;

                    eventoItem.name = e.name;
                    eventoItem.date_start = e.date_start;
                    eventoItem.cupos = e.total;
                    eventoItem._id = e._id;
                    eventoItem.programaId = e.programs;
                    eventoItem.active = e.active;
                    this._peticionesService.getProgram(e.programs).subscribe(result => {
                        this.program = result;
                        eventoItem.programa = this.program.name;
                        this.lista_eventos.push(eventoItem);
                        this.mostrarEvent();

                    });

                }


            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }

    queryRol() {
        //console.log(Identity.rol)
        this._peticionesService.getRole(Identity.rol).subscribe(
            result => {
                this.role = result;

                if (this.role.name == 'Admin') {
                    this.queryEventsAdmin();
                } else {
                    this.queryEventsOfSucursal();
                }

            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }
    cerrarEvento(eventId: string) {

        this._peticionesService.cerrarEvento(eventId).subscribe(response => {

            let eventocerrado = response;
            // this.router.navigate(['home/events']);
            //   window.history.back();
            this.events = null;
            this.lista_eventos = [];
            this.queryRol();
        })
    }

}


export interface EventoItem {
    _id: string,
    name: string,
    date_start: Date,
    cupos: number,
    programa: string,
    programaId: string,
    active: boolean,
}

