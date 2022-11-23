import { Component } from '@angular/core';
import { NavComponent } from './components';

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.scss'],
})
export class DesignSystemComponent {}
