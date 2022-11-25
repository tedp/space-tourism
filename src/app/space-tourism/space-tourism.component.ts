import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  NavComponent,
  NavLink,
} from '../design-system/components/nav/nav.component';

@Component({
  selector: 'app-space-tourism',
  standalone: true,
  imports: [CommonModule, RouterModule, NavComponent],
  templateUrl: './space-tourism.component.html',
  styleUrls: ['./space-tourism.component.scss'],
})
export class SpaceTourismComponent {
  selectedNavIndex = 0;

  navLinks: NavLink[] = [
    { title: 'Home', link: 'intro' },
    { title: 'Destinations', link: 'destinations' },
    { title: 'Crew', link: 'crew' },
    { title: 'Technology', link: 'technology' },
  ];

  onSelectedNavChanged(selectedNavIndex: number) {
    this.selectedNavIndex = selectedNavIndex;
  }
}
