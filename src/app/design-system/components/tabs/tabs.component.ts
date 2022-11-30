import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Tab {
  name: string;
}
@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() tabs: Tab[] = [];
  @Input() selectedTabIndex = 0;

  @Output() selectedTabChanged = new EventEmitter<string>();

  tablistKeyDown(e: Event, tablist: HTMLDivElement) {
    console.log(e);
    console.log(tablist.children);
  }
}
