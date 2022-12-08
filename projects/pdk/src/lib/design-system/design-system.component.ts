import { Component } from '@angular/core';

import { NavComponent, Tab, TabsComponent } from './components';

@Component({
  selector: 'app-design-system',
  standalone: true,
  imports: [NavComponent, TabsComponent],
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.scss'],
})
export class DesignSystemComponent {
  underlineTabs: Tab[] = [
    { name: 'Active' },
    { name: 'Tab 2' },
    { name: 'Tab 3' },
  ];

  smallDotTabs: Tab[] = [
    { name: 'Active' },
    { name: 'Tab 2' },
    { name: 'Tab 3' },
  ];

  numberedDotTabs: Tab[] = [
    { name: 'Active' },
    { name: 'Tab 2' },
    { name: 'Tab 3' },
  ];
}
