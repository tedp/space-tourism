import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import {
  Tab,
  TabsComponent,
} from '../../design-system/components/tabs/tabs.component';
import { State } from '../../reducers/index';
import { ContentServiceService } from '../services/content-service.service';
import { selectRouteParam } from '../../router.selectors';

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
