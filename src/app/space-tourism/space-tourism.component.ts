import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-space-tourism',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './space-tourism.component.html',
  styleUrls: ['./space-tourism.component.scss'],
})
export class SpaceTourismComponent {}
