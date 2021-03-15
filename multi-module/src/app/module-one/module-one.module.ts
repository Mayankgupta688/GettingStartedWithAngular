import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentModuleOneComponent } from './component-module-one/component-module-one.component';
import {SharedModuleModule} from "../shared-module/shared-module.module"

@NgModule({
  declarations: [
    ComponentModuleOneComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ], exports: [
    ComponentModuleOneComponent
  ]
})
export class ModuleOneModule { }
