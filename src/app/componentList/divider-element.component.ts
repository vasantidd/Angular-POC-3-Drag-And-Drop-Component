import { Component, Input } from "@angular/core";
import { EleComponent } from "../element-interface.component";

@Component({
  template: `
    <h4>{{ data.name }}</h4>
   <h5>{{ data.bio }}</h5>
    <hr class="half-rule" />
  `,
  styleUrls: ["../app.component.css"]
})
export class DividerElementComponent implements EleComponent {
  @Input() data: any;
}
