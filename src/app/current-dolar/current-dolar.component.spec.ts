import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDolarComponent } from './current-dolar.component';

describe('CurrentDolarComponent', () => {
  let component: CurrentDolarComponent;
  let fixture: ComponentFixture<CurrentDolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentDolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentDolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
