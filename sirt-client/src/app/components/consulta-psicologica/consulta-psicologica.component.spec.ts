import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPsicologicaComponent } from './consulta-psicologica.component';
import {MatFormFieldModule} from '@angular/material/form-field';

describe('ConsultaPsicologicaComponent', () => {
  let component: ConsultaPsicologicaComponent;
  let fixture: ComponentFixture<ConsultaPsicologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPsicologicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaPsicologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
