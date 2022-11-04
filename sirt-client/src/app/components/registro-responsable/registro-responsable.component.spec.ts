import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroResponsableComponent } from './registro-responsable.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'

describe('RegistroResponsableComponent', () => {
  let component: RegistroResponsableComponent;
  let fixture: ComponentFixture<RegistroResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroResponsableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
