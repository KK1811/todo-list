import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotesServiceService } from 'src/app/service/notes-service.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit {

  constructor(private notesService:NotesServiceService) { }

  ngOnInit() {
  }

  addNote(addNoteForm:NgForm){
    this.notesService.addNote(addNoteForm.value).then(data=>{
      console.log(data)
      console.log(addNoteForm.value)
    })
  }

}
