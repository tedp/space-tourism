import { NgModule } from '@angular/core';
import { NavComponent, TabsComponent } from './design-system/components';
import { DesignSystemComponent } from './design-system/design-system.component';

@NgModule({
  declarations: [],
  imports: [NavComponent, TabsComponent, DesignSystemComponent],
  exports: [NavComponent, TabsComponent, DesignSystemComponent],
})
export class PdkModule {}
