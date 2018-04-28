import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  constructor() { }
  submitted = false;
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  model = [18, '','',4554,"", this.powers[0], ''];
  onSubmit() { this.submitted = true; }
  ngOnInit() {
  }

}
