import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
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
  public listaUniversidades=[];
  public listaMediosContacto=[];
  public listado_personas=[];
  public listaUniversidadesChecked=[];
  public listaMediosContactoChecked=[];
  public listaPersonas;
  ////////////////////////////////////////////////////
  public page;
  public total;
  public totalPag;
  public mostrar = [];
  ////////////////////////////////////////////////////  

  constructor(

    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.filterPerson();
    this.llenarUniversidades();
    this.llenarMediosContacto();

  }



  onSubmit(){
    this.listado_personas=[];
    this.listaUniversidadesChecked=[];
    this.listaMediosContactoChecked=[];
    for(let u of this.listaUniversidades){
        if(u.checked){
        this.listaUniversidadesChecked.push(u);
        }  


    }
    // console.log(this.listaUniversidadesChecked)
    
    for(let m of this.listaMediosContacto){
        if(m.checked){
          this.listaMediosContactoChecked.push(m);
        }
    }
    // console.log(this.listaMediosContactoChecked)

    this.filterPerson();
    


  }
  dis(){
    this.page = this.page-1;
    var inicio = (8*(this.page-1));
    var final = (8*(this.page-1))+8;
    this.mostrar = [];
    for(var a = inicio  ; a < final ; a++ ){
      this.mostrar.push(this.listado_personas[a]);
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
        this.mostrar.push(this.listado_personas[a]);
    }
  }
  mostrarPersonas(){
    this.page = 1;
    this.total = this.listado_personas.length;
    if(this.total == 0){
      this.totalPag = 1;
    } else{
    this.totalPag = Math.ceil(this.total/8);
    }
    this.mostrar = []
    // console.log(this.totalPag)
    if(this.totalPag > 1){
      for(var a = 0 ; a < 8 ; a++){
      this.mostrar.push(this.listado_personas[a]) ;}
    } else{
      this.mostrar = this.listado_personas;
    }
    
  }
  filterPerson(){

    // let u={}as ObjeSearch;
    // u.uni='Universidad Mayor de San Simon';

    let ots={}as ObjectToSearch;
    ots.listaUniChecked=this.listaUniversidadesChecked;
    ots.listaMedChecked=this.listaMediosContactoChecked;
    ots.identity=Identity;

    this._peticionesService.filterUniversidadMedio(ots).subscribe(response=>{

      this.listaPersonas=response;
      this.listado_personas=this.listaPersonas;
      this.mostrarPersonas();
      // console.log(this.listado_personas);
    })
  }
  llenarUniversidades(){
    this._peticionesService.getUni().subscribe(res=>{
      let universidades=res[0].university;
      console.log(universidades);
      for(let univer of universidades){
        let uni={}as ItemUniversidad;
        uni._id=univer._id;
        uni.name=univer.nombre;
        uni.checked=false;
        this.listaUniversidades.push(uni);
      }
      console.log(this.listaUniversidades);
    })

    // let umss={}as ItemUniversidad;
    // umss.checked=false;
    // umss.id=1;
    // umss.name='Universidad Mayor de San Simon';
    // this.listaUniversidades.push(umss);
    // let umss2={}as ItemUniversidad;
    // umss2.checked=false;
    // umss2.id=2;
    // umss2.name='U. Catolica';
    // this.listaUniversidades.push(umss2);
    // let umss3={}as ItemUniversidad;
    // umss3.checked=false;
    // umss3.id=3;
    // umss3.name='U. Latinoamericana';
    // this.listaUniversidades.push(umss3);
  }


  llenarMediosContacto(){

    let WhatsApp={} as ItemMedioContacto;
    WhatsApp.name='WhatsApp';
    WhatsApp.id=1;
    WhatsApp.checked=false;
    this.listaMediosContacto.push(WhatsApp);

    let Afiches={} as ItemMedioContacto;
    Afiches.name='Afiches';
    Afiches.id=2;
    Afiches.checked=false;
    this.listaMediosContacto.push(Afiches);

    let Facebook={} as ItemMedioContacto;
    Facebook.name='Facebook';
    Facebook.id=3;
    Facebook.checked=false;
    this.listaMediosContacto.push(Facebook);

    let Recomendacion={} as ItemMedioContacto;
    Recomendacion.name='Recomendacion';
    Recomendacion.id=4;
    Recomendacion.checked=false;
    this.listaMediosContacto.push(Recomendacion);

    let VisitasA={} as ItemMedioContacto;
    VisitasA.name='Visitas Aulas';
    VisitasA.id=5;
    VisitasA.checked=false;
    this.listaMediosContacto.push(VisitasA);

    let VisitasE={} as ItemMedioContacto;
    VisitasE.name='Visita Empresa';
    VisitasE.id=6;
    VisitasE.checked=false;
    this.listaMediosContacto.push(VisitasE);


  }

  cancel(){

    for(let itemU of this.listaUniversidades){
      itemU.checked=false;
    }
    this.listaUniversidadesChecked=[];
    for(let itemM of this.listaMediosContacto){
      itemM.checked=false;
    }
    this.listaMediosContactoChecked=[];
    this.listado_personas=[];
  }



}
export interface ObjeSearch{

  uni:string;

}
export interface ObjectToSearch{

  listaUniChecked:{},
  listaMedChecked:{},
  identity:{},
}



export interface ItemUniversidad{

  name:string,
  checked:boolean,
  _id:string,
}


export interface ItemMedioContacto{
  name:string
  checked:boolean,
  id:number,

}