import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [OverviewComponent, ProjectComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
