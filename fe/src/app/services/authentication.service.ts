import * as moment from "moment";
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Identity } from "./global";
import { GLOBAL } from './global';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay'


import { CATCH_ERROR_VAR } from "@angular/compiler/src/output/abstract_emitter";


@Injectable()
export class AuthService {
  public url: string = GLOBAL.url;
    

    constructor(private _http: HttpClient) {

    }

    login(user ) {
            let body = JSON.stringify(user);	
            console.log(body);
            var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');		
            return this._http.post(this.url + 'auth/loginAuth/', body, { headers: headers ,withCredentials:true}).map((res: Response) => res)
                                                    // .do(res=>this.setSession)
                                                    // .shareReplay();		
            
    }
          
    // private setSession(authResult) {

    //     console.log(authResult);
    //     const expiresAt = moment().add(authResult.expiresIn,'second');

    //     localStorage.setItem('id_token', authResult.idToken);
    //     localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    // }          

    logout() {
        localStorage.removeItem("idToken");
        localStorage.removeItem("expiresIn");
        Identity._id='';
        Identity.active=false;
        Identity.name='';
        Identity.password_hash='';
        Identity.rol='';

        let body = JSON.stringify(Identity._id);	
            
            var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');		
            return this._http.post(this.url + 'auth/logOut/',body, { headers: headers ,withCredentials:true},).map((res: Response) => res)

    }
    getToken(){
        // console.log(localStorage.getItem('idToken'))
        return localStorage.getItem('idToken');
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expiresIn");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }    
}
          
          