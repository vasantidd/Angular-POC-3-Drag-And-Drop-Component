import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppDirective } from "./app.directive";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ElementService } from "./element.service";

import { DragDropComponent } from "./appchild.component";
import { TextboxElementComponent } from "./componentList/textbox-element.component";
import { HeaderElementComponent } from "./componentList/header-element.component";
import { TableElementComponent } from "./componentList/table-element.component";
import { FooterElementComponet } from "./componentList/footer-element.component";
import { TimeElementComponent } from "./componentList/time-element.component";
import { DropdownElementComponent } from "./componentList/dropdown-element.component";
import { SpinnerElementComponent } from "./componentList/spinner-element.component";
import { DividerElementComponent } from "./componentList/divider-element.component";
import { MaskElementComponet } from "./componentList/mask-element.component";
import { NgxMaskModule } from "ngx-mask";
import { ButtonElementComponent } from "./componentList/button-element.component";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    NgxMaskModule.forRoot()
  ],
  providers: [ElementService],
  declarations: [AppComponent, HelloComponent, AppDirective, DragDropComponent],
  bootstrap: [AppComponent],
  entryComponents: [
    ButtonElementComponent,
    TextboxElementComponent,
    HeaderElementComponent,
    TableElementComponent,
    FooterElementComponet,
    TimeElementComponent,
    DropdownElementComponent,
    SpinnerElementComponent,
    DividerElementComponent,
    MaskElementComponet
  ]
})
export class AppModule {}
