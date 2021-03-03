import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app/app.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AddingFunctionComponent } from './components/adding-function/adding-function.component';
import { TemplateReferenceComponent } from './components/template-reference/template-reference.component';
import { AttrBindingComponent } from './components/attr-binding/attr-binding.component';
import { EventDataComponent } from './components/event-data/event-data.component';
import { ConditionalOperationComponent } from './components/conditional-operation/conditional-operation.component';
import { DataIterationComponent } from './components/data-iteration/data-iteration.component';
import { TwoWayComponent } from './components/two-way/two-way.component';

import { FormsModule } from "@angular/forms";
import { TwoWayOtherComponent } from './components/two-way-other/two-way-other.component';

@NgModule({
    declarations: [AppComponent, HomeComponent,FooterComponent, AddingFunctionComponent, TemplateReferenceComponent, AttrBindingComponent, EventDataComponent, ConditionalOperationComponent, DataIterationComponent, TwoWayComponent, TwoWayOtherComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [TwoWayOtherComponent]
})
export class ApplicationModule { }