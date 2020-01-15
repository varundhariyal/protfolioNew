import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

const components = [NavComponent, FooterComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
  ],
  exports: [
    components,
  ]
})
export class SharedModule { }
