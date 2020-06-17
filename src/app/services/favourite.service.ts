import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { favouriteList } from '../models/favouriteList';


@Injectable({
  providedIn: 'root'
})

export class FavouriteService {

  constructor(private afs: AngularFirestore) {


  }
  getFavouriteList() {
    const favouriteList = this.afs.collection('favouriteList')

    return favouriteList.valueChanges()
  }

  addToFavouriteList(videoId, thumbnail, title) {

    const favouriteList: favouriteList = { videoId, thumbnail, title }
    const favouriteListPath = `favouriteList/_${favouriteList.videoId}`
    return this.afs.doc(favouriteListPath).set(favouriteList)



  }
  //   db.collection("cities").doc("DC").delete().then(function() {
  //     console.log("Document successfully deleted!");
  // }).catch(function(error) {
  //     console.error("Error removing document: ", error);
  // });

  removeFromFavouriteList(videoId) {
    this.afs.collection('favouriteList').doc('videoId').delete()
  }


}
