import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../../services/peticiones.service';
import { Identity } from '../../../services/global';


@Component({
  selector: 'app-filtro-universidad-medio',
  templateUrl: './filtro-universidad-medio.component.html',
  styleUrls: ['./filtro-universidad-medio.component.css'],
  providers: [PeticionesService]
})
export class FiltroUniversidadMedioComponent implements OnInit {
  public universidadFilter;
  public listaUniversidades = [];
  public listaMediosContacto = [];
  public listado_personas = [];
  public listaUniversidadesChecked = [];
  public listaMediosContactoChecked = [];
  public listaPersonas;
  ////////////////////////////////////////////////////
  public page;
  public total;
  public totalPag;
  public mostrar = [];
  ////////////////////////////////////////////////////  

  public group = '';
  public first = '';
  public second = '';
  public last = '';
  public cell = '';
  public contacts = [];
  public whatsGroupName;
  public numbers = [];

  constructor(
    private _peticionesService: PeticionesService,
  ) { }

  ngOnInit() {
    this.filterPerson();
    this.llenarUniversidades();
    this.llenarMediosContacto();
  }

  onSubmit() {
    this.listado_personas = [];
    this.listaUniversidadesChecked = [];
    this.listaMediosContactoChecked = [];
    for (let u of this.listaUniversidades) {
      if (u.checked) {
        this.listaUniversidadesChecked.push(u);
      }
    }
    for (let m of this.listaMediosContacto) {
      if (m.checked) {
        this.listaMediosContactoChecked.push(m);
      }
    }
    this.filterPerson();
  }
  dis() {
    this.page = this.page - 1;
    var inicio = (8 * (this.page - 1));
    var final = (8 * (this.page - 1)) + 8;
    this.mostrar = [];
    for (var a = inicio; a < final; a++) {
      this.mostrar.push(this.listado_personas[a]);
    }
  }
  aum() {
    this.page = this.page + 1;
    var inicio = (8 * (this.page - 1));
    var final = (8 * (this.page - 1)) + 8;
    if (final > this.total) {
      final = this.total;
    }
    this.mostrar = [];
    for (var a = inicio; a < final; a++) {
      this.mostrar.push(this.listado_personas[a]);
    }
  }
  mostrarPersonas() {
    this.page = 1;
    this.total = this.listado_personas.length;
    if (this.total == 0) {
      this.totalPag = 1;
    } else {
      this.totalPag = Math.ceil(this.total / 8);
    }
    this.mostrar = []
    if (this.totalPag > 1) {
      for (var a = 0; a < 8; a++) {
        this.mostrar.push(this.listado_personas[a]);
      }
    } else {
      this.mostrar = this.listado_personas;
    }

  }
  filterPerson() {
    let ots = {} as ObjectToSearch;
    ots.listaUniChecked = this.listaUniversidadesChecked;
    ots.listaMedChecked = this.listaMediosContactoChecked;
    ots.identity = Identity;
    let cartera;
    this._peticionesService.filterUniversidadMedio(ots).subscribe(response => {
      this.listaPersonas = response;
      let l = [];
      this._peticionesService.getCarteraFromUserId(Identity._id).subscribe(res => {
        cartera = res;
        for (let i = 0; i < this.listaPersonas.length; i++) {
          if (this.listaPersonas[i].carteras == cartera._id) {
            l.push(this.listaPersonas[i]);
          }
        }
        this.listaPersonas = l;
        this.listado_personas = this.listaPersonas;
        this.mostrarPersonas();
      })
    })
  }
  llenarUniversidades() {
    this._peticionesService.getUni().subscribe(res => {
      let universidades = res[0].university;
      // console.log(universidades);
      for (let univer of universidades) {
        let uni = {} as ItemUniversidad;
        uni._id = univer._id;
        uni.name = univer.nombre;
        uni.checked = false;
        this.listaUniversidades.push(uni);
      }
    })
  }

  llenarMediosContacto() {

    let WhatsApp = {} as ItemMedioContacto;
    WhatsApp.name = 'WhatsApp';
    WhatsApp.id = 1;
    WhatsApp.checked = false;
    this.listaMediosContacto.push(WhatsApp);

    let Afiches = {} as ItemMedioContacto;
    Afiches.name = 'Afiches';
    Afiches.id = 2;
    Afiches.checked = false;
    this.listaMediosContacto.push(Afiches);

    let Facebook = {} as ItemMedioContacto;
    Facebook.name = 'Facebook';
    Facebook.id = 3;
    Facebook.checked = false;
    this.listaMediosContacto.push(Facebook);

    let Recomendacion = {} as ItemMedioContacto;
    Recomendacion.name = 'Recomendacion';
    Recomendacion.id = 4;
    Recomendacion.checked = false;
    this.listaMediosContacto.push(Recomendacion);

    let VisitasA = {} as ItemMedioContacto;
    VisitasA.name = 'Visitas Aulas';
    VisitasA.id = 5;
    VisitasA.checked = false;
    this.listaMediosContacto.push(VisitasA);

    let VisitasE = {} as ItemMedioContacto;
    VisitasE.name = 'Visita Empresa';
    VisitasE.id = 6;
    VisitasE.checked = false;
    this.listaMediosContacto.push(VisitasE);
  }
  cancel() {
    for (let itemU of this.listaUniversidades) {
      itemU.checked = false;
    }
    this.listaUniversidadesChecked = [];
    for (let itemM of this.listaMediosContacto) {
      itemM.checked = false;
    }
    this.listaMediosContactoChecked = [];
    this.listado_personas = [];
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
    nPersons(0, this.listaPersonas, this.contacts, '');
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
      tableToExcel('Contacts', 'Numeros Cecap');
    }, 0);
  }
  return nPersons(i + 1, lista_personasPorInteres, contacts, name);
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

export interface ObjeSearch {

  uni: string;

}
export interface ObjectToSearch {

  listaUniChecked: {},
  listaMedChecked: {},
  identity: {},
}



export interface ItemUniversidad {

  name: string,
  checked: boolean,
  _id: string,
}


export interface ItemMedioContacto {
  name: string
  checked: boolean,
  id: number,

}