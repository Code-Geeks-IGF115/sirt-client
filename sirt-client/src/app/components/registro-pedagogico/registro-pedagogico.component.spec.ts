import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPedagogicoComponent } from './registro-pedagogico.component';

describe('RegistroPedagogicoComponent', () => {
  let component: RegistroPedagogicoComponent;
  let fixture: ComponentFixture<RegistroPedagogicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPedagogicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPedagogicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
