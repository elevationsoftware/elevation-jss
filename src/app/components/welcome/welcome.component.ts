import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  rendering: any;
  copyright = 'Copyright Sitecore A/S';

  constructor() {}
}
