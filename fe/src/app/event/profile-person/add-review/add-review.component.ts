import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../../services/peticiones.service';
import { Review } from '../../../modelo/review';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
  providers: [PeticionesService]
})
export class AddReviewComponent implements OnInit {
  public model: Review;
  public states;  

  constructor(
    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.model = new Review(null, "", null);
  }

  ngOnInit() {
    this.selectStates();
  }
  selectStates(){
    
  }
  onSubmit() {
    console.log(this.model);
  }
  save() {
    if ((this.model.observations == '')) {
      window.alert("Asegurese de llenar todos los campos")
    } else {
      if (this.model.date_review < new Date()) {
        window.alert("Asegurese que la fecha sea mayor a la de hoy")
      } else {
        console.log(this.model);
        // envia el id de la persona q recibes como parametro al entrar a esta ventana, y el finalwork q llenaste en la vista
        this._peticionesService.addFinalWork('this.personId', Review).subscribe(response => {
          //this.messageEvent.emit();
          //this.close.nativeElement.click();
          this.router.navigate(['/home/detailsProfile']);
          alert("La revision se creo con exito");
        });
      }
    }
  }
  cancel() {
    // this.router.navigate(['home/review']);
    window.history.back();
  }
}
