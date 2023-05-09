import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricDolarComponent } from './historic-dolar.component';

describe('HistoricDolarComponent', () => {
  let component: HistoricDolarComponent;
  let fixture: ComponentFixture<HistoricDolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricDolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricDolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
