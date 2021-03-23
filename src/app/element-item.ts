import { Type } from "@angular/core";

export class ElementItem {
  constructor(public component: Type<any>, public data: any) {}
}
