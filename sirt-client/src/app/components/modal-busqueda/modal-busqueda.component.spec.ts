import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBusquedaComponent } from './modal-busqueda.component';

describe('ModalBusquedaComponent', () => {
  let component: ModalBusquedaComponent;
  let fixture: ComponentFixture<ModalBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBusquedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
