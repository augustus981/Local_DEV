import { ElementRef, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SpinnerUtil {

    renderer: Renderer2;

    constructor(
        private rendererFactory: RendererFactory2
    ) {
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }

    /** Show spinner */
    showSpinner(spinner: ElementRef) {
        this.renderer.setStyle(spinner.nativeElement, 'visibility', 'visible');
    }

    /** Hide spinner */
    hideSpinner(spinner: ElementRef) {
        this.renderer.setStyle(spinner.nativeElement, 'visibility', 'hidden');
    }
}
