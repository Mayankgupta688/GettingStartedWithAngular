import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app/app.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AddingFunctionComponent } from './components/adding-function/adding-function.component';
import { TemplateReferenceComponent } from './components/template-reference/template-reference.component';

@NgModule({
    declarations: [AppComponent, HomeComponent,FooterComponent, AddingFunctionComponent, TemplateReferenceComponent],
    imports: [BrowserModule],
    bootstrap: [AddingFunctionComponent]
})
export class ApplicationModule { }