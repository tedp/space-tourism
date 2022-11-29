import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationStart } from '@angular/router';
import { ContentServiceService } from './services/content-service.service';
import {
  NavComponent,
  NavLink,
} from '../design-system/components/nav/nav.component';
import { filter, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-space-tourism',
  standalone: true,
  imports: [CommonModule, RouterModule, NavComponent],
  templateUrl: './space-tourism.component.html',
  styleUrls: ['./space-tourism.component.scss'],
})
export class SpaceTourismComponent {
  constructor(
    private contenService: ContentServiceService,
    private router: Router
  ) {}

  navLinks: NavLink[] = [
    { title: 'Home', link: '', exact: true },
    { title: 'Destinations', link: 'destinations', exact: false },
    { title: 'Crew', link: 'crew', exact: false },
    { title: 'Technology', link: 'technology', exact: false },
  ];

  getHomeClass(): string {
    const parialClassName = this.router.routerState.snapshot.url
      .split('/')
      .join('-');
    return `home-${parialClassName}`;
  }
}
