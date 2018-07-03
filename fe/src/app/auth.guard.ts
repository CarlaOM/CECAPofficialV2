import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Identity } from "../app/services/global";
// import { PeticionesService } from "../app/services/peticiones.service";
import { HttpModule, Http, Response, Headers } from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './services/global';



import "rxjs/add/operator/map";

import { CATCH_ERROR_VAR } from "@angular/compiler/src/output/abstract_emitter";



@Injectable()
export class AuthGuard implements CanActivate {
  public url: string = GLOBAL.url;
  
  
  
  // canActivate(

    
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

     
  //   return false;
  // }
  constructor(private router: Router,
    // private _peticionesService: PeticionesService,
    private _http: HttpClient
    
   ) { }

  public userRol;
  public userRolName:string;
 
    canActivate(

      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        // console.log(Identity);
        let rolid=Identity.rol;
        // console.log(Identity.rol);
        this.getRole(rolid).subscribe(res=>{
          // console.log('llega al subscribe')
          this.userRol=res;
          this.userRolName=this.userRol.name;
          // console.log(this.userRol)
          // console.log(this.userRolName)
          

        });
       
        // this._peticionesService.getRole(rolid.toString()).subscribe(res=>{
        //   this.userRol=res;
        //   console.log(this.userRol);
          
        // })
      
        if (Identity!=null) {
            
           
            if(this.userRolName=="Admin"){
              // console.log('loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',Identity,'admin')

              return true;
            }else{
              if(this.userRolName=="Ejecutivo"){
              // console.log('loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',Identity,'ejecut')
                this.router.navigate(['/home/error']);
                
                return false;
              }
            }
            
            // return true;
        }else{

            // not logged in so redirect to login page
            this.router.navigate(['/home/error'], { queryParams: { returnUrl: state.url }});
            return false;
        }
 
       
    }
    getRole(id) {
      return this._http.get(this.url + 'users/rolName/' + id).map((res: Response) => res);
    }
    // getRole(rolid) {
    //   //  this._http.get(this.url + 'users/rolName/' + id).subscribe((res: Response) =>  res);
    //   //  this.userRol= this._http.get(this.url + 'users/rolName/' + rolid).subscribe((res: Response) =>  res);
    //   this.userRol= this._http.get(this.url + 'users/rolName/' + rolid).subscribe(res=>{
    //     this.userRol=res;
    //   })
      

    //    console.log(this.userRol);
    // }
}
