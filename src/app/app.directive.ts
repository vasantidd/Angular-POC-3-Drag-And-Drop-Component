import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[adHost]"
})
export class AppDirective {

  constructor(readonly viewContainerRef: ViewContainerRef) {}
}
