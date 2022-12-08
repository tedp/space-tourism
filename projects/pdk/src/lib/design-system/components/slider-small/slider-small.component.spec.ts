import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSmallComponent } from './slider-small.component';

describe('SliderSmallComponent', () => {
  let component: SliderSmallComponent;
  let fixture: ComponentFixture<SliderSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SliderSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
