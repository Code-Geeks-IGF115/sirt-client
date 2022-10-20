import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaDieteticaComponent } from './historia-dietetica.component';

describe('HistoriaDieteticaComponent', () => {
  let component: HistoriaDieteticaComponent;
  let fixture: ComponentFixture<HistoriaDieteticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaDieteticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaDieteticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
