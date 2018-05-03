import { Component, OnInit, ElementRef,ViewChild, Input, EventEmitter} from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute,Router } from "@angular/router";
import { User} from '../../modelo/user';
import { Cartera } from "../../modelo/cartera";
import { Identity } from "../../services/global";

@Component({
  selector: 'app-edit-ejecutivo',
  templateUrl: './edit-ejecutivo.component.html',
  styleUrls: ['./edit-ejecutivo.component.css'],
  providers: [ PeticionesService ]
})
export class EditEjecutivoComponent implements OnInit {
  public ejecutivo;
  public ejecutivoId;
  public ejecutivoActive;
  public carteras;
  public carteraActual;
  public sucursales;
  public roles;
  public ejecutivoName;
  public ejecutivoLastName;
  public ejecutivoCell;
  public ejecutivoCorreo;
  public ejecutivoRol;
  public ejecutivoOffice;
  public ejecutivoCartera;
  

  constructor(
    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this._peticionesService.getCarteras().subscribe(response=>{
      this.carteras=response;

      

      // for (let cart of this.carteras) {
      //   if(cart.user==this.ejecutivoId){

      //       this.carteraActual=cart;
           
      //   }
        
      // }
      
    });
    this._peticionesService.getSucursales().subscribe(response=>{
      this.sucursales=response;
      // console.log(this.sucursales)
    });
    this._peticionesService.getRoles().subscribe(response=>{
      this.roles=response;
      console.log(this.roles);
    });
    
    this.queryEjecutivoId();
    this.findEjecutivo();
    this.findCarteraFromEjecutivo();
  }

  queryEjecutivoId(){
      this.route.params.subscribe(params => {
      this.ejecutivoId=params.active;

     
     
   });
  }

  findEjecutivo(){
     this._peticionesService.getOneUser(this.ejecutivoId).subscribe(
        result =>{
          this.ejecutivo=result;
          console.log(this.ejecutivo);
          this.ejecutivoActive=this.ejecutivo.active;
          this.ejecutivoName=this.ejecutivo.name;
          this.ejecutivoLastName=this.ejecutivo.lastname;
          this.ejecutivoCell=this.ejecutivo.cell;
          this.ejecutivoCorreo=this.ejecutivo.correo;
          this.ejecutivoOffice=this.ejecutivo.offices;
          this.ejecutivoRol=this.ejecutivo.rol;
        },
        error =>{
          console.log(<any>error);
        });
  }

  saveEjecutivo(){
    // console.log(this.ejecutivo);
    this.ejecutivo.active=this.ejecutivoActive;
    this.ejecutivo.name=this.ejecutivoName;
    this.ejecutivo.lastname=this.ejecutivoLastName;
    this.ejecutivo.cell=this.ejecutivoCell;
    this.ejecutivo.correo=this.ejecutivoCorreo;
    this.ejecutivo.offices=this.ejecutivoOffice;
    this.ejecutivo.rol=this.ejecutivoRol;
    
    
    console.log(this.ejecutivo);
    
    
    this._peticionesService.updateUser(this.ejecutivo).subscribe(
      result=>{
        var res=result;
        console.log(res)
        this.router.navigate(['home/ejecutivo']);
        alert('Se guardo correctamente el nuevo estado');
      },
      error=>{
        console.log(<any>error);
        alert('Error al guardar');
      });


  }

  findCarteraFromEjecutivo(){

  //   this._peticionesService.findCarteraFromEjecutivo(this.ejecutivoId).subscribe(
  //       result=>{


  //       }

  //   )
    
    
   }
  onSubmit() { 
   this.saveEjecutivo();
  }

  
}