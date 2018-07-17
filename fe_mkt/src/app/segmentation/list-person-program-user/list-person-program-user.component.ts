import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Pipe, PipeTransform } from '@angular/core';
import { Identity } from '../../services/global';

@Component({
  selector: 'app-list-person-program-user',
  templateUrl: './list-person-program-user.component.html',
  styleUrls: ['./list-person-program-user.component.css'],
  providers: [PersonaService, PeticionesService]

})
export class ListPersonProgramUserComponent implements OnInit {

  public listado_personas = [];
  public listado_personasConfirmadas;
  public listado_personasInteresadas;
  public listado_personasProximoEvento;
  public listadoConFiltro = [];
  public intereses = [];
  public programId;
  public interesState;
  public personasInteresadasParaLaConsulta = {} as UserIdProgramId;
  public personasConfirmadasParaLaConsulta = {} as UserIdProgramId;
  public personasProximoeventoParaLaConsulta = {} as UserIdProgramId;


  public group = '';
  public first = '';
  public second = '';
  public last = '';
  public cell = '';
  public contacts = [];
  public whatsGroupName;
  public numbers = [];

  constructor(
    private route: ActivatedRoute,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.programId = params.id;
      ///////por si se quiere en distintos botones
      // this.programId=params.id.split('-')[0];
      // this.interesState=params.id.split('-')[1];
      ///////////////////

      ////////////
      //  0 interesados
      //  1 en duda
      //  2 confirmados
      //  3 isncritos
      //  4 enlinea
      //  5 proximo evento 
      //  6 sin interes
      //////// 

      /////confirmadas////
      this.personasConfirmadasParaLaConsulta.programId = this.programId;
      this.personasConfirmadasParaLaConsulta.state = 2;
      this.personasConfirmadasParaLaConsulta.userId = Identity._id;

      ////interesadas////
      this.personasInteresadasParaLaConsulta.programId = this.programId;
      this.personasInteresadasParaLaConsulta.state = 0;
      this.personasInteresadasParaLaConsulta.userId = Identity._id;

      /////proximo evento///
      this.personasProximoeventoParaLaConsulta.programId = this.programId;
      this.personasProximoeventoParaLaConsulta.state = 5;
      this.personasProximoeventoParaLaConsulta.userId = Identity._id;

    })

    this.findPersonOfProgramByUser();
  }
  findPersonOfProgramByUser() {
    this._peticionesService.getPersonsOfProgramByUser(this.personasConfirmadasParaLaConsulta).subscribe(
      resultConfirmados => {
        this.listado_personasConfirmadas = resultConfirmados;
        for (let personasConfirmadas of this.listado_personasConfirmadas) {
          this.listado_personas.push(personasConfirmadas);
        }
        this._peticionesService.getPersonsOfProgramByUser(this.personasInteresadasParaLaConsulta).subscribe(
          resultInteresadas => {
            this.listado_personasInteresadas = resultInteresadas;
            for (let personasInteresadas of this.listado_personasInteresadas) {
              this.listado_personas.push(personasInteresadas);
            }
            this._peticionesService.getPersonsOfProgramByUser(this.personasProximoeventoParaLaConsulta).subscribe(
              resultProximoEvento => {
                this.listado_personasProximoEvento = resultProximoEvento;
                for (let personasProximoEvento of this.listado_personasProximoEvento) {
                  this.listado_personas.push(personasProximoEvento);
                }
              }
            )
          }
        );
      }, error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }
  //  personasInteresadas(){
  //    this.listadoConFiltro=[];
  //    for(let persona of this.listado_personas){
  //     this.intereses=persona.interes;
  //     console.log(this.intereses)
  //     for(let int of this.intereses){
  //       if(int.state==0){
  //         this.listadoConFiltro.push(persona);
  //       }
  //     }
  //    }
  //  }

  exportarExcel() {
    this.contacts = [];
    this.numbers = [];
    this.group = (<HTMLInputElement>document.getElementById('grupo')).value;
    this.first = (<HTMLInputElement>document.getElementById('PrimerNombre')).value;
    this.second = (<HTMLInputElement>document.getElementById('SegundoNombre')).value;
    this.last = (<HTMLInputElement>document.getElementById('Apellido')).value;
    this.cell = (<HTMLInputElement>document.getElementById('Celular')).value;
    // this.whatsGroupName = (<HTMLInputElement>document.getElementById('name')).value;
    nPersons(0, this.listado_personas, this.contacts, "");
  }
}
function nPersons(i, listado_personas, contacts, name) {
  if (i == listado_personas.length) return;
  let personToExport = {} as PersonToExport;
  personToExport.group = name;
  personToExport.first = listado_personas[i].first_name;
  personToExport.second = '';
  personToExport.last = listado_personas[i].last_name;
  personToExport.cell = listado_personas[i].cellphone;
  contacts.push(personToExport);
  if (contacts.length == listado_personas.length) {
    setTimeout(() => {
      tableToExcel('Contacts', 'Numeros Cecap');
    }, 0);
  }
  return nPersons(i + 1, listado_personas, contacts, name);
}
function tableToExcel(table, name) {
  var uri = 'data:application/vnd.ms-excel;base64,'
  var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
  var base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
  var format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
  if (!table.nodeType) table = document.getElementById(table)
  var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
  window.location.href = uri + base64(format(template, ctx))
}
export interface PersonToExport {
  group: string,
  first: string,
  second: string,
  last: string,
  cell: number,
}

export interface UserIdProgramId {
  userId: string,
  programId: string,
  state: number,
}