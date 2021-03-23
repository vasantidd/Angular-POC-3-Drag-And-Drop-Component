import { Injectable } from "@angular/core";
import { ButtonElementComponent } from "./componentList/button-element.component";
import { DividerElementComponent } from "./componentList/divider-element.component";
import { DropdownElementComponent } from "./componentList/dropdown-element.component";

import { ElementItem } from "./element-item";
import { FooterElementComponet } from "./componentList/footer-element.component";
import { HeaderElementComponent } from "./componentList/header-element.component";
import { MaskElementComponet } from "./componentList/mask-element.component";
import { SpinnerElementComponent } from "./componentList/spinner-element.component";
import { TableElementComponent } from "./componentList/table-element.component";
import { TextboxElementComponent } from "./componentList/textbox-element.component";
import { TimeElementComponent } from "./componentList/time-element.component";

@Injectable()
export class ElementService {

  getElement() {
    return [
      new ElementItem(HeaderElementComponent, {
        name: "Header",
        bio: "This is Header Component"
      }),
      new ElementItem(TableElementComponent, {
        name: "Table",
        bio: "This is Table component"
      }),
      new ElementItem(FooterElementComponet, {
        name: "Footer",
        bio: "This is Footer Component"
      }),
      new ElementItem(TimeElementComponent, {
        name: "Time",
        bio: "This is Time Component"
      }),
      new ElementItem(DropdownElementComponent, {
        name: "Dropdown",
        bio: "This is Dropdown Component"
      }),
      new ElementItem(SpinnerElementComponent, {
        name: "Spinner",
        bio: "This is Spinner Component"
      }),

      new ElementItem(ButtonElementComponent, {
        name: "Button",
        bio: "This is Button Component"
      }),
      new ElementItem(TextboxElementComponent, {
        name: "Textbox",
        bio: "This is Textbox Component"
      }),
      new ElementItem(DividerElementComponent, {
        name: "Divider",
        bio: "This is Divider Component"
      }),
      new ElementItem(MaskElementComponet, {
        name: "Mask",
        bio: "This is Mask Component"
      })
    ];
  }
}
