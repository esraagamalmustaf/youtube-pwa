import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StarService } from 'src/app/services/star.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {

  constructor(private starService: StarService) {

  }
  @Input("videoId") videoId

  star: Observable<any>;

  avgRating: Observable<any>
  ngOnInit() {
    this.getrating()
  }

  getrating() {
    this.star = this.starService.getVideoStars(this.videoId)
    this.avgRating = this.star.pipe(map(arr => {
      const ratings = arr.map(v => v.value)
      return ratings.length ? ratings.reduce((total, val) => total + val) / arr.length : 'not reviewed'
    }))
  }

  rate(value) {
    this.starService.setStar(value, this.videoId)
  }


}
