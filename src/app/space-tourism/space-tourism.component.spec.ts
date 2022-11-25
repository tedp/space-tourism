import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SpaceTourismComponent } from './space-tourism.component';

describe('SpaceTourismComponent', () => {
  let component: SpaceTourismComponent;
  let fixture: ComponentFixture<SpaceTourismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceTourismComponent, RouterTestingModule],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceTourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
