import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentServiceService } from '../services/content-service.service';
import { Router } from '@angular/router';
import {
  TabsComponent,
  Tab,
} from '../../design-system/components/tabs/tabs.component';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, TabsComponent],
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent {
  constructor(
    public contentService: ContentServiceService,
    private router: Router
  ) {}

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
