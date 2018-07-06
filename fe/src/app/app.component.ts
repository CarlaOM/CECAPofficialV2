import { Component } from '@angular/core';
import { UserService } from './services/user.service';
// import { AuthService } from "./services/authentication.service";

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'CECAP CONSULTING';
   public url: string;

   constructor(
      private _userService: UserService,
    //   private _userServiceAuth:AuthService
   ) {
   }
   ngOnInit() {
    //    this._userServiceAuth.initApp();
      this._userService.initApp();
   }
}
