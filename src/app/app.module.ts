import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { fetchdataService } from './fetchdata.service';
import { FormsModule }   from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { LogInComponent } from './log-in/log-in.component';
import { HeighLighterDirective } from './heigh-lighter.directive';
import { MyNgIfDirective } from './my-ng-if.directive';
import { CapitalizePipe } from './capitalize.pipe';
let routes:Routes=
[
  {
    path: '',
    component: HomeComponent
  },

  {
    path:"features",
    component:FeaturesComponent
  },
  {
    path:"pricing",
    component:PricingComponent,
  },
  {
    path:"posts",
    component:PostsComponent
  },
  {
    path:"posts/:id",
    component:PostComponent
  },
  {
    path:"log-in",
    component:LogInComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    PricingComponent,
    HomeComponent,
    SidebarComponent,
    PostsComponent,
    PostComponent,
    LogInComponent,
    HeighLighterDirective,
    MyNgIfDirective,
    CapitalizePipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })

  ],
  providers: [
    fetchdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
