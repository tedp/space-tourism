import { Component } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavComponent, NavLink } from './nav.component';

@Component({
  selector: 'test-host',
  template: `
    <app-nav
      [navLinks]="navLinks"
      [selectedNavIndex]="selectedNavIndex"
      (selectedNavChange)="onSelectedNavChanged($event)"
    ></app-nav>
  `,
})
export class TestHostComponent {
  selectedNavIndex = 1;
  navLinks: NavLink[] = [
    { title: 'nav1', link: 'link-nav1' },
    { title: 'nav2', link: 'link-nav2' },
  ];

  onSelectedNavChanged(selectedNavIndex: number) {
    this.selectedNavIndex = selectedNavIndex;
  }
}

describe('NavComponent', () => {
  let testHostComponent: TestHostComponent;
  let component: NavComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let router: Router;

  const routes: Routes = [
    { path: 'link-nav1', component: TestHostComponent },
    { path: 'link-nav2', component: TestHostComponent },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [RouterTestingModule.withRoutes(routes), NavComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              routeConfig: {
                children: ['', 'destinations'],
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(
      By.directive(NavComponent)
    ).componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selected navigation', () => {
    it('when initialise the selected nav index is 1', () => {
      expect(component.selectedNavIndex).toEqual(1);
    });

    it('when navigation selected should emit selected navigation', fakeAsync(() => {
      jest.spyOn(router, 'navigate');
      const navItems = fixture.debugElement.queryAll(
        By.css('.primary-navigation a')
      );

      navItems[0].nativeElement.click();
      tick();
      fixture.detectChanges();

      expect(navItems.length).toEqual(2);
      // expect(router.url).toEqual('');
    }));
  });
});
