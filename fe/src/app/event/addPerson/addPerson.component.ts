import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';
import { Identity } from '../../services/global';
import { Person } from '../../modelo/person';
import { Inscription } from '../../modelo/inscription';
@Component({
    selector: 'app-addPerson',
    templateUrl: './addPerson.component.html',
    styleUrls: ['./addPerson.component.css'],
    providers: [PeticionesService]
})
export class AddPersonComponent implements OnInit {

    @ViewChild('firstName') firstNameRef: ElementRef;
    @ViewChild('lastName') lastNameRef: ElementRef;
    @ViewChild('ci') ciRef: ElementRef;
    @ViewChild('cellphone') cellphoneRef: ElementRef;
    @ViewChild('email') emailRef: ElementRef;
    //    @ViewChild('ocupation') ocupationRef: ElementRef;
    //    @ViewChild('program') programRef: ElementRef;
    //    @ViewChild('interes') interesRef: ElementRef;
    @ViewChild('description') descRef: ElementRef;
    @ViewChild("close", { read: ElementRef }) close: ElementRef;
    @Output() messageEvent = new EventEmitter();
    
    public person;//coleccion
    public eventos;
    public programs;

    public interes;//coleccion de interes
    public profecion
    public inscription;
    public progSeleccionado;
    public idProgram;
    public intSeleccionado;// interes de la persona seleccionada
    public interesNum;
    public ocupSeleccionado:String;
    public identy;
    public cartera;
    public modelEvent;
    constructor(
        private _peticionesService: PeticionesService
    ) {
        this.person = new Person('', '', null, null, null,'',0, null, '');
       // this.inscription = new Inscription('', null, null,null,'', '');
        //this.identy=Identity._id;

    }
    onSubmit() { 
    }
    ngOnInit() {
        console.log(Identity._id);
        //this.queryPrograms();
        this.queryEvents();
        this.queryCartera();
        this.interes = ['inscrito', 'confirmado', 'interesado', 'En duda', 'No participa', 'Proximo'];
    }
    guardar(){
        console.log(this.person);
        this._peticionesService.addPerson(this.person).subscribe(
          result => {
            var esperado = result;
           // console.log(esperado);
           // this.router.navigate(['home/event', this.eventId]);
            alert('Se Registro a la persona de manera correcta');
          },
          error => {
            var errorMessage = <any>error;
            console.log(errorMessage);
            alert('Error al registrar persona verifique los datos');
          }
        );
    }
    captProgram() {
        console.log(this.modelEvent);
        // this.queryIdProgram();
        // console.log(this.idProgram+ 'hola max');
    }
    captInteres() {
        if (this.intSeleccionado == 'inscrito') {
            this.interesNum = 0
        } else {
            if (this.intSeleccionado == 'confirmado') {
                this.interesNum = 1
            } else {
                if (this.intSeleccionado == 'interesado') {
                    this.interesNum = 2
                } else {
                    if (this.intSeleccionado == 'En duda') {
                        this.interesNum = 3
                    } else {
                        if (this.intSeleccionado == 'No participa') {
                            this.interesNum = 4
                        } else {
                            if (this.intSeleccionado == 'Proximo') {
                                this.interesNum = 5
                            }
                        }
                    }
                }
            }
        }
        console.log(this.intSeleccionado);
        console.log(this.interesNum);
    }
    captOcupation() { console.log(this.ocupSeleccionado); }

    // save() {
    //     const firstName = this.firstNameRef.nativeElement.value;
    //     let lastName = this.lastNameRef.nativeElement.value;
    //     const ci = this.ciRef.nativeElement.value;
    //     //const user = Identity._id;
    //     const cellphone = this.cellphoneRef.nativeElement.value;
    //     const email = this.emailRef.nativeElement.value;
    //     // let cartera = '';
    //     // if (this.birthdayRef.nativeElement.value == '') birthday = new Date(1, 2, 3);
    //     //else birthday = this.birthdayRef.nativeElement.value;
    //     const newPerson = new Person(firstName, lastName, ci, cellphone, email, this.ocupSeleccionado, this.cartera._id);
    //     console.log(newPerson);
    //     if ((this.firstNameRef.nativeElement.value == '') ||
    //         (this.lastNameRef.nativeElement.value == '') ||
    //         (this.ciRef.nativeElement.value == '') ||
    //         (this.cellphoneRef.nativeElement.value == '') ||
    //         (this.emailRef.nativeElement.value == '')
    //     ) {
    //         window.alert(
    //             "Asegurese que todos los campos esten llenos"
    //         )
    //     } else {
    //         this._peticionesService.addPerson(newPerson).subscribe(response => {
    //             console.log(response);
    //             this.messageEvent.emit();
    //             this.close.nativeElement.click();
    //         },
    //             error => {
    //                 var errorMessage = <any>error;
    //                 console.log(errorMessage);
    //                 alert('La Cedula de Identidad o Telefono de la Persona ya existe');
    //             });
    //     }
    // }
    queryCartera() {
        //console.log(Identity._id)
        this._peticionesService.getCarteraFromUserId(Identity._id).subscribe(
            result => {
                this.cartera = result;
                console.log('aqui la cartera del usuario::::');
                console.log(this.cartera);
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }
    queryEvents(){
        this._peticionesService.getEvents().subscribe(
            result => {
                this.eventos = result;
                console.log(this.eventos);
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            });
    }
}
