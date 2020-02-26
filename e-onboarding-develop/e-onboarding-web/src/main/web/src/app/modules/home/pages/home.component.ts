import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Routes
  routes = [
    {
      image: './assets/images/background1.jpg',
      title: 'Onboarding',
      subtitle: 'Manage onboarding associates',
      link: '/onboarding',
      icon: 'people_outline',
      color: '#89bc6e'
    },
    {
      image: './assets/images/background2.jpg',
      title: 'Leave management',
      subtitle: 'Manage leave of associates',
      link: '',
      icon: 'calendar_today',
      color: '#3ba4cb'
    },
    {
      image: './assets/images/background3.jpg',
      title: 'Survey',
      subtitle: 'Manage all surveys',
      link: '',
      icon: 'rate_review',
      color: '#fdc766'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
