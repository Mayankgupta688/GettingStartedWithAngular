  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuleOneModule } from './module-one/module-one.module';
import { ModuleTwoModule } from './module-two/module-two.module';

import {SharedModuleModule} from "./shared-module/shared-module.module"


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModuleOneModule,
    ModuleTwoModule,
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
