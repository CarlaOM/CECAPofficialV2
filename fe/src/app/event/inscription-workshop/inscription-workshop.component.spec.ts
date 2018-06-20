import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionWorkshopComponent } from './inscription-workshop.component';

describe('InscriptionWorkshopComponent', () => {
  let component: InscriptionWorkshopComponent;
  let fixture: ComponentFixture<InscriptionWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
