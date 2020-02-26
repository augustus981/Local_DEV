import { INDUCTION } from 'src/app/shared/constants/content';
import { UNITS } from 'src/app/shared/constants/unit';

import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-induction-card',
  templateUrl: './induction-card.component.html',
  styleUrls: ['./induction-card.component.scss']
})
export class InductionCardComponent implements OnInit {

  // Constants
  readonly INDUCTION = INDUCTION;

  // Card
  @ViewChild('card', { read: ElementRef, static: true }) card: ElementRef;

  // Style parameters
  @Input() type: string;
  @Input() task: string;
  @Input() description: string;
  @Input() duration: number;
  @Input() fileAmount: number;
  durationUnit: string;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.setClass();
    this.setDuration();
  }

  /** Set styles based on type */
  setClass() {
    switch (this.type) {
      case INDUCTION.TO_DO:
        this.renderer.addClass(this.card.nativeElement, INDUCTION.TO_DO);
        break;
      case INDUCTION.TO_DO_ADD:
        this.renderer.addClass(this.card.nativeElement, INDUCTION.TO_DO_ADD);
        break;
    }
  }

  /** Set duration */
  setDuration() {
    if ((this.duration % 7) === 0 && this.duration > 7) {
      this.duration /= 7;
      this.durationUnit = UNITS.DURATION_WEEKS;
    } else {
      this.durationUnit = UNITS.DURATION_DAYS;
    }
  }
}
