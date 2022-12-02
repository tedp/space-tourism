import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  Tab,
  TabsComponent,
} from '../../design-system/components/tabs/tabs.component';
import { selectRouteParam } from '../../router.selectors';
import { loadCurrenTechnologyName } from '../actions/space-tourism.actions';
import { selectTechnologies, State } from '../reducers/space-tourism.reducer';
import { selectCurrentTechnology } from '../selectors/space-tourism.selectors';
import { Technology } from '../services/content-service.service';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule, TabsComponent],
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent {
  selectedTechnologyName$: Observable<string | undefined>;
  technologies$: Observable<Technology[]>;
  currentTechnology$: Observable<Technology | undefined>;
  selectedTechnologyName?: string;

  tabs: Tab[] = [
    { name: 'launch-vehicle' },
    { name: 'spaceport' },
    { name: 'space-capsule' },
  ];

  constructor(private router: Router, private store: Store<State>) {
    this.selectedTechnologyName$ = this.store.select(
      selectRouteParam('techName')
    );
    this.technologies$ = this.store.select(selectTechnologies);
    this.currentTechnology$ = this.store.select(selectCurrentTechnology);
  }

  selectTechnology(technologyIndex: number) {
    this.selectedTechnologyName = this.tabs[technologyIndex].name;
    this.store.dispatch(
      loadCurrenTechnologyName({
        technologyName: this.selectedTechnologyName,
      })
    );
    this.router.navigate(['technology', this.selectedTechnologyName]);
  }
}
