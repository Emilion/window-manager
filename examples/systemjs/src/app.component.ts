import {Component, OnInit} from '@angular/core';
import {} from 'ng2-window-manager';

@Component({
    selector: 'my-app',
    template: `<window></window><window [bg-color]="colorGreen"></window>`,
    styles: [
        `body {
            padding: 0; 
            margin: 0;
        }`
    ]
})
export class AppComponent implements OnInit {
    colorGreen = 'green';

    constructor() {
    }

    ngOnInit() {
    }
}
