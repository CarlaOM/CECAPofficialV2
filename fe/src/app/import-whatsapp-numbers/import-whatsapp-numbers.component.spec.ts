import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportWhatsappNumbersComponent } from './import-whatsapp-numbers.component';

describe('ImportWhatsappNumbersComponent', () => {
  let component: ImportWhatsappNumbersComponent;
  let fixture: ComponentFixture<ImportWhatsappNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportWhatsappNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportWhatsappNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
