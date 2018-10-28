import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { LogInComponent } from './log-in/log-in.component';
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
    LogInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
