import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaExpedienteComponent } from './busqueda-expediente.component';

describe('BusquedaExpedienteComponent', () => {
  let component: BusquedaExpedienteComponent;
  let fixture: ComponentFixture<BusquedaExpedienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaExpedienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
