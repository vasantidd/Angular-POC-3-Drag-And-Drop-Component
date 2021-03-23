import { Component, Input } from "@angular/core";
import { EleComponent } from "../element-interface.component";

@Component({
  template: `
    <h4>{{ data.name }}</h4>
    <h5>{{ data.bio }}</h5>
    <div class="btnclass">
      <button type="button" class="btn">Click Me</button>
    </div>
  `
})
export class ButtonElementComponent implements EleComponent {
  @Input() data: any;
}
