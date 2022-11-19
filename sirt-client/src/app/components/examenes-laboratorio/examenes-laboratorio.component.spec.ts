import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesLaboratorioComponent } from './examenes-laboratorio.component';

describe('ExamenesLaboratorioComponent', () => {
  let component: ExamenesLaboratorioComponent;
  let fixture: ComponentFixture<ExamenesLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesLaboratorioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenesLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
