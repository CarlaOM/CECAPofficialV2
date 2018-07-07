import { Injectable } from "@angular/core";
import { HttpModule, Http, Response, Headers } from "@angular/http";
import { GLOBAL } from './global';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CATCH_ERROR_VAR } from "@angular/compiler/src/output/abstract_emitter";
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class BackupService {
  public url: string = GLOBAL.url;

  public handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  constructor(
    // private _httpClient: HttpClient,
    private _http: Http
    

  ) {
    // this.url = "https://jsonplaceholder.typicode.com/users";

  }
  // backup(ident){
  //   let body = JSON.stringify(ident);
  //   var id = ident._id;
  //   let headers = new HttpHeaders();
  //       headers.append('Content-Type', 'application/zip');
  //       headers.append('responseType', 'ArrayBuffer');
  //       // var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //       console.log(id)
  //       return this._http.get(this.url + 'users/backup/'+id, { headers: headers })
  //       .map((res) => new Blob([res['_body']], { type: 'application/text' }))
  // }
  // backupfile(ident:any): Observable<any> {
  //   let body = JSON.stringify(ident);
  //   return this._http.post<any>(this.url + 'users/backupa', body, httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }
  //  backupa(ids){
  //   let body = JSON.stringify(ids);
  //   var id = ids._id;
  //   let headers = new HttpHeaders();
  //       headers.append('Content-Type', 'application/json');
  //       headers.append('responseType', 'blob');
  //       // var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  //       console.log(id)
  //       return this._http.post(this.url + 'users/backupa',body, {headers: headers})
  //           .map((res: Response) => {
  //             // var blob = new Blob([(<any>res)._body], { type: contentType });            // size is 89KB instead of 52KB
  //             //  var blob = new Blob([(<any>res).arrayBuffer()], { type: 'application/zip' });  // size is 98KB instead of 52KB
  //             var blob = new Blob([(<any>res).blob()], { type: 'application/zip' });         // received Error: The request body isn't either a blob or an array buffer
  //             return blob;
  //            }
  //           );
  //         //console.log(casa);
  //  }

    backup2(ids) {
      let body = JSON.stringify(ids);
      let headers = new Headers();
      headers.append('Content-Type', 'application/zip');
      headers.append('responseType', 'ArrayBuffer');
  
      return this._http.get(this.url + 'users/backup/'+ids._id, {headers: headers})
          .map(res => {
            console.log(res);
              if (res.status == 400) {
                  this.handleError;
              } else if (res.status == 200) {
                  var blob = new Blob([(<any>res)._body], { type: 'application/json' });            // size is 89KB instead of 52KB
                    //  var blob = new Blob([(<any>res).arrayBuffer()], { type: 'application/zip' });  // size is 98KB instead of 52KB
                    //  var blob = new Blob([(<any>res).blob()], { type: 'application/zip' });         // received Error: The request body isn't either a blob or an array buffer
                    //  var blob = new Blob([res], {'type':"application/zip"});
                     var fileUrl = URL.createObjectURL(blob);
                     window.open(fileUrl);
                     return blob;
              }
          })
          .catch(this.handleError);
      }

      
   backup1(ids) {
    let body = JSON.stringify(ids);
    let headers = new Headers();
    headers.append('Content-Type', 'application/zip');
    headers.append('responseType', 'ArrayBuffer');

    return this._http.post(this.url + 'users/backupa',body, {headers: headers})
        .map(res => {
          console.log(res);
            if (res.status == 400) {
                this.handleError;
            } else if (res.status == 200) {
              
                //var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                // var blob = new Blob([(<any>response)._body], { type: 'application/zip' });            // size is 89KB instead of 52KB
                  //  var blob = new Blob([(<any>response).arrayBuffer()], { type: 'application/zip' });  // size is 98KB instead of 52KB
                   // var blob = new Blob([(<any>response).blob()], { type: 'application/zip' });         // received Error: The request body isn't either a blob or an array buffer
                   var file = new Blob([res], {'type':"application/zip"});
                   var fileUrl = URL.createObjectURL(file);
                   window.open(fileUrl);
                   return file;
            }
        })
        .catch(this.handleError);
    }


    backup3(ids) {
      
      let token = localStorage.token;
      let headerObj = {
        'Authorization': token,
        'responseType': 'ArrayBuffer'
      };
      let headers = new Headers(headerObj);
      return this._http.get(this.url + 'users/backup/'+ids, { headers: headers })
        .map((res) =>{
          console.log(res);
           var blob = new Blob([res['_body']], { type: 'application/zip' })
           var crypt= encodeURI(res.url);
           window.open(crypt);
           return blob;
        })
        .catch(this.handleError);
  
    }
  }