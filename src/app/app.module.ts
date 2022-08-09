import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// FORM
import { FormsModule } from '@angular/forms';

// SHARED COMPONENT
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { SpaceComponent } from './shared-components/space/space.component';
import { ControlerComponent } from './components/controler/controler.component';

// FEED COMPONENT
import { FeedComponent } from './components/feed/feed.component';
import { AddFeedComponent } from './components/feed/add-feed/add-feed.component';
import { DashboardFeedComponent } from './components/feed/dashboard-feed/dashboard-feed.component';
import { UserFeedComponent } from './components/feed/user-feed/user-feed.component';

// OTHER MODULE
import { AngularMaterialModuleModule } from './shared-module/angular-material/angular-material-module.module';
import { PrimengModule } from './shared-module/primeng/primeng.module';

import {SliderModule} from 'primeng/slider';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ControlerComponent,
    FeedComponent,
    HeaderComponent,
    AddFeedComponent,
    UserFeedComponent,
    DashboardFeedComponent,
    SpaceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModuleModule,
    PrimengModule,
    SliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
