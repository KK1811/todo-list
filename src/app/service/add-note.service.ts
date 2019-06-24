import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AddNoteService {

  constructor(private db:AngularFirestore) { }

  addNote(note){
    let createdOn = new Date()
    return this.db.collection('notes').add({note, createdOn})

  }
}
