import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Tab, TabsComponent } from 'pdk';
import { State } from '../../reducers/index';
import {
  ContentServiceService,
  Destination,
} from '../services/content-service.service';
import { selectRouteParam } from '../../router.selectors';
import { selectDestinations } from '../reducers/space-tourism.reducer';
import { loadCurrenDestinationName } from '../actions/space-tourism.actions';
import { selectCurrentDestination } from '../selectors/space-tourism.selectors';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, TabsComponent],
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent {
  selectedPlanet$: Observable<string | undefined>;
  destinations$: Observable<Destination[]>;
  currentDestination$: Observable<Destination | undefined>;
  selectedPlanetName?: string;

  destinationTabs: Tab[] = [
    { name: 'moon' },
    { name: 'mars' },
    { name: 'europa' },
    { name: 'titan' },
  ];

  constructor(
    public contentService: ContentServiceService,
    private router: Router,
    private store: Store<State>
  ) {
    this.selectedPlanet$ = this.store.select(selectRouteParam('planet'));
    this.destinations$ = this.store.select(selectDestinations);
    this.currentDestination$ = this.store.select(selectCurrentDestination);
  }

  selectPlanet(planetIndex: number) {
    this.selectedPlanetName = this.destinationTabs[planetIndex].name;
    this.store.dispatch(
      loadCurrenDestinationName({
        destinationName: this.selectedPlanetName,
      })
    );
    this.router.navigate(['destinations', this.selectedPlanetName]);
  }
}
