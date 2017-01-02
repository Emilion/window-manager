import {Component, Input, ElementRef, OnInit} from "@angular/core";
import {WindowMangerService} from "./ng2-window-manager.service";

@Component({
    selector: 'window',
    template: `<div class="row window" window-child wm-draggable="false" [wm-drag-disabled]="false">
    <header class="col-md-12 window-toolbar">Window {{ windowIndex }}</header>
    <section class="col-md-12"></section>
    <footer class="col-md-12"></footer>
        </div>`,
    styles: [`
        .window {
            position: fixed;
            z-index: 10000;
            min-height: 200px;
            width: 400px;
            background-color: red;
        }
        .window-toolbar {
            background-color: #333333;
            color: #fff4c2;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            min-height: 34px;
        }`
    ]
})
export class NG2WMWindow implements OnInit {

    @Input('bg-color') set bgColor(color: string) {
        if(this.template.nativeElement.childNodes[0]) {
            this.template.nativeElement.childNodes[0].style.backgroundColor = color;
            console.log(color, this.template);
        }
    }
    constructor(public template: ElementRef) {
    }
    ngOnInit(): void {
        WindowMangerService.addWindow({name: 'window', title: 'test'});
        WindowMangerService.log();
    }
}