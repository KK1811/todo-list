import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/service/notes-service.service';


@Component({
  selector: 'app-allnotes',
  templateUrl: './allnotes.component.html',
  styleUrls: ['./allnotes.component.css']
})
export class AllnotesComponent implements OnInit {

  constructor(private notesService:NotesServiceService) { }

  ngOnInit() {
    this.getNotes()
  }

  notes=[]

  getNotes(){
    this.notesService.getAllNotes().subscribe(data=>{
      this.notes=data
      console.log(this.notes)
    })
  }

  deleteNote(){
    this.notesService.deleteNote()
  }

}
