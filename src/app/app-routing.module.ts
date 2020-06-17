import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { NavComponent } from './components/nav/nav.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { FavouriteListComponent } from './components/favourite-list/favourite-list.component';


const routes: Routes = [
//  { path: '', loadChildren: './modules/youtube-channel/youtube-channel.module#LazyModuleModule' },
{path:'', component : ChannelListComponent},
{path:'nav',component:NavComponent},
{path:'details/:videoId',component:VideoDetailsComponent},
{path:'favourites',component:FavouriteListComponent}


]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
