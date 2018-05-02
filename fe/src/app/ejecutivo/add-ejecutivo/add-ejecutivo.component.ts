import { Component, OnInit, ElementRef,ViewChild,Output,EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import {PeticionesService } from '../../services/peticiones.service';
import {Cartera} from '../../modelo/cartera';
import { Identity,Roles } from "../../services/global";
// import {User} from '../../modelo/user';
import { Offices } from "../../modelo/offices";
import { Ejecutivo } from "./Ejecutivo";

@Component({
  selector: 'app-add-ejecutivo',
  templateUrl: './add-ejecutivo.component.html',
  styleUrls: ['./add-ejecutivo.component.css'],
  providers:[PeticionesService]
})
export class AddEjecutivoComponent implements OnInit {
  public carteras;
  public sucursales;
  public carteraSeleccionada;
  public carteraObject;
  public  rolid;
  public newUser;
  
  constructor(
    private _peticionesService:PeticionesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  /////////////////////////////////////////////////
  public roles = Roles;
  
 
  model = new Ejecutivo(Identity._id,"NOMBRE","APELLIDO","",true,6532,"ASDF@ASDF.ASD","this.roles[1].name","asdf","asdf");
  // model=new Ejecutivo();
  get diagnostic() { return JSON.stringify(this.model); }
/////////////////////////////////////////////////
  submitted = false;

 
  ngOnInit() {
    this._peticionesService.getCarteras().subscribe(response=>{
      this.carteras=response;
      console.log(this.carteras);
    });
    this._peticionesService.getSucursales().subscribe(response=>{
      this.sucursales=response;
      console.log(this.sucursales)
    });
    
    
  }
  onSubmit() { this.submitted = true;
    console.log(this.model);
    this._peticionesService.addUser(this.model).subscribe(response=>{
            this.newUser=response;
            console.log(this.newUser);
            this.findCartera();
            // this.MessageEvent.emit();
            this.router.navigate(['/home/ejecutivo/']); 
            

      },error=>{

        var errorMessage=<any>error;
        console.log(errorMessage);
      })

      

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
  findCartera(){
    this.carteraSeleccionada=this.model.cartera;
    console.log(this.carteraSeleccionada);
    this._peticionesService.getCartera(this.carteraSeleccionada).subscribe(
       result =>{
         this.carteraObject=result;
        this.asignarCartera(); 

        
       },
       error =>{
         var errorMessage=<any>error;
         console.log(errorMessage);
       }

    )


 }
  asignarCartera(){
    this.carteraObject.user=this.newUser._id;
    this._peticionesService.updateCartera(this.carteraObject).subscribe(
      result=>{

        var res=result;
      

      },error=>{
        var errorMessage=<any>error;
        console.log(errorMessage);
      }
    )

  }

}

