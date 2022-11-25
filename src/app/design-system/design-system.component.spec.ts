import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { DesignSystemComponent } from './design-system.component';

describe('DesignSystemComponent', () => {
  let component: DesignSystemComponent;
  let fixture: ComponentFixture<DesignSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignSystemComponent],
    })
      .overrideComponent(NavComponent, {
        set: { providers: [{ provide: ActivatedRoute, useValue: {} }] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(DesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
