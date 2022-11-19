import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPsicologicaComponent } from './ficha-psicologica.component';

describe('FichaPsicologicaComponent', () => {
  let component: FichaPsicologicaComponent;
  let fixture: ComponentFixture<FichaPsicologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaPsicologicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaPsicologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
