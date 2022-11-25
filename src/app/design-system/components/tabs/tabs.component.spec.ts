import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponent, Tab } from './tabs.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

describe('TabsComponent', () => {
  let testHostComponent: TestHostComponent;
  let component: TabsComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsComponent],
      declarations: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(
      By.directive(TabsComponent)
    ).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selected navigation', () => {
    it('when initialise the selected tab index is 1', () => {
      expect(component.selectedTabIndex).toEqual(1);
    });

    it('when tab selected should emit selected tab name', () => {
      jest.spyOn(component.selectedTabChanged, 'emit');
      const tabItems = fixture.debugElement.queryAll(By.css('.tablist button'));

      tabItems[0].nativeElement.click();
      fixture.detectChanges();

      expect(tabItems.length).toEqual(2);
      expect(component.selectedTabChanged).toHaveBeenCalledWith('tab1');
    });
  });
});

@Component({
  selector: 'test-host',
  template: `
    <app-tabs
      [tabs]="tabs"
      [selectedTabIndex]="selectedTabIndex"
      (selectedTabChanged)="onSelectedTabChanged($event)"
    ></app-tabs>
  `,
})
export class TestHostComponent {
  selectedTabIndex = 1;
  navLinks: Tab[] = [{ name: 'tab1' }, { name: 'tab2' }];

  onSelectedNavChanged(selectedTabIndex: number) {
    this.selectedTabIndex = selectedTabIndex;
  }
}
