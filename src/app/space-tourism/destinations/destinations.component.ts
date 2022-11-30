import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentServiceService } from '../services/content-service.service';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { State } from '../../reducers/index';
import {
  TabsComponent,
  Tab,
} from '../../design-system/components/tabs/tabs.component';
import { Store } from '@ngrx/store';
import {
  selectCurrentRoute,
  selectFragment,
  selectRouteParam,
  selectRouteParams,
} from 'src/app/router.selectors';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, TabsComponent],
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent {
  selectedPlanet$: Observable<any>;

  constructor(
    public contentService: ContentServiceService,
    private router: Router,
    private store: Store<State>
  ) {
    this.selectedPlanet$ = this.store.select(selectRouteParam('planet'));
    // .pipe(map((planet) => console.log(planet)));
  }

  destinationTabs: Tab[] = [
    { name: 'moon' },
    { name: 'mars' },
    { name: 'europa' },
    { name: 'titan' },
  ];

  selectPlanet(planetIndex: number) {
    this.router.navigate([
      'destinations',
      this.destinationTabs[planetIndex].name,
    ]);
  }
}
