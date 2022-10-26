import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticAppComponent } from './statistic-app.component';

describe('StatisticAppComponent', () => {
  let component: StatisticAppComponent;
  let fixture: ComponentFixture<StatisticAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
