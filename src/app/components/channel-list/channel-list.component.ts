import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChannelService } from 'src/app/services/channel.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';




const CASH_KEY = 'channel-list';



@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss'],

})

export class ChannelListComponent implements OnInit, OnDestroy {
  channel = "UCeN0Nbr95GLs9rxEYSiGHCQ"
  maxResults = "30"
  unsubscribe$: Subject<boolean> = new Subject<boolean>();
  filtered:any[]=[];
  videosList :any[]=[];
  searchText: string;
  page = 1;
  pageSize = 10;

  constructor(private channelService: ChannelService) {

  }



  ngOnInit() {
    this.getChannelVideoList()
 
    // this.filtered =this.searchText ? this.filtered : this.videosList
  }
  loading:boolean=false;
  getChannelVideoList() {
    this.loading=true;
    this.channelService.getChannelVideoList(this.channel, this.maxResults)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => {
        
          for (let item of res["items"]) {
            this.videosList = this.videosList|| []
            this.videosList.push(item)
         
          }
        
          localStorage[CASH_KEY] = JSON.stringify(this.videosList)
        this.loading=false
        })
    this.videosList = JSON.parse(window.localStorage.getItem(CASH_KEY));
    this.filtered = this.videosList
   
   
  
  }

  performFilter(filterBy) {

    if (filterBy) {
      filterBy = filterBy.target.value.toLocaleLowerCase();
      this.filtered = this.videosList.filter((video: any) =>
        video.snippet.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
    } else {
      this.filtered = this.videosList;
    }

  }


//   getObjectSize(obj) {

//     let size = 0, key;
//     for (key in obj) {
//         if (obj.hasOwnProperty(key)) size++;
//     }
//     return size;
// };
  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe()
  }
}
