import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Identity } from '../../services/global';
//import { Angular5Csv } from 'angular5-csv/Angular5-csv';
@Component({
  selector: 'app-persons-of-events',
  templateUrl: './persons-of-events.component.html',
  styleUrls: ['./persons-of-events.component.css'],
  providers: [PersonaService, PeticionesService]
})
export class PersonsOfEventsComponent implements OnInit {
  public eventId;
  public event;
  public lista_personas = [];
  public lista_personasPorInteres = [];
  public listaInteres;
  public persona;
  public listaReturned;
  // public contacts = [];
  public rol;
  ////////////////////////////////////////////////////
  public page;
  public total;
  public totalPag;
  public mostrar = [];
  ////////////////////////////////////////////////////  
  // public listaToExport=[];
  public toExport;


  public group = '';
  public first = '';
  public second = '';
  public last = '';
  public cell = '';
  public contacts = [];
  public whatsGroupName;
  public numbers = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this.queryRol();
    this.route.params.subscribe(params => {
      this.eventId = params.id;
      this.loadPersonsByCartera();
    })
  }
  dis() {
    this.page = this.page - 1;
    var inicio = (5 * (this.page - 1));
    var final = (5 * (this.page - 1)) + 5;
    this.mostrar = [];
    for (var a = inicio; a < final; a++) {
      this.mostrar.push(this.lista_personasPorInteres[a]);
    }
  }
  aum() {
    this.page = this.page + 1;
    // console.log(this.page)
    var inicio = (5 * (this.page - 1));
    // console.log(inicio)
    var final = (5 * (this.page - 1)) + 5;
    if (final > this.total) {
      final = this.total;
    }
    // console.log(final)
    this.mostrar = [];
    for (var a = inicio; a < final; a++) {
      this.mostrar.push(this.lista_personasPorInteres[a]);
    }
  }
  mostrarPersonas() {
    this.page = 1;
    this.total = this.lista_personasPorInteres.length;
    if (this.total == 0) {
      this.totalPag = 1;
    } else {
      this.totalPag = Math.ceil(this.total / 5);
    }
    this.mostrar = []
    // console.log(this.totalPag)
    if (this.totalPag > 1) {
      for (var a = 0; a < 5; a++) {
        this.mostrar.push(this.lista_personasPorInteres[a]);
      }
    } else {
      this.mostrar = this.lista_personasPorInteres;
    }

  }
  loadPersonsByCartera() {
    this.lista_personasPorInteres = [];
    this._peticionesService.getEvent(this.eventId).subscribe(res => {
      this.event = res;
      let eventIdPersonId = {} as EventIdPersonId;
      eventIdPersonId.event = this.event;
      eventIdPersonId.identity = Identity;
      this._peticionesService.getPersonasInteresWithEventByCartera(eventIdPersonId).subscribe(res => {
        this.listaReturned = res;
        this._peticionesService.getUni().subscribe(res => {
          var universidades = res[0].university;
          var carreras = res[0].carrera;
          for (let i = 0; i < this.listaReturned.length; i++) {
            if (this.listaReturned[i].ocupation == 'estudiante') {
              for (let j = 0; j < universidades.length; j++) {
                if (this.listaReturned[i].descOcupation.universidad == universidades[j]._id) {
                  this.listaReturned[i].descOcupation.universidad = universidades[j].nombre;
                }
              }
              for (let j = 0; j < carreras.length; j++) {
                if (this.listaReturned[i].descOcupation.carrera == carreras[j]._id) {
                  this.listaReturned[i].descOcupation.carrera = carreras[j].nombre;
                }
              }
            }
          }
          this.lista_personasPorInteres = this.listaReturned;
          this.mostrarPersonas();
        })
      })
    })
  }

  loadPersons2() {
    this.lista_personasPorInteres = [];
    this._peticionesService.getEvent(this.eventId).subscribe(response => {
      this.event = response;
      this._peticionesService.getPersonasInteresWithEvent(this.event).subscribe(res => {
        this.listaReturned = res;
        this.lista_personasPorInteres = this.listaReturned;
      })
    })

  }

  loadPersonsInteres2(numInteres) {
    this.lista_personasPorInteres = [];
    let eventinteres = {} as EventInteres;
    eventinteres.event = this.event;
    eventinteres.interes = numInteres;
    this._peticionesService.getPersonFilterInteresWithEvent(eventinteres).subscribe(response => {
      this.listaReturned = response;
      this.lista_personasPorInteres = this.listaReturned;
      this.mostrarPersonas();

    })
  }
  loadPersonsInteresByCartera(numInteres) {
    this.lista_personasPorInteres = [];
    let eventinteres = {} as EventInteres;
    eventinteres.event = this.event;
    eventinteres.interes = numInteres;
    eventinteres.identity = Identity;
    this._peticionesService.getPersonFilterInteresWithEventByCartera(eventinteres).subscribe(response => {
      this.listaReturned = response;
      this.lista_personasPorInteres = this.listaReturned;
      this.mostrarPersonas();
    })
  }

  edit(_id: string) {
    var personIdEventId = _id + '-' + this.eventId;
    this.router.navigate(['home/events/persons/edit', personIdEventId]);

  }

  queryRol() {
    this._peticionesService.getCurrentRol(Identity).subscribe(res => {
      this.rol = res;
    })
  }


  exportarExcel() {
    this.contacts = [];
    this.numbers = [];
    this.group = (<HTMLInputElement>document.getElementById('grupo')).value;
    this.first = (<HTMLInputElement>document.getElementById('PrimerNombre')).value;
    this.second = (<HTMLInputElement>document.getElementById('SegundoNombre')).value;
    this.last = (<HTMLInputElement>document.getElementById('Apellido')).value;
    this.cell = (<HTMLInputElement>document.getElementById('Celular')).value;
    // this.whatsGroupName = (<HTMLInputElement>document.getElementById('name')).value;
    nPersons(0, this.lista_personasPorInteres, this.contacts, this.event.name);
  }
}
function nPersons(i, lista_personasPorInteres, contacts, name) {
  if (i == lista_personasPorInteres.length) return;
  let personToExport = {} as PersonToExport;
  personToExport.group = name;
  personToExport.first = lista_personasPorInteres[i].first_name;
  personToExport.second = '';
  personToExport.last = lista_personasPorInteres[i].last_name;
  personToExport.cell = lista_personasPorInteres[i].cellphone;
  contacts.push(personToExport);
  if (contacts.length == lista_personasPorInteres.length) {
    setTimeout(() => {
      // tableToExcel('Contacts', 'Numeros Cecap');
      exportTableToExcel('Contacts', 'Numeros Cecap');
    }, 0);
  }
  return nPersons(i + 1, lista_personasPorInteres, contacts, name);
}

function exportTableToExcel(tableID, filename = '') {
  var downloadLink;
  var dataType = 'application/vnd.ms-excel';
  var tableSelect = document.getElementById(tableID);
  var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
  // Specify file name
  filename = filename ? filename + '.xls' : 'excel_data.xls';
  // Create download link element
  downloadLink = document.createElement("a");
  document.body.appendChild(downloadLink);
  if (navigator.msSaveOrOpenBlob) {
    var blob = new Blob(['\ufeff', tableHTML], {
      type: dataType
    });
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    // Create a link to the file
    downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    // Setting the file name
    downloadLink.download = filename;
    //triggering the function
    downloadLink.click();
  }
}
// function tableToExcel(table, name) {
//   var uri = 'data:application/vnd.ms-excel;base64,'
//   var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
//   var base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
//   var format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
//   if (!table.nodeType) table = document.getElementById(table)
//   var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
//   window.location.href = uri + base64(format(template, ctx))
// }

export interface EventInteres {
  event: Object,
  interes: number,
  identity: {},
}
export interface EventIdPersonId {
  event: {},
  identity: {},
}

export interface EventPerson {
  _id: string,
  person: Object,
  state: number,
}
export interface PersonItem {

  _id: string,
  first_name: string,
  last_name: string,
  cellphone: number,
  city: string,
  state: number,
  stateName: string,


}
export interface PersonToExport {
  group: string,
  first: string,
  second: string,
  last: string,
  cell: number,
}