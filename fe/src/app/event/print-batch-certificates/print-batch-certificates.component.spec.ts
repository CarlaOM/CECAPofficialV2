import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintBatchCertificatesComponent } from './print-batch-certificates.component';

describe('PrintBatchCertificatesComponent', () => {
  let component: PrintBatchCertificatesComponent;
  let fixture: ComponentFixture<PrintBatchCertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintBatchCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintBatchCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
