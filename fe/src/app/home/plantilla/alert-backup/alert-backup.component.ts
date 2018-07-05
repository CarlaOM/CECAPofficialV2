import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PeticionesService } from '../../../services/peticiones.service';
 
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-backup',
  templateUrl: './alert-backup.component.html',
  styleUrls: ['./alert-backup.component.css'],
  providers: [ PeticionesService],
}) 
export class AlertBackupComponent implements OnInit {
  @ViewChild("close", {read: ElementRef}) close: ElementRef;
  constructor(
    private _peticionesService: PeticionesService,
     private route: ActivatedRoute,
     private router: Router
  ) { }

  ngOnInit() {
  }
   continuar(){
    this.router.navigate(['/home/events/add']);
    this.close.nativeElement.click();
   }

}
