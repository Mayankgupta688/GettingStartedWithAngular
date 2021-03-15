import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentModuleTwoComponent } from './component-module-two/component-module-two.component';
import {SharedModuleModule} from "../shared-module/shared-module.module"

@NgModule({
  declarations: [
    ComponentModuleTwoComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ], exports: [
    ComponentModuleTwoComponent
  ]
})
export class ModuleTwoModule { }
