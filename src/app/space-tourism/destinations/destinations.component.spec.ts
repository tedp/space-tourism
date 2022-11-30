import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Tab } from '../../design-system/components/tabs/tabs.component';
import { DestinationsComponent } from './destinations.component';

describe('DestinationsComponent', () => {
  let component: DestinationsComponent;
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [DestinationsComponent, RouterTestingModule],
    })
      .overrideComponent(DestinationsComponent, {
        set: { imports: [TabsComponent] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(
      By.directive(DestinationsComponent)
    ).componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Use a route selector to get the current route for the planet

  describe('planet selection', () => {
    it('should select correct planet when planet changes', () => {
      jest.spyOn(router, 'navigate').mockImplementation();

      const tabsComponent: TabsComponent = fixture.debugElement.query(
        By.directive(TabsComponent)
      ).componentInstance;

      tabsComponent.emitSelectedIndex(1);

      expect(router.navigate).toHaveBeenCalledWith(['destinations', 'mars']);
    });
  });
});

@Component({
  selector: 'app-tabs',
  standalone: true,
  template: ` <pre>tabs: {{ tabs }}</pre>
    <pre>selectedTabIndex: {{ selectedTabIndex }}</pre>`,
})
export class TabsComponent {
  @Input() tabs: Tab[] = [];
  @Input() selectedTabIndex = 1;

  @Output() selectedTabChanged = new EventEmitter<number>();

  emitSelectedIndex(index: number) {
    this.selectedTabChanged.emit(index);
  }
}

@Component({
  selector: 'test-host',
  template: ` <app-destinations></app-destinations> `,
})
class TestHostComponent {}
