import { Component, OnInit, ElementRef,ViewChild,Output,EventEmitter } from '@angular/core';
import {PeticionesService } from '../../services/peticiones.service';
// import {Cartera} from '../../modelo/cartera';
// import { Identity,Roles } from "../../services/global";
// import {User} from '../../modelo/user';
// import { Sucursal } from "../../modelo/sucursal";
import { Ejecutivo } from "./Ejecutivo";

@Component({
  selector: 'app-add-ejecutivo',
  templateUrl: './add-ejecutivo.component.html',
  styleUrls: ['./add-ejecutivo.component.css'],
  providers:[PeticionesService]
})
export class AddEjecutivoComponent implements OnInit {
  //public carteras;
  public carteraSeleccionada;
  public carteraObject;
  public  rolid;
  public newUser;
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('date') dateRef: ElementRef;
  @ViewChild('cell') cellRef: ElementRef;
  @ViewChild('cartera') carteraRef: ElementRef;
  @Output()MessageEvent=new EventEmitter();
  @ViewChild("close", {read: ElementRef}) close: ElementRef;
  


  constructor(private _peticionesService:PeticionesService) { }

  /////////////////////////////////////////////////
  public roles = ['rol1','rol2','rol3'];
 
  public sucursales=["sucursal1","sucursal2","sucursal3"];
  public carteras=['cartera1','caretera2','caretea3'];
  model = new Ejecutivo(78,"NOMBRE","APELLIDO",6532,"ASDF@ASDF.ASD",this.roles[0],this.sucursales[0],this.carteras[0]);
 // model=new Ejecutivo();
  get diagnostic() { return JSON.stringify(this.model); }
/////////////////////////////////////////////////

  ngOnInit() {
    // this._peticionesService.getCarteras().subscribe(response=>{
    //   this.carteras=response;
    // });
    
    
  }

//   save(){
//     const name= this.nameRef.nativeElement.value;
//     let date=this.dateRef.nativeElement.value;
//     let cell=this.cellRef.nativeElement.value;
//     this.carteraSeleccionada=this.carteraRef.nativeElement.value;
//     const userid=Identity._id;
//    this.rolid=Roles[1]._id
//     let asdf=cell+'';
  

//     const newEjecutivo=new User(userid,name,true,name,this.rolid);
   
//    if(( this.nameRef.nativeElement.value=='') || (this.cellRef.nativeElement.value   =='') ){
//      window.alert("Asegurese que todos los campos esten llenados");
//    console.log(newEjecutivo);
//    return;
    
//    }else{
//     this._peticionesService.addUser(newEjecutivo).subscribe(response=>{
//       this.newUser=response;
//       console.log(this.newUser);
//       this.MessageEvent.emit();
      
//       this.findCartera();
      
      
      
//         this.close.nativeElement.click();
      
     

//     })

//    }

   

//   }
//   findCartera(){
//     this._peticionesService.getCartera(this.carteraSeleccionada).subscribe(
//        result =>{
//          this.carteraObject=result;
//         this.asignarCartera(); 

        
//        },
//        error =>{
//          var errorMessage=<any>error;
//          console.log(errorMessage);
//        }

//     )


//  }
//   asignarCartera(){
//     this.carteraObject.user=this.newUser._id;
//     this._peticionesService.updateCartera(this.carteraObject).subscribe(
//       result=>{

//         var res=result;
      

//       },error=>{
//         var errorMessage=<any>error;
//         console.log(errorMessage);
//       }
//     )

//   }

}

