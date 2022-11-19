import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaNutricionComponent } from './ficha-nutricion.component';

describe('FichaNutricionComponent', () => {
  let component: FichaNutricionComponent;
  let fixture: ComponentFixture<FichaNutricionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaNutricionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaNutricionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
