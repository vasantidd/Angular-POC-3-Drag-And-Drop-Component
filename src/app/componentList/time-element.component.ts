import { Component, Input } from "@angular/core";
import { EleComponent } from "../element-interface.component";

@Component({
  template: `
    <div>
      <h4>{{ data.name }}</h4>
      <h5>{{ data.bio }}</h5>
      <p>Open from <time>10:00</time> to <time>12:00</time> every weekday.</p>

      <p>I have meeting date<time datetime="2008-02-14 20:00"></time>.</p>
    </div>
  `
})
export class TimeElementComponent implements EleComponent {
  @Input() data: any;
}
