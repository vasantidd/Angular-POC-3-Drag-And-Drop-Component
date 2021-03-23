import { Component, Input } from "@angular/core";
import { EleComponent } from "../element-interface.component";

@Component({
  template: `
    <h4>{{ data.name }}</h4>
    <h5>{{ data.bio }}</h5>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>mary@example.com</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>july@example.com</td>
        </tr>
      </tbody>
    </table>
  `
})
export class TableElementComponent implements EleComponent {
  @Input() data: any;
}
