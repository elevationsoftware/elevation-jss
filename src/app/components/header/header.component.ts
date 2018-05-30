import { Component, OnInit, Input } from '@angular/core';
import { JssService, JssNavItem } from '../../jss.service';
import { Router } from '@angular/router';
import { JssRouteBuilderService, JssRoute } from '../../jss-route-builder.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems: JssNavItem[];
  pageEditing: boolean;
  homeUrl: JssNavItem;

  @Input() rendering: any;
  constructor(
    private jssService: JssService,
    private router: Router,
    private urlBuilder: JssRouteBuilderService
  ) { }

  ngOnInit() {
    this.jssService.state.subscribe(jssState => {
      if (jssState.sitecore) {
        const navigation = jssState.sitecore.context.navigation;
        this.navItems = navigation && navigation[0] && navigation[0].children;
        this.homeUrl = navigation && navigation[0];
      }
    });
  }

  go(navItem: JssNavItem) {
    const jssRoute = new JssRoute();
    jssRoute.serverRoute = navItem.path;
    this.router.navigateByUrl(this.urlBuilder.buildRouteUrl(jssRoute));
  }

}
