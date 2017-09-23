import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    SpinnerComponent
  ],
  exports: [
    PageHeaderComponent,
    PageFooterComponent,
    SpinnerComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [

      ]
    };
  }
}
