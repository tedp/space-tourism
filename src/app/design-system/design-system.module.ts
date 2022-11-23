import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignSystemRoutingModule } from './design-system-routing.module';
import { DesignSystemComponent } from './design-system.component';


@NgModule({
  declarations: [
    DesignSystemComponent
  ],
  imports: [
    CommonModule,
    DesignSystemRoutingModule
  ]
})
export class DesignSystemModule { }
