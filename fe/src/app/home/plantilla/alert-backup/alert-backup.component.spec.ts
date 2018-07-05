import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertBackupComponent } from './alert-backup.component';

describe('AlertBackupComponent', () => {
  let component: AlertBackupComponent;
  let fixture: ComponentFixture<AlertBackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertBackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
