import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-facilitador',
  templateUrl: './edit-facilitador.component.html',
  styleUrls: ['./edit-facilitador.component.css']
})
export class EditFacilitadorComponent implements OnInit {
  public facilitadorName;
  public facilitadorjob;
  constructor() { }
  submitted = false;
  ngOnInit() {


  }
  onSubmit() { 
  }

}
