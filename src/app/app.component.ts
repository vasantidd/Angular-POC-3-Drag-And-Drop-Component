import { Component, OnInit } from "@angular/core";
import { ElementService } from "./element.service";
import { ElementItem } from "./element-item";

@Component({
  selector: "my-app",
  template: `
    <div>
      <app-ad-banner [ele]="ele" dataIndex></app-ad-banner>
    </div>
  `
})
export class AppComponent implements OnInit {
  ele: ElementItem[];
  childata: any;

  constructor(private elementService: ElementService) {}
  ngOnInit() {
    this.ele = this.elementService.getElement();
  }
}
