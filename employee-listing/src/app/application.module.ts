import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app/app.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AddingFunctionComponent } from './components/adding-function/adding-function.component';
import { TemplateReferenceComponent } from './components/template-reference/template-reference.component';
import { AttrBindingComponent } from './components/attr-binding/attr-binding.component';
import { EventDataComponent } from './components/event-data/event-data.component';

@NgModule({
    declarations: [AppComponent, HomeComponent,FooterComponent, AddingFunctionComponent, TemplateReferenceComponent, AttrBindingComponent, EventDataComponent],
    imports: [BrowserModule],
    bootstrap: [EventDataComponent]
})
export class ApplicationModule { }