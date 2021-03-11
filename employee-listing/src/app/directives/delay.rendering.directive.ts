import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
    selector: '[delayRendering]'
})
export class DelayedRenderingDirective {

    constructor(private template: TemplateRef<any>, private container: ViewContainerRef) { }

    ngOnInit() {
        setTimeout(() => {
            this.container.createEmbeddedView(this.template)
        }, 5000)
    }
}