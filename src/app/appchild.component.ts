import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  ComponentFactoryResolver
} from "@angular/core";
import { AppDirective } from "./app.directive";
import { ElementService } from "./element.service";
import { ElementItem } from "./element-item";
import { EleComponent } from "./element-interface.component";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-ad-banner",
  template: `
    <div class="ad-banner-example">
      <h4>Drag And Drop Component</h4>
      <table class="table table-striped table-bordered">
        <tbody>
          <tr>
            <td style="width: 50%">
              <h6>Drop Here</h6>
              <hr />
              <ng-template adHost></ng-template>
              <hr />
              <div
                cdkDropList
                class="example-container"
                (cdkDropListDropped)="drop($event)"
              ></div>
            </td>
            <td style="width: 50%">
              <h6>Drag From Here</h6>
              <div class="example-container">
                <div
                  class=""
                  (click)="getInfo($event, i)"
                  *ngFor="let item of items; let i = index"
                  cdkDrag
                >
                  <div
                    class="my-2"
                    style="border: 1px solid white ; background-color:blue"
                  >
                    {{ item }}
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class DragDropComponent implements OnInit {
  @Input() ele: ElementItem[];

  items = [
    "Header",
    "Table",
    "Footer",
    "Time",
    "Dropdown",
    "Spinner",
    "Button",
    "Textbox",
    "Divider",
    "Mask"
  ];

  @ViewChild(AppDirective, { static: true }) adHost: AppDirective;

  currentAdIndex = -1;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private elementService: ElementService
  ) {}

  ngOnInit() {}
  loadComponent(dataIndex) {
    this.currentAdIndex = dataIndex % this.ele.length;
    const eleItem = this.ele[this.currentAdIndex];
    //to laod the component dynamically
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      eleItem.component
    );

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<EleComponent>(
      componentFactory
    );
    componentRef.instance.data = eleItem.data;
    eleItem.data = this.items[this.currentAdIndex];
    console.log("the load Component IndexVal " + dataIndex);
  }

  drop(event: CdkDragDrop<string[]>) {
    // this.loadComponent();
  }
  getInfo(event: any, index: any) {
    this.loadComponent(index);
  }
}
