import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';



@Component({
  selector: 'app-print-batch-certificates',
  templateUrl: './print-batch-certificates.component.html',
  styleUrls: ['./print-batch-certificates.component.css'],
  providers: [PeticionesService]
  
})
export class PrintBatchCertificatesComponent implements OnInit {

 public escudo:string;
 public logo:string;
 public doc =new jsPDF('landscape');

 public eventId;
 public event;
 public inscriptions;
 public lista_personasPorModulo;
 public moduleId;
 public moduleName;
 public certificateData;
 public modularForAssist;
 public nombreFechaCertificado;
 public nombreFechaDepartamento;
 public nombreEventoModulo;

 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private _peticionesService: PeticionesService
 ) { }
 
 ngOnInit(){
  this.route.params.subscribe(params => {
  this.eventId = params.id.split("-")[0];
  this.moduleId=params.id.split("-")[1];
    console.log(this.eventId);
    console.log(this.moduleId);
  });
  this.queryEventInscription();
}
queryEventInscription() {
     this._peticionesService.getEventInscriptions(this.eventId).subscribe(
     result => {
           this.event = result;
          

           console.log(this.event);
           this.inscriptions = this.event.inscriptions;
           var total = this.event.total;   
           this.lista_personasPorModulo=this.inscriptions; 
          //  console.log('esta es la inscripcion de la persona');
          //  console.log(this.lista_personasPorModulo);
           
           

           this.setListInscriptions(this.moduleId);  
     },
     error => {
           var errorMessage = <any>error;
           console.log(errorMessage);
     }
     );
}
setListInscriptions(_id:string){
            
  this.lista_personasPorModulo=[];
  this.moduleId=_id;
  // this.moduleName=nameModule;

  this.certificateData=this.eventId+'-'+this.moduleId;

  for(let i of this.inscriptions){


        let persona={}as PersonItem;
        persona.persons=i.persons;
        persona.name=i.name;
        persona.ci=i.ci;
        persona.cellphone=i.cellphone;
        persona.canceled_price=i.canceled_price;
        persona.price_event=i.price_event;
              let personEventModule={}as PersonEventModule;
              personEventModule.personId=i.persons
              personEventModule.moduleId=this.moduleId;
              personEventModule.eventId=this.eventId; 
              // console.log(personEventModule);
        this._peticionesService.getAsistenciaOfPerson(personEventModule).subscribe(response=>{

              this.modularForAssist=response;
              persona.assist=this.modularForAssist.assist;
        })

        this.lista_personasPorModulo.push(persona);
  }
  console.log(this.lista_personasPorModulo);
  // console.log(this.moduleId);



}
onSubmit(){


  this.printCertificates();
}
cancel(){
  window.history.back();
}

printCertificates(){

  

  let cont=0;
  let listaAsistentes=[];
  for (let personAssit of this.lista_personasPorModulo){

    if(personAssit.assist){
      listaAsistentes.push(personAssit);
    }
  }
  for(let p of listaAsistentes){
    this.oneCertificate(p.name);
    
    cont++;
    if(cont<listaAsistentes.length){

      this.doc.addPage();
    }
    
  }

  this.doc.save('Test.pdf');
  this.router.navigate(['home/events']); 
  
  
}


onSelectFileEscu(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader:any;
       reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.escudo = event.target.result;
        
      }
    }
}
onSelectFileLogo(event) { // called each time file input changes
  if (event.target.files && event.target.files[0]) {
    var reader :any;
    reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.logo = event.target.result;
      
    }
  }
}





oneCertificate(namePerson:string){

  /////////////////lineas/////////////
      this.doc.setLineWidth(3);
      this.doc.setDrawColor(0,179,60);
      this.doc.line(10, 10, 10, 190);

      this.doc.setLineWidth(3);
      this.doc.setDrawColor(179, 179, 179);
      this.doc.line(16, 15, 16, 195);

      this.doc.setLineWidth(3);
      this.doc.setDrawColor(0,179,60);
      this.doc.line(290, 10, 290, 190);

      this.doc.setLineWidth(3);
      this.doc.setDrawColor(179, 179, 179);
      this.doc.line(284, 15, 284, 195);
///////////////////////////////////////////////
    
      this.doc.addImage(this.escudo, 'JPEG', 260, 40, 25, 25);
      this.doc.addImage(this.logo, 'JPEG', 20, 20, 25, 25);
      

      this.doc.setFont("times");
      this.doc.setFontType("bold");
      this.doc.setFontSize(13);
      this.doc.setTextColor(0,179,60);
      this.doc.text(150, 20, 'El CENTRO DE CAPACITACION Y ACTUALIZACION PROFESIONAL',null,null,'center');

      this.doc.setFont("times");
      this.doc.setFontType("italic");
      this.doc.setFontSize(13);
      this.doc.setTextColor(0,179,60);
      this.doc.text(150, 28  , '"Lideres en Consultoria"',null,null,'center');

      this.doc.setFont("times");
      this.doc.setFontType("bold");
      this.doc.setFontSize(18);
      this.doc.setTextColor(0,0,0);
      this.doc.text(150, 65, 'C E R T I F I C A D O  A L  P A R T I C I P A N T E',null,null,'center');

      this.doc.text(150, 70, '____________________________________________________',null,null,'center');



      this.doc.setFont("times");
      this.doc.setFontType("italic");
      this.doc.setFontSize(34);
      this.doc.text(150,100,namePerson,null,null,"center");
      // this.doc.text(150, 130, 'This is centred text.', null, null, 'center');
      this.doc.text(150,107,'____________________________',null,null,'center');

      this.doc.setFont("times");
      this.doc.setFontType("normal");
      this.doc.setFontSize(14);
      this.doc.text(150,116,'Por haber concluidoel Entrenamiento Superior VIP: ',null,null,'center')


      this.doc.setFont("times");
      this.doc.setFontType("bold");
      this.doc.setFontSize(14);
      this.doc.text(150,122,'"'+this.nombreEventoModulo+'", ',null,null,'center');

      this.doc.setFont("times");
      this.doc.setFontType("normal");
      this.doc.setFontSize(14);
      this.doc.text(150,128,'presentado por: ',null,null,'center');

      this.doc.setFont("times");
      this.doc.setFontType("italic");
      this.doc.setFontSize(14);
      this.doc.text(150,134,'CECAP CONSULTING',null,null,'center');

      this.doc.setFont("times");
      this.doc.setFontType("normal");
      this.doc.setFontSize(14);
      this.doc.text(150,140,this.nombreFechaCertificado,null,null,'center');

      this.doc.setFont("times");
      this.doc.setFontType("normal");
      this.doc.setFontSize(14);
      this.doc.text(265,165,this.nombreFechaDepartamento,null,null,'right');


      // this.doc.addFont('ComicSansMS', 'Comic Sans', 'normal');
      // this.doc.setFont('Comic Sans');
      // this.doc.text(50,50,'Hello World');

      // this.doc.addFont('asdf', 'asdf', 'normal');
      // this.doc.setFont('asdf');
      // this.doc.text(50,80,'Hello World');

      // this.doc.setFont("monotpe");
      // this.doc.setFontType("normal");
      // this.doc.setFontSize(14);
      // this.doc.text(265,175,'Cochabamba - Bolivia,2017 ',null,null,'right');

      console.log(this.doc.getFontList());


}


  
}


export interface PersonItem{

  persons:string,
  name:string,
  ci:number,
  cellphone:number,
  canceled_price:number,
  price_event:number,
  assist:boolean
}
export interface PersonEventModule{

  personId:string,
  eventId:string,
  moduleId:string,
}