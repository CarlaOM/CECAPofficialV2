import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { GLOBAL, Identity } from '../../services/global';

@Component({
  selector: 'app-contra',
  templateUrl: './contra.component.html',
  styleUrls: ['./contra.component.css'],
  providers: [UserService]
})
export class ContraComponent implements OnInit {
  public user = { password_hash: '' };
  public status;
  constructor(
    private _router: Router,
    private _userService: UserService,
  ) { }

  ngOnInit() {

  }
  onSubmit() {
    console.log(this.user);
    this._userService.change(Identity._id, this.user).subscribe(
      response => {
        //  console
        this._router.navigate(['/']);
      },
      error => {
        //console.log(<any>error);
        var errorMessage = <any>error;
        if (errorMessage != null) {
          var body = JSON.parse(error.body);
          this.status = 'error';
        }
      }
    );
  }

}
