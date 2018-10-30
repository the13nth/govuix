import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherCard1Component} from './weather-card-1.component';

describe('WeatherCardComponent', () => {
  let component: WeatherCard1Component;
  let fixture: ComponentFixture<WeatherCard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherCard1Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
