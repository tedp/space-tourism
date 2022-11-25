import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent, NavLink } from './nav.component';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

describe('NavComponent', () => {
  let testHostComponent: TestHostComponent;
  let component: NavComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NavComponent],
      declarations: [TestHostComponent],
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selected navigation', () => {
    it('when navigation selected should emit selected navigation', () => {
      jest.spyOn(component.selectedNavChange, 'emit');
      const navItems = fixture.debugElement.queryAll(
        By.css('.primary-navigation a')
      );

      expect(component.selectedNavIndex).toEqual(0);

      navItems[1].nativeElement.click();
      fixture.detectChanges();

      const selectedNav = fixture.debugElement.query(By.css('.active'));

      expect(navItems.length).toEqual(2);
      expect(component.selectedNavChange.emit).toHaveBeenCalledWith(1);
      expect(component.selectedNavIndex).toEqual(1);
    });
  });
});

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
  selectedNavIndex = 0;
  navLinks: NavLink[] = [
    { title: 'nav1', link: 'link-nav1' },
    { title: 'nav2', link: 'link-nav2' },
  ];

  onSelectedNavChanged(selectedNavIndex: number) {
    this.selectedNavIndex = selectedNavIndex;
  }
}
