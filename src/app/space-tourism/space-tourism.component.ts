import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  NavComponent,
  NavLink,
} from '../design-system/components/nav/nav.component';
import { ContentServiceService } from './services/content-service.service';

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

  get selectedRouteClass() {
    const routeSegment = this.router.routerState.snapshot.url.split('/')[1];
    return routeSegment === '' ? 'home' : routeSegment;
  }

  private getBackgroundImage(): { [klass: string]: any } | null {
    const backgroundImage = this.contenService.getBackgroundImage(
      this.router.routerState.snapshot.url
    );

    return backgroundImage
      ? {
          'background-image': `url(../${backgroundImage})`,
          'background-position': 'center',
          'background-size': 'auto',
        }
      : null;
  }
}
