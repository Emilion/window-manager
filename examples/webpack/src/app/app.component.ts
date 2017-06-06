import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<window></window>`,
})
export class AppComponent {
    constructor() {
        console.log('should see windows now')
    }
}
