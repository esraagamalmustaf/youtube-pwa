import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  headers: HttpHeaders
  lang = 'en'
  apiKey = "AIzaSyApCBeC1FrobeJ1smsgswwGyiSx4KIE4xQ"
  apiUrl = environment.apiUrl

  constructor(public http: HttpClient) {

    let headers = { 'Content-Type': 'application/json; charset=UTF-8', 'Accept-Language': this.lang }
    this.headers = new HttpHeaders(headers)


    // const cacheAvailable = 'caches' in self;

  }


  getChannelVideoList(channel, maxResults) {
    let options = { headers: this.headers };


    let url = this.apiUrl + 'search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet&type=video,id&maxResults=' + maxResults
    return this.http.get(url, options)
      .pipe(map((res) => {
        return res;
      }))
  }



  getVideoDetails(videoId) {
    let options = { headers: this.headers };
    let url = this.apiUrl + "videos?part=snippet,contentDetails,statistics&id=" + videoId + "&key=" + this.apiKey;
    return this.http.get(url, options)
      .pipe(map((res) => {
        return res;
      }))

  }

}