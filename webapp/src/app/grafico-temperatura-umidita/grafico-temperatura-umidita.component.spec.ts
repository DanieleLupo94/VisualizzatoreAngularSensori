import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoTemperaturaUmiditaComponent } from './grafico-temperatura-umidita.component';

describe('GraficoTemperaturaUmiditaComponent', () => {
  let component: GraficoTemperaturaUmiditaComponent;
  let fixture: ComponentFixture<GraficoTemperaturaUmiditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoTemperaturaUmiditaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoTemperaturaUmiditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
