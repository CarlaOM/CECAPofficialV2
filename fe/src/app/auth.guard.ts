import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Identity } from "../app/services/global";
import { PeticionesService } from "../app/services/peticiones.service";

@Injectable()
export class AuthGuard implements CanActivate {
  private _peticionesService: PeticionesService;
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // this._peticionesService.getRole(Identity._id).subscribe(res=>{
      //   let resp=res;
        
      // })
    return true;
  }
}
