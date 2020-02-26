import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {

  /** Event after file is dropped */
  @Output() fileDropped = new EventEmitter<any>();

  /** Style host binding */
  @HostBinding('style.background-color') background = 'transparent';

  constructor() { }

  /** Drag over listener */
  @HostListener('dragover', ['$event']) onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();

    this.background = '#f0f0f0';
  }

  /** Drag leave listener */
  @HostListener('dragleave', ['$event']) public onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();

    this.background = 'transparent';
  }

  /** Drop listener */
  @HostListener('drop', ['$event']) public onDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    this.background = 'transparent';

    const files = event.dataTransfer.files;

    this.fileDropped.emit(files);
  }
}
