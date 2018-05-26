import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../../services/peticiones.service';
import { FinalWork } from '../../../modelo/finalWork';

@Component({
  selector: 'app-add-final-work',
  templateUrl: './add-final-work.component.html',
  styleUrls: ['./add-final-work.component.css'],
  providers: [PeticionesService]
})
export class AddFinalWorkComponent implements OnInit {
  public facilitators;
  public model: FinalWork;

  constructor(
    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.model = new FinalWork(null, "", "", "");
  }

  ngOnInit() {
    this.queryFacilitators();
  }
  queryFacilitators() {
    this._peticionesService.getPrograms().subscribe(response => {
       this.facilitators = response;
       console.log(this.facilitators);
    },
       error => {
          console.log(<any>error);
       });
 }
 cancel() {
    this.router.navigate(['home/finalWork']);
 }
 onSubmit() {
    console.log(this.model);
 }
 save() {
    if ((this.model.name == '') || (this.model.origin == '')) {
       window.alert("Asegurese de llenar todos los campos")
    } else {
       if (this.model.date_start < new Date()) {
          window.alert("Asegurese que la fecha sea mayor a la de hoy")
       } else {
          console.log(this.model);
          this._peticionesService.addFinalWork(this.model).subscribe(response => {
             //this.messageEvent.emit();
             //this.close.nativeElement.click();
             this.router.navigate(['/home/events']);
             alert("El evento se creo con exito");
          });

       }
    }
 }
}