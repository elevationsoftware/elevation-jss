import { BrowserModule, BrowserTransferStateModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppJssInfrastructureModule } from './app-jss-infrastructure.module';
import { JssModule } from '@sitecore-jss/sitecore-jss-angular';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { JssRouteComponent } from './components/jss-route/jss-route.component';
import { Card1Component } from './components/card-1/card-1.component';
import { HeaderComponent } from './components/header/header.component';
import { Column4Component } from './renderings/column-4/column-4.component';
import { Column2Component } from './renderings/column-2/column-2.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotFoundComponent,
    ServerErrorComponent,
    JssRouteComponent,
    Card1Component,
    HeaderComponent,
    Column4Component,
    Column2Component,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    // withServerTransition is needed to enable universal rendering
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    NgbModule.forRoot(),
    BrowserTransferStateModule,
    HttpClientModule,
    AppRoutingModule,
    AppJssInfrastructureModule,
    JssModule.withComponents([
      { name: 'Welcome', type: WelcomeComponent },
      { name: 'Card1', type: Card1Component},
      { name: 'Column2', type: Column2Component },
      { name: 'Column4', type: Column4Component },
      { name: 'Carousel', type: CarouselComponent },
      { name: 'Footer', type: FooterComponent },
      { name: 'Header', type: HeaderComponent }
    ])
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
