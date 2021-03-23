import { Component, Input } from "@angular/core";
import { EleComponent } from "../element-interface.component";

@Component({
  template: `
    <h4>{{ data.name }}</h4>
    <h5>{{ data.bio }}</h5>
    <footer class="footer">
      <p>
        Author: Hege Refsnes<br />
        <a href="mailto:test@example.com">test@example.com</a>
      </p>
    </footer>
  `,
  styleUrls: ["../app.component.css"]
})
export class FooterElementComponet implements EleComponent {
  @Input() data: any;
}
