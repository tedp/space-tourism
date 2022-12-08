import { NgModule } from '@angular/core';
import {
  NavComponent,
  SliderLargeComponent,
  SliderSmallComponent,
  TabsComponent,
} from './design-system/components';
import { DesignSystemComponent } from './design-system/design-system.component';

@NgModule({
  declarations: [],
  imports: [
    NavComponent,
    SliderLargeComponent,
    SliderSmallComponent,
    TabsComponent,
    DesignSystemComponent,
  ],
  exports: [
    NavComponent,
    SliderLargeComponent,
    SliderSmallComponent,
    TabsComponent,
    DesignSystemComponent,
  ],
})
export class PdkModule {}
