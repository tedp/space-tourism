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
  selectedNavIndex$: Observable<number>;

  constructor(
    private contenService: ContentServiceService,
    private router: Router
  ) {
    this.selectedNavIndex$ = router.events.pipe(
      filter((event: any) => event instanceof NavigationStart),
      map((event: NavigationStart) => this.getSelectedNavIndex(event.url))
    );
  }

  navLinks: NavLink[] = [
    { title: 'Home', link: '', exact: true },
    { title: 'Destinations', link: 'destinations', exact: false },
    { title: 'Crew', link: 'crew', exact: false },
    { title: 'Technology', link: 'technology', exact: false },
  ];

  getSelectedNavIndex(url: string): number {
    return this.navLinks.findIndex(
      (navLink) => navLink.link === url.substring(1)
    );
  }

  getHomeClass(selectedNavIndex: number | null): string {
    let navIndex: number;
    if (selectedNavIndex && selectedNavIndex >= 0) {
      navIndex = selectedNavIndex;
    } else {
      navIndex = this.getSelectedNavIndex(this.router.routerState.snapshot.url);
    }
    return '';
    // return `home--${(this, this.navLinks[navIndex].link)}`;
  }
}
