import { Component, OnInit, ElementRef,ViewChild,Output,EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import {PeticionesService } from '../../services/peticiones.service';
import {Cartera} from '../../modelo/cartera';
import { Identity, } from "../../services/global";
// import {User} from '../../modelo/user';
import { Offices } from "../../modelo/offices";
import {Md5} from 'ts-md5/dist/md5';
import { Ejecutivo } from "../../modelo/Ejecutivo";

@Component({
  selector: 'app-add-ejecutivo',
  templateUrl: './add-ejecutivo.component.html',
  styleUrls: ['./add-ejecutivo.component.css'],
  providers:[PeticionesService]
})
export class AddEjecutivoComponent implements OnInit {
  private md5 = new Md5();
  public carteras;
  public sucursales;
  public carteraSeleccionada;
  public carteraObject;
  public  rolid;
  public newUser;
  public roles;
  public rolesSinAdmin=[];
  public personas;
  public rol;

  constructor(
    private _peticionesService:PeticionesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  /////////////////////////////////////////////////
  
 
  model = new Ejecutivo(Identity._id,"","","",true,undefined,"","","","");
  // model=new Ejecutivo();
  get diagnostic() { return JSON.stringify(this.model); }
/////////////////////////////////////////////////
  submitted = false;

 
  ngOnInit() {
    this._peticionesService.getCarterasLibres().subscribe(response=>{
      this.carteras=response;
      // console.log(this.carteras);
    });
    this._peticionesService.getSucursales().subscribe(response=>{
      this.sucursales=response;
      // console.log(this.sucursales)
    });
    this._peticionesService.getRoles().subscribe(response=>{
      this.roles=response;
      // console.log(this.roles);
      for(let r of this.roles){
        if(r.name!="Admin"){
          this.rolesSinAdmin.push(r);
        }

      }
    }); 
  }
  onSubmit() { this.submitted = true;
    // console.log(this.model);
    // this.model.rol = this.rol._id;
    // this._peticionesService.getUser().subscribe(response => {
    //   this.personas = response;
    // })
    // if(this.rol.name == "Gerente"){
    //   let ger = false;
    //   for(let p of this.personas){
    
    //     if(p.offices == this.model.offices && p.rol == this.rol._id ){
    //         ger = true;
    //     }
    //   }
    //   if(ger == false){
    //       this._peticionesService.addUser(this.model).subscribe(response=>{
    //       this.newUser=response;
    //       console.log(this.newUser);
    //       this.findCartera();
    //       // this.MessageEvent.emit();
    //       this.router.navigate(['/home/ejecutivo/']); },error=>{
  
    //         var errorMessage=<any>error;
    //         console.log(errorMessage);
    //       })
          
    //   }else{
    //     alert("Ya existe un gerente en la sucursal seleccionada")
    //   }
    // }else{
    //     this._peticionesService.addUser(this.model).subscribe(response=>{
    //     this.newUser=response;
    //     console.log(this.newUser);
    //     this.findCartera();
    //     // this.MessageEvent.emit();
    //     this.router.navigate(['/home/ejecutivo/']); },error=>{

    //       var errorMessage=<any>error;
    //       console.log(errorMessage);
    //     })
    // }
    this.model.password_hash=this.model.name;
    // let passHashed= this.md5.appendStr(this.model.password_hash).end();
    let passHashed=this.model.password_hash;
    this.model.password_hash=passHashed;
    this._peticionesService.addUser(this.model).subscribe(
      response=>{
            this.newUser=response;
            this.findCartera();
            this.router.navigate(['home/ejecutivo']);
            alert('Se guardo correctamente el Ejecutivo');
      },
      error=>{
            console.log(<any>error);
            alert('Error al guardar, ya existe ejecutivo en esta sucursal');
            this.router.navigate(['home/ejecutivo']);
      });
    }
  findCartera(){
    this.carteraSeleccionada=this.model.cartera;
    // console.log(this.carteraSeleccionada);
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
    this.carteraObject.active=true;
    this._peticionesService.updateCartera(this.carteraObject).subscribe(
      result=>{
        var res=result;
      },error=>{
        var errorMessage=<any>error;
        console.log(errorMessage);
      }
    )
  }
  cancel(){
    this.router.navigate(['home/ejecutivo']);
  }

}

