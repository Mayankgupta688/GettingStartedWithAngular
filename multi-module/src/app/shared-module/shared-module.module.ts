import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentComponent } from './shared-component/shared-component.component';

@NgModule({
  declarations: [SharedComponentComponent],
  imports: [
    CommonModule
  ], exports: [
    SharedComponentComponent
  ]
})
export class SharedModuleModule { }
