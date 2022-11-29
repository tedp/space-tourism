import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderSmallComponent } from '../../design-system/components/slider-small/slider-small.component';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CommonModule, SliderSmallComponent],
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent {}
