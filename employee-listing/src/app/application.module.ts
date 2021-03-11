import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

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
import { FormComponent } from './components/form/form.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ConcatComponent } from './components/concat/concat.component';
import { ConcatLength } from "./pipes/concat.pipe";
import { ReplaceCharacter } from "./pipes/replace.pipe";
import { ListComponent } from './components/list/list.component';
import { ListheaderComponent } from './components/listheader/listheader.component';
import { ListfooterComponent } from './components/listfooter/listfooter.component';
import { DetailsComponent } from './components/details/details.component';
import { RetrieveDataComponent } from './components/retrieve-data/retrieve-data.component';
import { EmployeeCounterComponent } from './components/employee-counter/employee-counter.component';
import { EmployeeCounterOtherComponent } from './components/employee-counter-other/employee-counter-other.component';
import { RetrieveDataOtherComponent } from './components/retrieve-data-other/retrieve-data-other.component';
import { DelayedComponentComponent } from './components/delayed-component/delayed-component.component'; 
import { DelayedRenderingDirective } from "./directives/delay.rendering.directive";

@NgModule({
    declarations: [ReplaceCharacter, AppComponent, HomeComponent,FooterComponent, AddingFunctionComponent, TemplateReferenceComponent, AttrBindingComponent, EventDataComponent, ConditionalOperationComponent, DataIterationComponent, TwoWayComponent, TwoWayOtherComponent, FormComponent, FiltersComponent, ConcatComponent, ConcatLength, ListComponent, ListheaderComponent, ListfooterComponent, DetailsComponent, RetrieveDataComponent, EmployeeCounterComponent, EmployeeCounterOtherComponent, RetrieveDataOtherComponent, DelayedComponentComponent, DelayedRenderingDirective],
    imports: [BrowserModule, FormsModule, HttpClientModule],
    bootstrap: [DelayedComponentComponent]
})
export class ApplicationModule { }