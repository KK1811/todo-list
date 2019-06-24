import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  
  constructor(private db:AngularFirestore) { }

  addNote(note){
    let createdOn = new Date()
    return this.db.collection('notes').add({note, createdOn})
  }

  getAllNotes(){
    return this.db.collection('notes').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any
        const id = a.payload.doc.id;
        return data;
      }))
    );
  }

  updateNote(){
    return this.db.collection('notes').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id;
        this.db.collection('notes').doc(id).update('asd')
      }))
    );
  }

  deleteNote(){
    return this.db.collection('notes').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id;
        this.db.collection('notes').doc(id).delete()
      }))
    );
  }
}
