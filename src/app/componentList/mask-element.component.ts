import { Component, Input } from "@angular/core";
import { EleComponent } from "../element-interface.component";

@Component({
  template: `
    <h4>{{ data.name }}</h4>
    <h5>{{ data.bio }}</h5>
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        mask="(999) 999-9999"
        placeholder="Telephone Number"
        aria-label="Telephone number 10 digits only"
      />
      <span class="help-block">(999) 999-9999</span>
    </div>
  `
})
export class MaskElementComponet implements EleComponent {
  @Input() data: any;
}
