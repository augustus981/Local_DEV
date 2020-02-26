import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-card',
  templateUrl: './routing-card.component.html',
  styleUrls: ['./routing-card.component.scss']
})
export class RoutingCardComponent implements OnInit {

  // Style parameters
  @Input() image: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() link: string;
  @Input() icon: string;
  @Input() color: string;

  // Style object
  style = {};

  constructor() { }

  ngOnInit() {
    this.style = {
      'background-image': `url(${this.image})`
    };
  }
}
