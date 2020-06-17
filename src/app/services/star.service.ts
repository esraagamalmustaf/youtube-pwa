import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Star {
  value: number,
  userId: string,
  videoId: string
}
@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private afs: AngularFirestore) { }


  getVideoStars(videoId) {
    const starRef = this.afs.collection('star', ref => ref.where('videoId', '==', videoId))


    return starRef.valueChanges()
  }

  setStar(value, videoId) {
    const star = { value, videoId }
    const starPath = `star/_${star.videoId}`
    return this.afs.doc(starPath).set(star)
  }

}
