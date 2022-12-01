import { TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { selectDestinations, State } from '../reducers/space-tourism.reducer';
import {
  Destination,
  ContentServiceService,
} from '../services/content-service.service';
import { DestinationsGuard } from './destinations.guard';
import { loadSpaceTourisms } from '../actions/space-tourism.actions';
import { DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';

describe('DestinationsGuard', () => {
  let guard: DestinationsGuard;
  let store: MockStore<State>;
  let mockedSelectDestinationsSelector: MemoizedSelector<
    any,
    Destination[],
    DefaultProjectorFn<Destination[]>
  >;
  let getDestinations: jest.Mock<Destination[]>;

  beforeEach(() => {
    getDestinations = jest.fn();

    TestBed.configureTestingModule({
      providers: [
        provideMockStore(),
        {
          provide: ContentServiceService,
          useValue: {
            getDestinations,
          },
        },
      ],
    });

    store = TestBed.inject(MockStore<State>);
    guard = TestBed.inject(DestinationsGuard);

    mockedSelectDestinationsSelector = store.overrideSelector(
      selectDestinations,
      [{} as Destination]
    );
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('Should not load destinations when already in store', () => {
    jest.spyOn(store, 'dispatch');

    const expected = cold('(a|)', { a: true });

    expect(store.dispatch).not.toHaveBeenCalled();
    expect(guard.canActivate()).toBeObservable(expected);
  });

  it('Should load destinations when not already in store', () => {
    getDestinations.mockReturnValue([{ name: 'Europa' } as Destination]);
    store.resetSelectors();
    mockedSelectDestinationsSelector.setResult([]);
    store.refreshState();
    jest.spyOn(store, 'dispatch');

    const expected = cold('(a|)', { a: true });

    expect(guard.canActivate()).toBeObservable(expected);
    expect(store.dispatch).toHaveBeenCalledWith(
      loadSpaceTourisms({ destinations: [{ name: 'Europa' } as Destination] })
    );
  });
});
