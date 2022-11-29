import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentServiceService } from '../services/content-service.service';
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
  constructor(public contentService: ContentServiceService) {}

  destinationTabs: Tab[] = [
    { name: 'moon' },
    { name: 'mars' },
    { name: 'europa' },
    { name: 'titan' },
  ];
}
