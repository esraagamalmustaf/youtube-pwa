import { Component, OnInit, OnDestroy } from '@angular/core';
import { FavouriteService } from 'src/app/services/favourite.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.scss']
})

export class FavouriteListComponent implements OnInit,OnDestroy {
$unsubscripe$ :Subject<boolean> = new Subject<boolean>();
favouriteList ;
  constructor( private favouriteService:FavouriteService) { 

  }

  ngOnInit() {
    this.getFavouriteList()
  }

  getFavouriteList(){

    this.favouriteService.getFavouriteList().pipe(takeUntil(this.$unsubscripe$)).subscribe(res=>{
      this.favouriteList = res
 
    })


}
ngOnDestroy(){
  this.$unsubscripe$.next(true)
  this.$unsubscripe$.unsubscribe()
}
}
