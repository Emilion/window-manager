/**
 * Represents window which is counted from the manager.
 * It creates a connection between all open windows.
 */

import {Directive, ElementRef, Renderer} from "@angular/core";

@Directive({
    selector: '[window-child]'
})
export class WindowManagerChild {

    constructor(public el: ElementRef, public renderer: Renderer) {

    }
}