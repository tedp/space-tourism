import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TabsComponent, Tab } from 'pdk';
import { Observable } from 'rxjs';
import { Crew } from '../services/content-service.service';
import { Router } from '@angular/router';
import { selectCrew, State } from '../reducers/space-tourism.reducer';
import { Store } from '@ngrx/store';
import { selectRouteParam } from '../../router.selectors';
import { selectCurrentCrew } from '../selectors/space-tourism.selectors';
import { loadCurrenCrewName } from '../actions/space-tourism.actions';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CommonModule, TabsComponent],
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent {
  selectedCrewName$: Observable<string | undefined>;
  crew$: Observable<Crew[]>;
  currentCrew$: Observable<Crew | undefined>;
  selectedCrewName?: string;

  tabs: Tab[] = [
    { name: 'douglas-hurley' },
    { name: 'anousheh-ansari' },
    { name: 'mark-shuttleworth' },
    { name: 'victor-glover' },
  ];

  constructor(private router: Router, private store: Store<State>) {
    this.selectedCrewName$ = this.store.select(selectRouteParam('crewName'));
    this.crew$ = this.store.select(selectCrew);
    this.currentCrew$ = this.store.select(selectCurrentCrew);
  }

  selectCrew(crewIndex: number) {
    this.selectedCrewName = this.tabs[crewIndex].name;
    this.store.dispatch(
      loadCurrenCrewName({
        crewName: this.selectedCrewName,
      })
    );
    this.router.navigate(['crew', this.selectedCrewName]);
  }
}
