import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Tab } from 'pdk';
import { DestinationsComponent } from './destinations.component';
import { MockState, MockStore, provideMockStore } from '@ngrx/store/testing';
import { State, reducers } from '../../reducers/index';
import { StoreModule, Store } from '@ngrx/store';
import { selectRouteParam, selectRouteParams } from '../../router.selectors';
import { CommonModule } from '@angular/common';

describe('DestinationsComponent', () => {
  let component: DestinationsComponent;
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let router: Router;
  let store: MockStore<State>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [
        DestinationsComponent,
        RouterTestingModule,
        StoreModule.forRoot(reducers, { runtimeChecks: {} }),
      ],
      providers: [provideMockStore({ initialState: MockState })],
    })
      .overrideComponent(DestinationsComponent, {
        set: { imports: [CommonModule, TabsComponent] },
      })
      .compileComponents();

    router = TestBed.inject(Router);
    store = TestBed.inject(Store<State>) as MockStore<State>;
    store.overrideSelector(selectRouteParams, { planet: 'mars' });

    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(
      By.directive(DestinationsComponent)
    ).componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select correct planet when planet based on the current route param', () => {
    const tabsComponent: TabsComponent = fixture.debugElement.query(
      By.directive(TabsComponent)
    ).componentInstance;

    expect(tabsComponent.selectedTabName).toEqual('mars');
  });

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
  @Input() selectedTabIndex = 0;
  @Input() selectedTabName?: string;

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
