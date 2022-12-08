import { Component } from '@angular/core';
import {
  NavComponent,
  TabsComponent,
  SliderLargeComponent,
  SliderSmallComponent,
} from './components';

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [
    NavComponent,
    TabsComponent,
    SliderSmallComponent,
    SliderLargeComponent,
  ],
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.scss'],
})
export class DesignSystemComponent {}
