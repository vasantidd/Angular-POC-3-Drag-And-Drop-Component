import { Component, Input } from "@angular/core";
import { EleComponent } from "../element-interface.component";

@Component({
  template: `
    <h4>{{ data.name }}</h4>
    <h5>{{ data.bio }}</h5>
    <div class="loader"></div>
  `,
  styleUrls: ["../app.component.css"]
})
export class SpinnerElementComponent implements EleComponent {
  @Input() data: any;
}
