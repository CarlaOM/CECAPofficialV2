import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPesonsNivelacionComponent } from './lista-pesons-nivelacion.component';

describe('ListaPesonsNivelacionComponent', () => {
  let component: ListaPesonsNivelacionComponent;
  let fixture: ComponentFixture<ListaPesonsNivelacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPesonsNivelacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPesonsNivelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
