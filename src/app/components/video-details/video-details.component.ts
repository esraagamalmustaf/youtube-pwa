import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ChannelService } from 'src/app/services/channel.service';
import { takeUntil } from 'rxjs/operators';
import { Subject} from 'rxjs';
import { FavouriteService } from 'src/app/services/favourite.service';

const CASH_KEY = 'video-details';
@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})

export class VideoDetailsComponent implements OnInit, OnDestroy {
  videoId: string
  Video:any;
  unsubscribe$: Subject<boolean> = new Subject<boolean>();
  constructor(private activatedRoute: ActivatedRoute, private channelService: ChannelService ,private favourtiteService:FavouriteService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.videoId = param['videoId']
      })
     this.getVideoDetails()
  }

  getVideoDetails() {
    this.channelService.getVideoDetails(this.videoId).pipe
      (takeUntil(this.unsubscribe$)).subscribe(res => {
        this.Video=res['items'][0]
        localStorage[CASH_KEY] = JSON.stringify(this.Video)

      })
      this.Video = JSON.parse(window.localStorage.getItem(CASH_KEY));
  }



message:boolean=false;
  addToFavouriteList(videoId,thumbnail,title){
      this.favourtiteService.addToFavouriteList(videoId,thumbnail,title)
      this.message=true
  }


  removeFromFavouriteList

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe()
  }
}
