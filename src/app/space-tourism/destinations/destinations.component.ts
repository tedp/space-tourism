import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentServiceService } from '../services/content-service.service';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent {
  constructor(public contentService: ContentServiceService) {}
}
