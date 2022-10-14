import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAlimenticioComponent } from './plan-alimenticio.component';

describe('PlanAlimenticioComponent', () => {
  let component: PlanAlimenticioComponent;
  let fixture: ComponentFixture<PlanAlimenticioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanAlimenticioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanAlimenticioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
