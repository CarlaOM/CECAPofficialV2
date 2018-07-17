import { Component, OnInit } from '@angular/core';
import { PeticionesService } from './../services/peticiones.service';
import { Identity } from './../services/global';
import { Person } from './../modelo/person';
import { Router, ActivatedRoute } from "@angular/router";
import { forEach } from '@angular/router/src/utils/collection';
import { DescOcupation } from './../modelo/descOcupation';
import { Cartera } from '../modelo/cartera';




@Component({
  selector: 'app-import-whats-numbers',
  templateUrl: './import-whats-numbers.component.html',
  styleUrls: ['./import-whats-numbers.component.css'],
  providers: [PeticionesService],

})
export class ImportWhatsNumbersComponent implements OnInit {

  public whatsGroupName;
  public whatsNumbers;
  public numbers = [];
  public nuevaPersona;
  public cartera;
  public departamento;
  public descOcupation;
  public programs;
  public nameCarrera;
  public Universidad;
  public universidades;
  public carreras;

  public programasListCheckbox = [];

  public programasConInteres = [];


  public newPersons = [];

  public group = '';
  public first = '';
  public second = '';
  public last = '';
  public cell = '';
  public contacts = [];

  constructor(
    private _peticionesService: PeticionesService,
    private router: Router,
    private route: ActivatedRoute,

  ) {

    this.descOcupation = new DescOcupation('', '', '', '', '', '', '');

    this.nuevaPersona = new Person('', '', null, null, null, '', '', '', '', this.descOcupation, '', null, null);

    ///////////////////////////
    ///new Person(f
    //irst_name: string, 
    //last_name: string, 
    //ci: number, 
    //phone: number, 
    //cellphone: number, 
    //whatsapp_group: string, 
    //city: string, 
    //email: string, 
    //ocupation: string, 
    //descOcupation: DescOcupation, 
    //carteras: string)
    ////////////////////////////////
  }

  ngOnInit() {
    this.queryCartera();
    this.queryPrograms();
    this.getUniversidades();
  }

  onSubmit() {

    this.fixText();
    this.llenarProgramasConInteres();
  }
  getUniversidades() {
    // console.log("hnjdjdjd")
    this._peticionesService.getUni().subscribe(res => {
      this.universidades = res[0].university;
      this.carreras = res[0].carrera;
      console.log(this.universidades);
    })
  }
  captUnive() {

  }
  fixText() {
    // this.whatsNumbers = (<HTMLInputElement>document.getElementById('numbers')).value;
    var numeros = this.whatsNumbers.split(',');
    numeros.forEach(element => {
      if (element.split(';')[1] != undefined) {
        if (element.split(';')[1].length == 8) {
          this.numbers.push(element.split(';')[1]);
        }
      } else {
        if (element.split('+591 ')[1] != undefined)
          this.numbers.push(element.split('+591 ')[1]);
      }
    });
  }
  llenarProgramasConInteres() {
    for (let i of this.programasListCheckbox) {
      if (i.checked) {
        this.programasConInteres.push(i);
      }
    }
    this.saveOnDB();
  }

  saveOnDB() {
    let objWhats = {} as ObjetcWhatsappToSend;
    objWhats.listaNumeros = this.numbers;
    objWhats.whatsapp_group = this.whatsGroupName;
    objWhats.cellphone = 0;
    objWhats.carteras = this.cartera._id;
    objWhats.city = this.departamento;
    objWhats.interes = this.programasConInteres;
    objWhats.universidad = this.Universidad;
    objWhats.carrera = this.nameCarrera;
    this._peticionesService.saveBatchWhatsappNumbers(objWhats).subscribe(response => {
      this.router.navigate(['home/persons']);
    })
    this._peticionesService.getPersons().subscribe(response => {
      let prueba = response;
    })
  }
  queryCartera() {
    // console.log(Identity._id)
    this._peticionesService.getCarteraFromUserId(Identity._id).subscribe(
      result => {
        this.cartera = result;
        // console.log(this.cartera);
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }



  queryPrograms() {
    this._peticionesService.getPrograms().subscribe(response => {
      this.programs = response;
      // console.log(this.programs);
      this.llenarProgramsCheckbox();
    },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }
  llenarProgramsCheckbox() {
    for (let pro of this.programs) {
      let oneProgramCheck = {} as ProgramasCheckbox;
      oneProgramCheck.programId = pro._id;
      oneProgramCheck.programName = pro.name;
      oneProgramCheck.checked = true;
      oneProgramCheck.state = 0;
      this.programasListCheckbox.push(oneProgramCheck);

    }
  }
  cancel() {
  }
  exportarExcel() {
    this.contacts = [];
    this.numbers = [];
    this.fixText();
    this.group = (<HTMLInputElement>document.getElementById('grupo')).value;
    this.first = (<HTMLInputElement>document.getElementById('PrimerNombre')).value;
    this.second = (<HTMLInputElement>document.getElementById('SegundoNombre')).value;
    this.last = (<HTMLInputElement>document.getElementById('Apellido')).value;
    this.cell = (<HTMLInputElement>document.getElementById('Celular')).value;
    nPersons(0, this.numbers, this.contacts, this.whatsGroupName);
  }
}
function nPersons(i, numbers, contacts, name) {
  if (i == numbers.length) return;
  let personToExport = {} as PersonToExport;
  personToExport.group = '';
  personToExport.first = name + ' ' + i;
  personToExport.second = '';
  personToExport.last = '';
  personToExport.cell = numbers[i];
  contacts.push(personToExport);
  if (contacts.length == numbers.length) {
    setTimeout(() => {
      // console.log(contacts);
      tableToExcel('Contacts', 'Numeros Cecap');
    }, 0);
  }
  return nPersons(i + 1, numbers, contacts, name);
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


export interface ProgramasCheckbox {
  programId: string,
  programName: string,
  checked: boolean,
  state: number,

}
export interface ObjetcWhatsappToSend {

  listaNumeros: {},
  whatsapp_group: string,
  cellphone: number,
  carteras: string,
  city: string,
  interes: {},
  carrera: string,
  universidad: number


}


////////////
//  0 interesados
//  1 en duda
//  2 confirmados
//  3 isncritos
//  4 enlinea
//  5 proximo evento 
//  6 sin interes
//////// 
