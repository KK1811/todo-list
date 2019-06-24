import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetNotesService {

  constructor(private db:AngularFirestore) { }

  getAllNotes(){
    return this.db.collection('notes').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any
        return data;
      }))
    );
  }
}
