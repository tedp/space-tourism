import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderLargeComponent } from './slider-large.component';

describe('SliderLargeComponent', () => {
  let component: SliderLargeComponent;
  let fixture: ComponentFixture<SliderLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SliderLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
