import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-vista-caja',
  templateUrl: './vista-caja.component.html',
  styleUrls: ['./vista-caja.component.css']
})
export class VistaCajaComponent implements OnInit {

  constructor(

    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goIngreso(){
    this.router.navigate(['/home/caja/ingreso']);
    

  }

}
