import { Component, Input } from "@angular/core";
import { EleComponent } from "../element-interface.component";

@Component({
  template: `
    <h4>{{ data.name }}</h4>
   <h5>{{ data.bio }}</h5>
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
      >
        Dropdown Example <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
        <li><a href="tutorial.html">HTML</a></li>
        <li><a href="tutorial.html">CSS</a></li>
        <li><a href="tutorial.html">JavaScript</a></li>
      </ul>
    </div>
  `
})
export class DropdownElementComponent implements EleComponent {
  @Input() data: any;
}
