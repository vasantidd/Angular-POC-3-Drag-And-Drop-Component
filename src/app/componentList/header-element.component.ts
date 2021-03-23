import { Component, Input } from "@angular/core";
import { EleComponent } from "../element-interface.component";

@Component({
  template: `
    <h4>{{ data.name }}</h4>
    <h5>{{ data.bio }}</h5>
    <header>
      <h3>A heading here with h3 tag</h3>
      <p>Header Tag data here with paragraph tag</p>
      <p>Some additional information here</p>
    </header>
  `
})
export class HeaderElementComponent implements EleComponent {
  @Input() data: any;
}
