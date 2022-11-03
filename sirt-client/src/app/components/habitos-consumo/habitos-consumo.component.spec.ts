import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitosConsumoComponent } from './habitos-consumo.component';

describe('HabitosConsumoComponent', () => {
  let component: HabitosConsumoComponent;
  let fixture: ComponentFixture<HabitosConsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitosConsumoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitosConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
