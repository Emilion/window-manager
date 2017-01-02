import {Component} from "@angular/core";

@Component({
    selector: 'window',
    template: `<div class="row window" window-child wm-draggable="false">
    <header class="col-md-12">window manager header goes here</header>
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
        }`
    ]
})
export class NG2WMWindow {

    constructor() {

    }
}